import { useEffect, useMemo, useState } from 'react';
import Router from 'next/router';
import BlogPage from '@/components/blog/BlogPage';
import { articles } from '@/data/blog';
import { categories, displayCategory } from '@/data/blog/types';
import ArticleThumbnail from '@/components/blog/ArticleThumbnail';
import SEO from '@/components/page/parts/SEO';

const gridStyle={
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    justifyItems: 'center',
};

export default function JoelsBlog() { //List of articles
    return <BlogPage>
        <SEO seo={{
            title: 'Joel\'s Blog',
            description: 'Articles on philosophy, climate change, science, government, and more.',
            favicon: '/image/favicon.ico',
            og: {
                image: '/image/opengraph/blog.png'
            },
        }} />
        <BlogArticles />
    </BlogPage>;
}

export function BlogArticles() {
    // # Sort_By
    const DEFAULT_SORTING_METHOD='default';
    type SortingMethod='default' | 'newest-to-oldest' | 'oldest-to-newest' | 'category' | 'A-Z' | 'Z-A';
    const SORTING_METHODS: SortingMethod[]=useMemo(()=>['default', 'newest-to-oldest', 'oldest-to-newest', 'category', 'A-Z', 'Z-A'], []);

    const [sortingMethod, _setSortingMethod]=useState<SortingMethod>(DEFAULT_SORTING_METHOD);
    function setSortingMethod(newSortingMethod: SortingMethod) {
        // update query
        Router.push({
            pathname: Router.pathname,
            query: newSortingMethod===DEFAULT_SORTING_METHOD
                ? '' //don't include if default
                : 'sort_by='+newSortingMethod,
        });
        _setSortingMethod(newSortingMethod);
    }

    useEffect(()=>{ //check query string ?sort_by=... only first time page loads
        console.log('checking query string', Router.query);
        if (SORTING_METHODS.includes(Router.query.sort_by as SortingMethod)) {
            console.log('sorting method found in query string');
            const sortingMethod=Router.query.sort_by as SortingMethod;
            _setSortingMethod(sortingMethod);
        }
    }, [SORTING_METHODS]);

    // # Articles
    const sortedArticles=(()=>{
        switch (sortingMethod) {
            case 'default':          return articles;
            case 'newest-to-oldest': return articles.sort((a, b)=>b.date.getTime()-a.date.getTime());
            case 'oldest-to-newest': return articles.sort((a, b)=>a.date.getTime()-b.date.getTime());
            case 'category':         return articles; //group later
            case 'A-Z':              return articles.sort((a, b)=>a.title<b.title ? -1 : 1);
            case 'Z-A':              return articles.sort((a, b)=>a.title<b.title ? 1 : -1);
            default:                 return articles;
        }
    })();
    
    return <>
        <div className='d:grid d:grid-cols-3 mb-3 gap-2 items-center justify-items-center m:flex m:flex-col-reverse'>
            <div />

            <div>
                { sortingMethod==='default' && <h3 className='!py-0 !my-0'>Main Articles</h3> }
            </div>
            
            <div>
                <span>Sort by: </span>
                <select name='sorting-method' id='sorting-method' value={sortingMethod} onChange={e=>setSortingMethod(e.target.value as SortingMethod)} className='border border-gray-800 rounded-lg'>
                    <option value='default'>Default</option>
                    <option value='newest-to-oldest'>Newest to Oldest</option>
                    <option value='oldest-to-newest'>Oldest to Newest</option>
                    <option value='category'>By Category</option>
                    <option value='A-Z'>A-Z</option>
                    <option value='Z-A'>Z-A</option>
                </select>
            </div>
        </div>
        {
            sortingMethod==='category'
            ? categories.map(category=>{ 
                    const { name, color }=displayCategory.get(category)!;
                    return <div key={category} style={{ backgroundColor: color, borderRadius: 10 }} className='border-b-2 shadow-sm px-3 py-3 pb-5 mb-4'>
                        <h3 className='text-center bold text-black'>{name}</h3> {/* Category name */}
                        <div style={gridStyle}> {/* Articles item */}
                            {articles.filter(a=>a.category===category).map(article=>( //get articles of a category
                                <ArticleThumbnail key={article.hyphenatedTitle} article={article} />
                            ))}
                        </div>
                    </div>;
                })
            : sortingMethod=='default'
            ? <div>
                <div style={gridStyle}>
                    {
                        articles
                            .filter(a=>a.defaultSection === 'MAIN')
                            .sort(a=>a.defaultIndex)
                            .map(article=>{
                                return <ArticleThumbnail key={article.hyphenatedTitle} article={article} />;
                            })
                    }
                </div>
                
                <h3 className='mt-20 text-center'>Other Articles</h3>
                <div style={gridStyle}>
                    {
                        articles
                            .filter(a=>a.defaultSection === 'OTHERS')
                            .sort(a=>a.defaultIndex)
                            .map(article=>{
                                return <ArticleThumbnail key={article.hyphenatedTitle} article={article} />;
                            })
                    }
                </div>
            </div>
            : <div style={gridStyle}>{
                sortedArticles.map(article=>
                    <ArticleThumbnail key={article.hyphenatedTitle} article={article} />
                )
            }</div>
        }
    </>;
}
