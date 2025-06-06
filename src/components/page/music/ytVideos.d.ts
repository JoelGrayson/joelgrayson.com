export type ytVideos={
    kind: string
    etag: string
    items: Array<{
        kind: string
        etag: string
        id: string
        snippet: {
            publishedAt: string
            channelId: string
            title: string
            description: string
            thumbnails: {
                default: {
                    url: string
                    width: number
                    height: number
                }
                medium: {
                    url: string
                    width: number
                    height: number
                }
                high: {
                    url: string
                    width: number
                    height: number
                }
                standard?: {
                    url: string
                    width: number
                    height: number
                }
                maxres?: {
                    url: string
                    width: number
                    height: number
                }
            }
            channelTitle: string
            playlistId: string
            position: number
            resourceId: {
                kind: string
                videoId: string
            }
            videoOwnerChannelTitle: string
            videoOwnerChannelId: string
        }
    }>
    pageInfo: {
        totalResults: number
        resultsPerPage: number
    }
};
