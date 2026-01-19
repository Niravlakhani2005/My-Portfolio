"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

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
        if (!process.env.RESEND_API_KEY) {
            console.warn("No Resend API Key found. Simulating email send.");
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
            return { success: true, message: "Email simulated (No API Key)" };
        }

        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: "nirav@example.com", // Replace with actual email or env var
            subject: `New Message from ${result.data.name}`,
            text: result.data.message,
            replyTo: result.data.email as string,
        });

        return { success: true, message: "Email sent successfully!" };
    } catch {
        return { success: false, message: "Failed to send email." };
    }
}
