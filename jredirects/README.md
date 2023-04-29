# How to Use JRedirects
1. Add your redirects to src/REDIRECTS.ts
2. Run `./build.sh`
2. Add to your `next.config.js` file:
```js
// JRedirects
const jredirects=require('./jredirects/dist');

module.exports={ redirects: jredirects };
```

# Learn more
[Learn more about Next.js redirects from Next.js' docs](https://nextjs.org/docs/api-reference/next.config.js/redirects)
