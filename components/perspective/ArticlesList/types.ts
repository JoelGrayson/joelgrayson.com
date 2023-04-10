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
    hyphenatedTitle: string;
    date: Date;
    category: category;
};
