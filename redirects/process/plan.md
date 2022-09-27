# Broken Note
Regex does not work
Array with regex does not work


# Input
key: new destination: String
value:
* `{key} instanceof RegExp`
    * special array syntax
* `typeof {key}==='string'`
    * simple redirect
* `{key} instanceof Array`
    * list of sources

# Output
```js
[
    {
        source: '/about',
        destination: '/',
        permanent: true,
    },
    {
        source: '/english\\(default\\)/:slug',
        destination: '/en-us/:slug',
        permanent: false,
    },
]
```