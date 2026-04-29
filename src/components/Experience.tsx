import { motion } from "framer-motion";

const experiences = [
    {
        role: "Full-Stack Development Bootcamp",
        company: "Betfair Romania Development",
        period: "March 2026 – June 2026",
        points: [
            "Selected participant in a competitive full-stack bootcamp focused on modern web development practices.",
            "Building full-stack applications using React, Next.js and Node.js, including REST API development with Express.",
            "Implementing authentication flows using JWT and working with databases in containerized environments via Docker.",
            "Applying responsive design principles, TypeScript patterns, and component-based architecture.",
        ],
        tags: ["React", "Next.js", "Node.js", "TypeScript", "Docker", "JWT"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-32 px-6 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
                    <span className="text-cyan-400 font-mono text-xl">02.</span>
                    Experience
                    <span className="flex-1 h-px bg-gray-800 ml-4" />
                </h2>
            </motion.div>

            <div className="space-y-6">
                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="border border-gray-800 rounded-sm p-8 hover:border-cyan-400/40 transition-all duration-300 group relative overflow-hidden"
                    >
                        {/* Glow on hover */}
                        <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/[0.03] transition-all duration-300" />

                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                            <span className="text-cyan-400 font-mono text-sm mt-1 md:mt-0">
                {exp.period}
              </span>
                        </div>

                        <p className="text-cyan-400/70 font-medium mb-6">{exp.company}</p>

                        <ul className="space-y-3 mb-6">
                            {exp.points.map((point, j) => (
                                <li key={j} className="flex gap-3 text-gray-400">
                                    <span className="text-cyan-400 mt-1 shrink-0">▹</span>
                                    {point}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                            {exp.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-cyan-400/10 text-cyan-400 text-xs font-mono px-3 py-1 rounded-sm"
                                >
                  {tag}
                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}