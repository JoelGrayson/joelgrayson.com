import Page from "@/components/page/DefaultPage";

export default function Tips() {
    return <Page>
        <h3>Be a Google Power User</h3>
        <p>Google has a lot of hidden features. Here are some of my favorites.</p>
        <table className="grid grid-cols-2">
            <div>Tip</div>
            <div>How To</div>
            <div>Get raw image from google doc</div>
            <div>click <code>File &gt; Download &gt; Web Page (.html, zipped)</code>. Unzip the file. The images are in a folder.</div>
            <div>shortcuts</div>
            <div>
                <div>docs.new</div>
                <div>sheets.new</div>
                <div>slides.new</div>
                <div>forms.new</div>
            </div>
        </table>
    </Page>;
}

