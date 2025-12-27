import { PrismaClient } from "@prisma/client";
import fs from 'fs';

const prisma=new PrismaClient();

const contacts = await prisma.contact.findMany({});

console.log(contacts);
fs.writeFileSync('./private/backup-contacts.txt', JSON.stringify(contacts, null, 4));

