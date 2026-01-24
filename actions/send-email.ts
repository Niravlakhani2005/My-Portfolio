"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

interface ContactState {
    success: boolean;
    message?: string;
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
    };
}

export async function sendEmail(prevState: ContactState, formData: FormData) {
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    };

    const result = contactSchema.safeParse(data);

    if (!result.success) {
        return { success: false, errors: result.error.flatten().fieldErrors };
    }

    try {
        if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
            console.warn("No Gmail credentials found. Cannot send email.");
            return { success: false, message: "Server misconfiguration: missing email credentials." };
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.GMAIL_USER, // Sender address
            to: process.env.GMAIL_USER, // List of receivers (sending to self)
            replyTo: result.data.email, // Reply to the user's email
            subject: `New Message from ${result.data.name}`,
            text: `Name: ${result.data.name}\nEmail: ${result.data.email}\n\nMessage:\n${result.data.message}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${result.data.name}</p>
                <p><strong>Email:</strong> ${result.data.email}</p>
                <p><strong>Message:</strong></p>
                <p>${result.data.message.replace(/\n/g, '<br>')}</p>
            `,
        });

        return { success: true, message: "Email sent successfully!" };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "Failed to send email." };
    }
}
