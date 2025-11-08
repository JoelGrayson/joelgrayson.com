import prisma from "@/data/prisma/client";

export const dynamic = 'force-dynamic';

export async function GET(request: Request, { params }: { params: Promise<{ key: string }> }) {
    const key = (await params).key;

    const result = await prisma.values.findFirst({
        where: {
            key
        }
    });
    
    const value = result?.value || null; //undefined cannot be returned in Response.json()
    if (value) {
        const extractedValue = (value as { value: any })['value'];
        console.log('Fetching key', key, 'led to value', value);
        return Response.json(extractedValue);
    }
    console.log('Fetching key', key, 'led to value', value);
    return Response.json(value);
}

