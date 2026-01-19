"use client";

import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import SectionHeading from "@/components/ui/SectionHeading";
import { sendEmail } from "@/actions/send-email";
import { useActionState, useEffect, useRef } from "react";

// Submit Button Component
function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <MagneticButton disabled={pending} className="w-full flex justify-center items-center gap-2 font-bold group bg-white text-black hover:bg-white/90">
            {pending ? "Sending..." : "Send Message"}
            {!pending && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
        </MagneticButton>
    );
}

interface ContactState {
    success: boolean;
    message?: string;
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
    };
}

const initialState: ContactState = {
    success: false,
    message: "",
};

export default function Contact() {
    const [state, formAction] = useActionState(sendEmail, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state?.success) {
            formRef.current?.reset();
        }
    }, [state?.success]);

    return (
        <section className="py-16 md:py-24 relative z-30" id="contact">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <SectionHeading
                            number="05"
                            title="Contact"
                            subtitle="Looking for a designer to lead your next project?"
                        />

                        <div className="mt-8">
                            <h3 className="text-2xl font-display font-medium text-white mb-4">Let's build something exceptional.</h3>
                            <p className="text-white/60 text-lg leading-relaxed max-w-md">
                                I'm currently available for freelance projects and open to discussing new opportunities.
                            </p>

                            <div className="flex flex-wrap gap-3 mt-8">
                                <a href="https://www.linkedin.com/in/nirav-lakhani2005/" target="_blank" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all flex items-center gap-2 group text-sm">
                                    LinkedIn <span className="text-white/40 group-hover:text-white transition-colors">↗</span>
                                </a>
                                <a href="https://www.behance.net/niravlakhani2" target="_blank" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all flex items-center gap-2 group text-sm">
                                    Behance <span className="text-white/40 group-hover:text-white transition-colors">↗</span>
                                </a>
                                <a href="https://dribbble.com/nirav_2005" target="_blank" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all flex items-center gap-2 group text-sm">
                                    Dribbble <span className="text-white/40 group-hover:text-white transition-colors">↗</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <div className="relative group">
                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[400px] bg-electric-blue/10 rounded-full blur-[100px] pointer-events-none transition-opacity duration-500 group-hover:opacity-100" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-1"
                        >
                            <div className="relative rounded-xl bg-deep-space/80 border border-white/5 p-8 md:p-10 shadow-2xl">
                                <form ref={formRef} action={formAction} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-white/80">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 outline-none text-white transition-all placeholder:text-white/20"
                                                placeholder="John Doe"
                                            />
                                            {state?.errors?.name && <p className="text-red-400 text-xs">{state.errors.name[0]}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 outline-none text-white transition-all placeholder:text-white/20"
                                                placeholder="john@example.com"
                                            />
                                            {state?.errors?.email && <p className="text-red-400 text-xs">{state.errors.email[0]}</p>}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 outline-none text-white transition-all placeholder:text-white/20 resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                        {state?.errors?.message && <p className="text-red-400 text-xs">{state.errors.message[0]}</p>}
                                    </div>

                                    <SubmitButton />

                                    {state?.message && (
                                        <p className={state.success ? "text-green-400 text-center" : "text-red-400 text-center"}>
                                            {state.message}
                                        </p>
                                    )}
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
