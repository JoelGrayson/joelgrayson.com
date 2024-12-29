import NYCMarkdownPage from '@/components/global/NYCMarkdownPage';
import SEO from '@/components/page/parts/SEO';

export default function Timeline() {
    return <>
        <SEO seo={{
          title: 'Timeline',
        }} />
        <NYCMarkdownPage filename='timeline' />
    </>;
}
