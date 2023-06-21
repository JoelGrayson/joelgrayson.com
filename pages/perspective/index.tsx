import { useEffect, useMemo, useState } from 'react';
import Router from 'next/router';
import PerspectivePage from '@/components/perspective/PerspectivePage';
import { articles } from '@/components/perspective/ArticlesList';
import { categories, displayCategory } from '@/components/perspective/ArticlesList/types';
import Article from '@/components/perspective/ArticlesList/Article';

const gridStyle={
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    justifyItems: 'center',
};

export default function JoelsPerspective() { //List of articles
    // # Sort_By
    const defaultSortingMethod='newest-to-oldest';
    type sortingMethodT='newest-to-oldest' | 'oldest-to-newest' | 'category' | 'A-Z' | 'Z-A';
    const sortingMethods: sortingMethodT[]=useMemo(()=>['newest-to-oldest', 'oldest-to-newest', 'category', 'A-Z', 'Z-A'], []);
    const [sortingMethod, _setSortingMethod]=useState<sortingMethodT>(defaultSortingMethod);
    function setSortingMethod(newSortingMethod: sortingMethodT) {
        // update query
        Router.push({
            pathname: Router.pathname,
            query: newSortingMethod===defaultSortingMethod
                ? '' //don't include if default
                : 'sort_by='+newSortingMethod,
        });
        _setSortingMethod(newSortingMethod);
    }

    useEffect(()=>{ //check query string ?sort_by=... only first time page loads
        console.log('checking query string', Router.query);
        if (sortingMethods.includes(Router.query.sort_by as sortingMethodT)) {
            console.log('sorting method found in query string');
            const sortingMethod=Router.query.sort_by as sortingMethodT;
            _setSortingMethod(sortingMethod);
        }
    }, [sortingMethods]);

    // # Articles
    const sortedArticles=(()=>{
        switch (sortingMethod) {
            case 'newest-to-oldest': return articles.sort((a, b)=>b.date.getTime()-a.date.getTime());
            case 'oldest-to-newest': return articles.sort((a, b)=>a.date.getTime()-b.date.getTime());
            case 'category':         return articles; //group later
            case 'A-Z':              return articles.sort((a, b)=>a.name<b.name ? -1 : 1);
            case 'Z-A':              return articles.sort((a, b)=>a.name<b.name ? 1 : -1);
        }
    })();

    return <PerspectivePage>
        <div className='flex justify-end mb-3'>
            <span>Sort by: </span>
            <select name='sorting-method' id='sorting-method' value={sortingMethod} onChange={e=>setSortingMethod(e.target.value as sortingMethodT)}>
                <option value='newest-to-oldest'>Newest to Oldest</option>
                <option value='oldest-to-newest'>Oldest to Newest</option>
                <option value='category'>By Category</option>
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
            </select>
        </div>
        {
            sortingMethod==='category'
            ? 
                categories.map(category=>{ 
                    const { name, color }=displayCategory.get(category)!;
                    return <div key={category} style={{ backgroundColor: color, borderRadius: 10 }} className='border-b-2 shadow-sm px-3 py-3 pb-5 mb-4'>
                        <h3 className='text-center bold'>{name}</h3> {/* Category name */}
                        <div style={gridStyle}> {/* Articles item */}
                            {articles.filter(a=>a.category===category).map(article=>( //get articles of a category
                                <Article key={article.hyphenatedTitle} article={article} />
                            ))}
                        </div>
                    </div>;
                })
            : <div style={gridStyle}>{
                sortedArticles.map(article=>
                    <Article key={article.hyphenatedTitle} article={article} />
                )
            }</div>
        }
    </PerspectivePage>;
}
