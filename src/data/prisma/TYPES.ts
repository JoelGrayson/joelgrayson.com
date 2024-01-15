import { Comment as CommentT, User as UserT, Article as ArticleT } from '@prisma/client';

export type Comment=CommentT;
export type ExposedComment={
    id: string;
    content: string;
    author: string;
    postedAt: Date;
    // excludes email, articleId, and Article
};
export type User=UserT;
export type Article=ArticleT;
