import e, { eventT } from './e.js';

const data: eventT[]=[ //ordered from past to future in longest to shortest time duration categories in order that year is rendered at bottom
    // Year Ranges
    e('VCS', { startDate: 2010, endDate: 2016, rangeScope: 'year' }, 'Lower School', '#1c325f'),
    e('Chicken Factory', { startDate: 2013, endDate: 2016, rangeScope: 'year' }, ''),
    e('Riverdale', { startDate: 2016, endDate: 2024, rangeScope: 'year' }, 'Middle and High School', '#820B07'),


    // Ranges >1 year
    e('joelgrayson.com', { startDate: 'Aug 2020', endDate: 'today', rangeScope: 'month' }, 'I created joelgrayson.com initially for Student Government campaigning. It has evolved into this website, coded in Next.js and TypeScript.', '#47daed'),
    e('Student Government Grade Representative', { startDate: 'Sep 2019', endDate: 'today', rangeScope: 'month' }, '', '#BE11DB'),


    // Year


    // Ranges <1 year
    e('Life Restart', { startDate: 'June 2017', endDate: 'Dec 2017', rangeScope: 'month' }, 'Leaving VCS meant I had no friends for a while, a lonely and sad experience. It was at this point that I first became extremely scared of death although I thought about it with anxiety at VCS occasionally while waiting in the hallway before class.'),
    e('Interlochen', { startDate: 'June 22 2019', endDate: 'July 12, 2019', rangeScope: 'day' }, '', '#003057'),
    e('CTY Politics Camp', { startDate: 'July 13 2019', endDate: 'Aug 2, 2019', rangeScope: 'day' }, '', '#005eb8'),
    e('Trip to France', { startDate: 'August 14 2019', endDate: 'August 26, 2019', rangeScope: 'day' }, '', 'darkblue'),

    
    e('Dark Ages', { startDate: 'Mar 2020', endDate: 'Aug 2020', rangeScope: 'month' }, 'Stuck at home with Riverdale shut down because of COVID. Appendicitis.'),
    e('Era of Suits', { rangeScope: 'month', startDate: 'January 2023', endDate: 'May 2023' }, 'Running for CB1, SFC, ARISE, NYC Gov, SSP, M&Ms, and Sustainability Club.'
        +'\n✔ ARISE (8%)     x SSP (10%)'
        +'\n✔ CB1 (7%)       x SFC (17%)'
        +'\n✔ Sustainability x M&Ms (67%)'
        +'\n✔ NYC Gov (low)  x Building a Fusor (low)'
    ),
    e('Industrial Revolution', { startDate: 'Jun 2023', endDate: 'Sep 2023', rangeScope: 'month' }, 'Assembled 3D Printer, Vending Machine, Slayer Exciter. Tentative: FiDi project, and real Tesla Coil'),
    e('Supplement Factory', { startDate: 'Aug 2023', endDate: 'Sep 2023', rangeScope: 'month' }, 'Churning them out one at a time at a rate of one college per three days.'),
    

    // Months
    e('Start of Lux Premier', { year: 2019, month: 11, scope: 'month' }, 'First time speaking for grade representative. Tossed my hat into the ring. I promised donuts.'),

    // Individual Dates
    e('Speech for Grade Representative and MS President', { day: '9/13/2019', scope: 'day' }, 'First time speaking for grade representative. Tossed my hat into the ring. I promised donuts.'),
    e('Joelpardy', { day: 'November 8, 2019', scope: 'day' }, 'Hosted event.', '#060CE9'),
    e('Geography Bee', { day: 'Dec 18, 2019', scope: 'day' }, 'I came in third to Julien and Hiro. I had spent months studying.'),

    e('Harvard Club Presentation', { day: '5/18/2022', scope: 'day' }, 'Presented to the Harvard Club on the solar energy and electric school bus initiatives.'),
    e('Magic Show', { day: '12/11/2017', scope: 'day' }, 'Performed a magic show in front of the middle school. As a new student, this was very brave of me.'),
];

export default data;
