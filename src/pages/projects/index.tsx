import Page from '@/components/page/DefaultPage';
import Link from 'next/link';

export default function Projects() {
    return <Page bottomPadding
        seo={{
            title: 'Projects',
            description: ''
        }}
        pathname='/projects'
    >
        <h1 className='text-center'>Projects</h1>

        {/* List view and timeline view, which will show them in succession (vertical is the projects, horizontal is over time) with milestones that were reached (launched, 100 users, 1000 users, version 1.5 released, ...)
         */}
        {/* Properties of each project
            * Image/icon
            * Name
            * Start date
            * End date
            * Things I learned - e.g. Firestore
            * 
         */}
    </Page>;
}

