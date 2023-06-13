import e, { eventT } from './e.js';

const data: eventT[]=[ //ordered from past to future in shortest to longest time duration categories in order that year is rendered at top
    // Dates
    // Harvard Club
    // Talent Show
    // 

    // Date Ranges <1 month


    // Months


    // Month Ranges <1 year
    e('Life Restart', { startDate: 'June 2017', endDate: 'Dec 2017', rangeScope: 'month' }, 'Leaving VCS meant I had no friends for a while, a lonely and sad experience. It was at this point that I first became extremely scared of death although I thought about it with anxiety at VCS occasionally while waiting in the hallway before class.'),
    e('Dark Ages', { startDate: 'Mar 2020', endDate: 'Aug 2020', rangeScope: 'month' }, 'Stuck at home with Riverdale shut down because of COVID. Appendicitis.'),
    e('Era of Suits', { rangeScope: 'month', startDate: 'January 2023', endDate: 'May 2023' }, 'Running for CB1, SFC, ARISE, NYC Gov, SSP, M&Ms, and Sustainability Club.'
        +'\n✔ ARISE (8%)     x SSP (10%)'
        +'\n✔ CB1 (7%)       x SFC (17%)'
        +'\n✔ Sustainability x M&Ms (67%)'
        +'\n✔ NYC Gov (low)  x Building a Fusor (low)'
    ),
    

    // Year
    
    
    // Month Ranges >1 year
    e('joelgrayson.com', { startDate: 'Aug 2020', endDate: 'today', rangeScope: 'month' }, 'I created joelgrayson.com initially for Student Government campaigning. It has evolved into this website, coded in Next.js and TypeScript.'),
    e('Student Government Grade Representative', { startDate: 'Sep 2019', endDate: 'today', rangeScope: 'month' }),


    // Year Ranges
    e('VCS', { startDate: 2010, endDate: 2016, rangeScope: 'year' }),
    e('Riverdale', { startDate: 2016, endDate: 2024, rangeScope: 'year' }),
    
    
];

export default data;
