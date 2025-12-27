import { PrismaClient } from "@prisma/client";
import fs from 'fs';

const prisma=new PrismaClient();

const contacts = await prisma.contact.updateMany({
    where: {
        contactFormStatus: null
    },
    data: {
        contactFormStatus: 'UNSET'
    }
});

console.log(contacts);

