export type category='miscellaneous' | 'science' | 'philosophy';
export const categories: category[]=['miscellaneous', 'science', 'philosophy'];

export type article={
    name: string;
    hyphenatedName: string;
    date: Date;
    category: category;
};
export const articles: article[]=[
    { name: 'A Better Way to Teach Math',    hyphenatedName: 'a-better-way-to-teach-math',      date: new Date('Feb 20, 2023'), category: 'miscellaneous' },
    { name: 'Mindfully Traveling to School', hyphenatedName: 'mindfully-traveling-to-school',   date: new Date('Nov 11, 2021'), category: 'miscellaneous' },
    { name: 'Connecting with the Past',      hyphenatedName: 'connecting-with-the-past',        date: new Date('Aug 10, 2021'), category: 'philosophy' },
    { name: 'Laws of Physics and Life',      hyphenatedName: 'laws-of-physics-and-life',        date: new Date('Jun 13, 2021'), category: 'philosophy' },
    { name: 'Why We Need Nuclear Energy',    hyphenatedName: 'why-we-need-nuclear-energy',      date: new Date('May 9, 2021'),  category: 'miscellaneous' },
];