import Page from "@/components/page/DefaultPage";

function NotePage({ children }: any) {
    return <Page>{children}</Page>;
}

export default function GoogleDocsImages() {
    return <NotePage>
        <p>Click <code>File &gt; Download &gt; Web Page (.html, zipped)</code></p>
    </NotePage>;
}

