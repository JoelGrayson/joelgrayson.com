export type category='miscellaneous' | 'science' | 'climate-change' | 'philosophy';
export const categories: category[]=['philosophy', 'science', 'climate-change', 'miscellaneous'];
export const displayCategory: Map<category, { name: string; color: string }>=new Map([
    ['philosophy',     { name: 'Philosophy',     color: '#dfdfdf' }],
    ['science',        { name: 'Science',        color: '#b4d6eb' }],
    ['climate-change', { name: 'Climate Change', color: '#adf0b9' }],
    ['miscellaneous',  { name: 'Miscellaneous',  color: '#f4e1aa' }],
]);

export type article={
    name: string;
    hyphenatedName: string;
    date: Date;
    category: category;
};
export const articles: article[]=[
    { name: 'A Better Way to Teach Math',                   hyphenatedName: 'a-better-way-to-teach-math',                   date: new Date('Feb 20, 2023'), category: 'science'        },
    { name: 'Thank You, Fossil Fuel',                       hyphenatedName: 'thank-you-fossil-fuels',                       date: new Date('Feb 19, 2023'), category: 'climate-change' },
    { name: 'The Importance of Phase in Quantum Mechanics', hyphenatedName: 'the-importance-of-phase-in-quantum-mechanics', date: new Date('Feb 6, 2023'),  category: 'science'        },
    { name: 'Reflection on Privilege',                      hyphenatedName: 'reflection-on-privilege',                      date: new Date('Jan 21, 2023'), category: 'philosophy'     },
    { name: 'Climate Change Is an Exponential Problem',     hyphenatedName: 'climate-change-is-an-exponential-problem',     date: new Date('Aug 17, 2022'), category: 'climate-change' },
    { name: `China's Brutal Road to Socialism`,             hyphenatedName: 'chinas-brutal-road-to-socialism',              date: new Date('May 23, 2022'), category: 'miscellaneous'  },
    { name: 'Mindfully Traveling to School',                hyphenatedName: 'mindfully-traveling-to-school',                date: new Date('Nov 11, 2021'), category: 'miscellaneous'  },
    { name: 'Connecting with the Past',                     hyphenatedName: 'connecting-with-the-past',                     date: new Date('Aug 10, 2021'), category: 'philosophy'     },
    { name: 'Laws of Physics and Life',                     hyphenatedName: 'laws-of-physics-and-life',                     date: new Date('Jun 13, 2021'), category: 'philosophy'     },
    { name: 'Why We Need Nuclear Energy',                   hyphenatedName: 'why-we-need-nuclear-energy',                   date: new Date('May 9, 2021'),  category: 'climate-change' }
];
