import { NextResponse } from "next/server";
import prisma from '@/data/prisma/client';
import sendEmail from "@/helpers/sendEmail";

export async function POST(request: Request) {
    const { formName, message, email, origin, name }=await request.json();
    
    if (!formName || !message) {
        return NextResponse.json({ status: "Error", error: "Form name and message are required" }, { status: 400 });
    }
    
    const submission=await prisma.formSubmission.create({
        data: {
            formName: formName,
            message: message,
            email: email,
            origin: origin,
            name: name
        }
    });

    let emailMessage=message+'\n\n';
    if (email || name)
        emailMessage+=`From:\n`;
    if (name)
        emailMessage+=`Name: ${name}\n`;
    if (email)
        emailMessage+=`Email: ${email}\n`;
    if (origin)
        emailMessage+=`Origin: ${origin}\n`;
    
    sendEmail({
        to: "joel@joelgrayson.com",
        subject: `New ${formName} Form Submission (#${submission.id})`, //id is useful for separating out the emails in my inbox
        text: emailMessage,
        html: emailMessage.replaceAll('\n', '<br>'),
        replyTo: email
    });
    
    return NextResponse.json({ status: "Success" });
}

