export type category='miscellaneous' | 'climate-change' | 'science' | 'philosophy';
export const categories: category[]=['philosophy', 'climate-change', 'science', 'miscellaneous'];
export const displayCategory: Map<category, { name: string; color: string }>=new Map([
    ['philosophy',     { name: 'Philosophy',     color: '#dfdfdf' }],
    ['climate-change', { name: 'Climate Change', color: '#adf0b9' }],
    ['science',        { name: 'Science',        color: '#b4d6eb' }],
    ['miscellaneous',  { name: 'Miscellaneous',  color: '#f4e1aa' }],
]);

export type article={
    name: string;
    hyphenatedTitle: string;
    date: Date;
    category: category;
};
