import prisma from "@/data/prisma/client";

export default async function getDownloadLinkGeneratorVisits() {
    const queryRes=await prisma.pageVisits.findMany({
        where: {
            url: {
                // in the following values
                in: [
                    '/software/drive-download-link-generator',
                    '/software/box-download-link-generator',
                    '/software/onedrive-download-link-generator',
                    '/software/dropbox-download-link-generator'
                ]
            }
        },
        select: {
            url: true,
            visits: true
        }
    });

    const output={} as any;

    for (let obj of queryRes) {
        switch (obj.url) {
            case '/software/drive-download-link-generator':
                output.driveDownloadLinkGeneratorVisits=obj.visits;
                break;
            case '/software/box-download-link-generator':
                output.boxDownloadLinkGeneratorVisits=obj.visits;
                break;
            case '/software/dropbox-download-link-generator':
                output.dropboxDownloadLinkGeneratorVisits=obj.visits;
                break;
        }

    }
    
    return output;
    
    // Returns {"driveDownloadLinkGeneratorVisits":9933,"dropboxDownloadLinkGeneratorVisits":1590,"boxDownloadLinkGeneratorVisits":8394}
}
