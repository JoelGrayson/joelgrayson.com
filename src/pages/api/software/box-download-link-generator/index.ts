import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/data/prisma/client';

export default async function handler(req: NextApiRequest, globalRes: NextApiResponse<any>) {
    const sharedName=req.query.sharedName;
    if (!sharedName) {
        console.log('sharedName required');
        return globalRes.status(400).json({
            status: 'error',
            message: 'sharedName is required'
        });
    }

    // https://developer.box.com/reference/get-shared-items/?utm_source=chatgpt.com
        // curl -i -X GET "https://api.box.com/2.0/shared_items" \
        //      -H "authorization: Bearer <ACCESS_TOKEN>" \
        //      -H "boxapi: shared_link=https://app.box.com/s/gjasdasjhasd&shared_link_password=letmein"

    fetch('https://api.box.com/2.0/shared_items', {
        headers: {
             authorization: `Bearer ${process.env.BOX_ACCESS_TOKEN}`,
             boxapi: `shared_link=https://app.box.com/s/${sharedName}`
        }
    })
        .then(res=>res.json())
        .then(res=>{
           // console.log(res);
           const fileId=res.id;
            if (!fileId) {
                console.log('Something went wrong');
            } else {
                const downloadLink=`https://app.box.com/index.php?rm=box_download_shared_file&shared_name=${sharedName}&file_id=f_${fileId}`;
                console.log(downloadLink);
                globalRes.json({
                    downloadLink
                });
            }
       });
}
