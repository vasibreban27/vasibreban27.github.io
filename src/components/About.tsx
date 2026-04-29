import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-32 px-6 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
                    <span className="text-cyan-400 font-mono text-xl">01.</span>
                    About Me
                    <span className="flex-1 h-px bg-gray-800 ml-4" />
                </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-4 text-gray-400 text-lg leading-relaxed"
                >
                    <p>
                        I'm a third-year Computer Science student at{" "}
                        <span className="text-white font-medium">
              Technical University of Cluj-Napoca
            </span>
                        , with a strong interest in building clean, functional web
                        applications from front to back.
                    </p>
                    <p>
                        I enjoy working across the full stack — from crafting responsive
                        interfaces with{" "}
                        <span className="text-cyan-400">React and Vue</span> to designing
                        robust backend systems with{" "}
                        <span className="text-cyan-400">Spring Boot and Node.js</span>.
                    </p>
                    <p>
                        Outside of web development, I've worked with{" "}
                        <span className="text-white font-medium">
              FPGA hardware programming
            </span>{" "}
                        and low-level systems, which gives me a broader perspective on how
                        software and hardware interact.
                    </p>
                    <p>
                        I'm currently open to{" "}
                        <span className="text-cyan-400 font-medium">
              internship and junior opportunities
            </span>{" "}
                        where I can keep growing and contribute to real products.
                    </p>
                </motion.div>

                {/* Stats / highlights */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-4"
                >
                    {[
                        { value: "4+", label: "Projects built" },
                        { value: "6+", label: "Technologies" },
                        { value: "3rd", label: "Year @ UTCN" },
                        { value: "48h", label: "Hackathon winner" },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="border border-gray-800 rounded-sm p-6 hover:border-cyan-400/50 transition-colors duration-300 group"
                        >
                            <p className="text-4xl font-bold text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </p>
                            <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}