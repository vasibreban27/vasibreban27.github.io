import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
});

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto">
            <motion.p
                {...fadeUp(0.1)}
                className="text-cyan-400 font-mono mb-4 text-sm"
            >
                Hi, my name is
            </motion.p>

            <motion.h1
                {...fadeUp(0.2)}
                className="text-5xl md:text-7xl font-bold text-white mb-2"
            >
                Vasile Breban.
            </motion.h1>

            <motion.h2
                {...fadeUp(0.3)}
                className="text-4xl md:text-6xl font-bold text-gray-500 mb-6"
            >
                I build things for the future.
            </motion.h2>

            <motion.p
                {...fadeUp(0.4)}
                className="text-gray-400 max-w-lg text-lg leading-relaxed mb-12"
            >
                Computer Science student at{" "}
                <span className="text-white font-medium">UTCN Cluj-Napoca</span>,
                passionate about technology, artificial intelligence, and full-stack development.
                I enjoy building modern, scalable web applications with technologies like{" "}
                <span className="text-cyan-400 font-medium">
        React, JavaScript/TypeScript, & Spring Boot
    </span>.
            </motion.p>

            <motion.div {...fadeUp(0.5)} className="flex gap-4 flex-wrap">
                <a
                    href="#projects"
                    className="bg-cyan-400 text-gray-950 hover:bg-cyan-300 transition-colors duration-200 px-6 py-3 rounded font-semibold"
                >
                    View my work
                </a>

                <a
                    href="#contact"
                    className="border border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200 px-6 py-3 rounded font-semibold"
                >
                    Get in touch
                </a>
            </motion.div>
        </section>
    );
}