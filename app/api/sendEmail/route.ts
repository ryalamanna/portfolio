import { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req : Request){
    const { email , name , subject , message } = await req.json();
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',        
        port: 465,
        secure: true,
        auth: {
            user: 'ryalrafter@gmail.com',
            pass: 'apkm esxy buhp rcmj',
        },
    });
    const mailOptions_me = {
        from: email,
        replyTo : email,
        to: 'ryalrafter@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    };
    const mailOptions_them = {
        from: 'ryalrafter@gmail.com',
        to: email,
        subject: 'Thanks for contacting Ryal',
        html :'<!DOCTYPE html><html lang="en"><head><style>img{max-width:400px;}</style><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>HTML 5 Boilerplate</title></head><body><img src="https://i.imgur.com/tCe2VIe.png" alt="Thanks for Reaching out !"></body></html>'
    };
    
    try {
        // Send the email
        await transporter.sendMail(mailOptions_me);
        await transporter.sendMail(mailOptions_them);
        return NextResponse.json({ message: 'Email sent successfully'} , { status: 200});
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal server error.'} , { status: 500});
    }
    
  }

  export async function  GET(){
    return new Response('email')
  }
