// My Definitions
export type URL=string;
export type dest=URL; //destination
export type singleSrc=URL | RegExp;
export type src=singleSrc | singleSrc[]; //collection sources for a destinatione

export type redirects={ //object of all redirects
    [key: dest]: src
};


// Next.js' Definitions
export type nextRedirect={
    source: URL | RegExp;
    destination: singleSrc;
    permanent: boolean;
} | null;
export type nextRedirects=nextRedirect[];

