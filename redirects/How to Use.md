# How to Use
1. Add your redirects to REDIRECTS.ts
2. Run `./build.sh`
2. Add to your `next.config.js` file:
```js
const redirects=require('./redirects/dist/main').default;
```

# Learn more
[Learn more about Next.js redirects from Next.js' docs](https://nextjs.org/docs/api-reference/next.config.js/redirects)
