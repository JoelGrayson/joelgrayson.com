import Page from '@/components/Page';
import { Subject } from 'pages/maths';

export default function index() {
    return (<Page padding>
        <h1>Software</h1>
        <Subject link='/software/focus'>Focus</Subject>
    </Page>);
}
