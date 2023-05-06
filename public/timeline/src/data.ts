import e, { eventT } from './e.js';

const data: eventT[]=[
    e('VCS', { startDate: 2010, endDate: 2016, rangeScope: 'year' }),
    e('Riverdale', { startDate: 2016, endDate: 2024, rangeScope: 'year' }),
    e('joelgrayson.com', { startDate: 'Aug 2020', endDate: 'today', rangeScope: 'month' }),
    e('Dark Ages', { startDate: 'Mar 2020', endDate: 'Aug 2020', rangeScope: 'month' }, 'Stuck at home with Riverdale shut down because of COVID. Appendicitis.'),
    
    e('Era of Suits', { rangeScope: 'month', startDate: 'January 2023', endDate: 'May 2023' }, 'Running for CB1, SFC, ARISE, M&Ms, NYC Gov, SSP, and Sustainability.')
];

export default data;
