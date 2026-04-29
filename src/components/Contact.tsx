import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-6 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center max-w-2xl mx-auto"
            >
                <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">
                    05. What's Next?
                </p>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Get In Touch
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed mb-12">
                    I'm currently open to new opportunities — whether it's an internship,
                    a junior role, or just a chat about tech. My inbox is always open, so
                    feel free to reach out and I'll get back to you as soon as I can.
                </p>

                <motion.a
                    href="mailto:vbreban09@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-block border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-950 transition-all duration-300 px-12 py-4 rounded-sm font-semibold tracking-wide text-sm"
                >
                    Say Hello
                </motion.a>

                {/* Social links */}
                <div className="flex justify-center gap-8 mt-16">
                    {[
                        {
                            label: "GitHub",
                            href: "https://github.com/vasibreban27",
                        },
                        {
                            label: "LinkedIn",
                            href: "https://www.linkedin.com/in/vasile-breban-205b262b6/",
                        },
                        {
                            label: "Email",
                            href: "mailto:vbreban09@gmail.com",
                        },
                    ].map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                            rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
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