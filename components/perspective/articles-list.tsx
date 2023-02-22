export type category='miscellaneous' | 'science' | 'philosophy';
export const categories: category[]=['miscellaneous', 'science', 'philosophy'];

export type article={
    name: string;
    hyphenatedName: string;
    date: Date;
    category: category;
};
export const articles: article[]=[
    { name: 'Connecting with the Past',   hyphenatedName: 'connecting-with-the-past', date: new Date('Aug 10, 2021'), category: 'miscellaneous' },
    { name: 'Why We Need Nuclear Energy', hyphenatedName: 'why-we-need-nuclear-energy', date: new Date('May 9, 2021'), category: 'miscellaneous' },
    { name: 'Why We Need Nuclear Energy', hyphenatedName: 'my-three-hour-journey-to-school', date: new Date('May 9, 2021'), category: 'miscellaneous' },
];
