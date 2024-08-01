'use server';

import prisma from '@/data/prisma/client';
import { Prisma } from '@prisma/client';

export async function addItem(data: Prisma.LibraryCreateInput, password: string) {
    // Auth
    if (password!==process.env.DASHBOARD_PASSWORD) return;
    
    const item=await prisma.library.create({
        data
    });
    return { id: item.id };
}
