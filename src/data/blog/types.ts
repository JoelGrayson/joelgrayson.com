export const categories=['philosophy', 'climate-change', 'science', 'government', 'miscellaneous'] as const;
export type category=typeof categories[number];
export const displayCategory: Map<category, { name: string; color: string }>=new Map([
    ['philosophy',     { name: 'Philosophy',     color: '#dfdfdf' }],
    ['climate-change', { name: 'Climate Change', color: '#adf0b9' }],
    ['science',        { name: 'Science',        color: '#b4d6eb' }],
    ['government',     { name: 'Government',     color: '#b4d6eb' }],
    ['miscellaneous',  { name: 'Miscellaneous',  color: '#f4e1aa' }],
]);

export type article={
    title: string;
    hyphenatedTitle: string;
    date: Date;
    category: category;
    defaultSection: keyof typeof DEFAULT_SECTION;
    defaultIndex: number;
};

export const DEFAULT_SECTION = {
    MAIN: 'MAIN',
    OTHERS: 'OTHERS'
} as const;

