/*
# The Perspective Drive
https://drive.google.com/drive/u/0/folders/1nxO2HdYoHkQ8R9tch8bxbJOqyevDCV6R

# Each File Should Include
* `export` Title
* `export` Published date object
* `export default` function component to render

# Thumbnail in Public Folder
* Dimensions - 400x225
*/




```tsx
useEffect(()=>{ //Load content from .tsx component files
    if (!hyphenatedTitle) return; //loading
    
    import(`@/components/perspective/content/${hyphenatedTitle}`) //load content afterward, so not a slow pageload
        .then((imported: { default: JSX.Element; title: string; date: Date })=>{
            setContent(imported?.default || null);
            setTitle(imported.title);
            setDate(imported.date);
        })
        .catch(e=>{
            if (e.code==='MODULE_NOT_FOUND') { //article does not exist
                setTitle('404');
                setContent(<p className='text-center'>The article titled &quot;{hyphenatedTitle}&quot; does not exist.</p>);
            } else //unknown error
                console.log('Unknown error', e);
        });
}, [hyphenatedTitle]);
```
