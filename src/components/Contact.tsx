import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<Status>("idle");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
            console.error("Missing EmailJS environment variables.");
            setStatus("error");
            return;
        }

        setStatus("loading");

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                {
                    publicKey: EMAILJS_PUBLIC_KEY,
                }
            );

            setStatus("success");
            formRef.current.reset();
        } catch (error) {
            console.error("EmailJS error:", error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-32 px-6 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto"
            >
                <div className="text-center mb-12">
                    <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">
                        05. What's Next?
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Get In Touch
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        I'm currently open to new opportunities — whether it's an
                        internship, a junior role, or just a chat about tech. Fill out the
                        form below and I'll get back to you as soon as I can.
                    </p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="from_name" className="text-gray-400 text-sm font-mono">
                                Name
                            </label>

                            <input
                                id="from_name"
                                type="text"
                                name="from_name"
                                required
                                placeholder="John Doe"
                                className="bg-gray-900 border border-gray-800 rounded-sm px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-colors duration-200"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="from_email" className="text-gray-400 text-sm font-mono">
                                Email
                            </label>

                            <input
                                id="from_email"
                                type="email"
                                name="from_email"
                                required
                                placeholder="john@example.com"
                                className="bg-gray-900 border border-gray-800 rounded-sm px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-colors duration-200"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-gray-400 text-sm font-mono">
                            Message
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            placeholder="Hi Vasile, I'd love to talk about..."
                            className="bg-gray-900 border border-gray-800 rounded-sm px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-colors duration-200 resize-none"
                        />
                    </div>

                    <motion.button
                        type="submit"
                        disabled={status === "loading"}
                        whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                        whileTap={{ scale: status === "loading" ? 1 : 0.97 }}
                        className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-950 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 px-12 py-4 rounded-sm font-semibold tracking-wide text-sm"
                    >
                        {status === "loading" ? "Sending..." : "Send Message"}
                    </motion.button>

                    <AnimatePresence>
                        {status === "success" && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-center text-green-400 font-mono text-sm"
                            >
                                Message sent! I'll get back to you soon.
                            </motion.p>
                        )}

                        {status === "error" && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-center text-red-400 font-mono text-sm"
                            >
                                Something went wrong. Try emailing me directly at{" "}
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=vbreban09@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="underline hover:text-red-300"
                                >
                                    vbreban09@gmail.com
                                </a>
                            </motion.p>
                        )}
                    </AnimatePresence>
                </form>

                <div className="flex justify-center gap-8 mt-16">
                    {[
                        { label: "GitHub", href: "https://github.com/vasibreban27" },
                        {
                            label: "LinkedIn",
                            href: "https://www.linkedin.com/in/vasile-breban-205b262b6/",
                        },
                        {
                            label: "Email",
                            href: "https://mail.google.com/mail/?view=cm&fs=1&to=vbreban09@gmail.com",
                        },
                    ].map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-500 hover:text-cyan-400 transition-colors duration-200 font-mono text-sm tracking-wide"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}