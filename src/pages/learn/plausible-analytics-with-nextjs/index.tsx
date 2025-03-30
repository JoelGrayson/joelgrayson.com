import LearnPage from "@/components/page/LearnPage";
import { Segmented } from "antd";
import { useState } from "react";

export default function LearningContent() {
    const [importType, setImportType]=useState<'CJS' | 'ESM'>('ESM');
    const [routerType, setRouterType]=useState<'Pages Router' | 'App Router'>('App Router');
    
	return <LearnPage bottomPadding markdown> {/* Passing in .markdown means that it will format code */}
        <h1 style={{fontSize: 30}} className="mt-7">How to Set up Plausible Analytics with Next.js</h1>
        <ul>
            <li><code>npm i next-plausible</code></li>
            <li>
                <div className="flex items-center justify-between">
                    <p>To proxy the plausible scripts so ad blockers do not stop the collection, configure next.config.js like so:</p>
                    <Segmented
                        options={['CJS', 'ESM']}
                        value={importType}
                        onChange={setImportType}
                    />
                </div>
                <pre><code>{
                    importType==='CJS'
? `const { withPlausibleProxy }=require('next-plausible');
const nextConfig={
    ...
};
module.exports=withPlausibleProxy()(nextConfig);`
: `import { withPlausibleProxy } from 'next-plausible';
const nextConfig={
    ...
}
export default withPlausibleProxy()(nextConfig);`
}</code></pre>
            </li>
            <li>
                <div className="flex items-center justify-between">
                    <p>Add <code>{`<PlausibleProvider>`}</code> to <code>{routerType==='App Router' ? 'app/layout.tsx' : 'pages/_app.tsx'}</code></p>
                    <Segmented
                        options={['App Router', 'Pages Router']}
                        value={routerType}
                        onChange={setRouterType}
                    />
                </div>
                <pre><code>{
                    routerType==='App Router'
? `import PlausibleProvider from "next-plausible";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <html lang="en">
        <body>
            <PlausibleProvider domain="chineseisfun.com" />
            {children}
        </body>
    </html>;
}
`
: `import PlausibleProvider from 'next-plausible';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
    return <PlausibleProvider domain='joelgrayson.com' enabled>
        <Component {...pageProps} />
    </PlausibleProvider>;
}`
                }</code></pre>
            </li>
            <li>
                Add the website to your dashboard on <a href='https://plausible.io/sites' target="_blank">plausible.io</a>
            </li>
        </ul>
    </LearnPage>;
}

/*
// Old index.mdx:

import LearnPage from "@/components/page/LearnPage";
export default function LearningContent({children}) {
	return <LearnPage markdown bottomPadding>{children}</LearnPage>;
}

<h1 style={{fontSize: 30}}>How to Set up Plausible Analytics with Next.js</h1>

1. `npm i next-plausible`
2. To proxy the plausible scripts so ad blockers do not stop the collection, configure next.config.js like so:
```js
const { withPlausibleProxy }=require('next-plausible');
const nextConfig={
    ...
};
module.exports=withPlausibleProxy()(nextConfig);
```
3. Add `<PlausibleProvider>` to `_app.tsx`:
```tsx
import PlausibleProvider from 'next-plausible';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
    return <PlausibleProvider domain='joelgrayson.com' enabled>
        <Component {...pageProps} />
    </PlausibleProvider>;
}
```
4. Add the website to your dashboard on [plausible.io](https://plausible.io/sites)

*/

