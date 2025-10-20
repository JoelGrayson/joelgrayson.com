import { article as articleT, DEFAULT_SECTION } from './types';

export const articles: articleT[]=[
    { title: 'A Realistic Path to Ending 99% of Human-Induced Animal Suffering', hyphenatedTitle: 'meat',                     date: new Date('Mar 13, 2025'), category: 'science'       , defaultSection: DEFAULT_SECTION.MAIN, defaultIndex: 0 },
    { title: 'Division of Power Within NYC',                 hyphenatedTitle: 'division-of-power-within-nyc',                 date: new Date('Oct 30, 2023'), category: 'government'    , defaultSection: DEFAULT_SECTION.OTHERS, defaultIndex: 0 },
    { title: 'A Better Way to Teach Math',                   hyphenatedTitle: 'a-better-way-to-teach-math',                   date: new Date('Feb 20, 2023'), category: 'science'       , defaultSection: DEFAULT_SECTION.OTHERS, defaultIndex: 0 },
    { title: 'Thank You, Fossil Fuels',                      hyphenatedTitle: 'thank-you-fossil-fuels',                       date: new Date('Feb 19, 2023'), category: 'climate-change', defaultSection: DEFAULT_SECTION.OTHERS, defaultIndex: 0 },
    { title: 'Climate Change Is an Exponential Problem',     hyphenatedTitle: 'climate-change-is-an-exponential-problem',     date: new Date('Aug 17, 2022'), category: 'climate-change', defaultSection: DEFAULT_SECTION.OTHERS, defaultIndex: 0 },
    { title: 'What It Means to Be an American',              hyphenatedTitle: 'what-it-means-to-be-an-american',              date: new Date('Jul 04, 2023'), category: 'miscellaneous' , defaultSection: DEFAULT_SECTION.OTHERS, defaultIndex: 0 },
    { title: 'Mindfully Traveling to School',                hyphenatedTitle: 'mindfully-traveling-to-school',                date: new Date('Nov 11, 2021'), category: 'miscellaneous' , defaultSection: DEFAULT_SECTION.MAIN, defaultIndex: 2 },
    { title: 'Connecting with the Past',                     hyphenatedTitle: 'connecting-with-the-past',                     date: new Date('Aug 10, 2021'), category: 'philosophy'    , defaultSection: DEFAULT_SECTION.OTHERS, defaultIndex: 0 },
    { title: 'Laws of Physics and Life',                     hyphenatedTitle: 'laws-of-physics-and-life',                     date: new Date('Jun 13, 2021'), category: 'philosophy'    , defaultSection: DEFAULT_SECTION.OTHERS, defaultIndex: 0 },
    { title: 'Why We Need Nuclear Energy',                   hyphenatedTitle: 'why-we-need-nuclear-energy',                   date: new Date('May 09, 2021'), category: 'climate-change', defaultSection: DEFAULT_SECTION.MAIN, defaultIndex: 1 }
    
    // The defaultSection and defaultIndex specify how the articles will be shown in the default view. The "main" defaultSection will show first. All articles in a section will be sorted by their defaultIndex such that those with a lower index appear first.

    // Short: What It Means to Be an American; Thank You, Fossil Fuels; Reflections on Privilege
    
    // { title: 'The Importance of Phase in Quantum Mechanics', hyphenatedTitle: 'the-importance-of-phase-in-quantum-mechanics', date: new Date('Feb 06, 2023'), category: 'science'        },
];
