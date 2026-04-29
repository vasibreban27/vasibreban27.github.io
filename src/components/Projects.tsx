import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
                    <span className="text-cyan-400 font-mono text-xl">03.</span>
                    Projects
                    <span className="flex-1 h-px bg-gray-800 ml-4" />
                </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className={`border rounded-sm p-8 flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300 group relative overflow-hidden ${
                            project.highlight
                                ? "border-cyan-400/30 bg-cyan-500/[0.03]"
                                : "border-gray-800"
                        }`}
                    >
                        {/* Hover glow */}
                        <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/[0.03] transition-all duration-300" />

                        <div className="relative z-10">
                            {/* Top row */}
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <svg
                                        className="text-cyan-400 w-8 h-8"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 7h18M3 12h18M3 17h18"
                                        />
                                    </svg>

                                    {project.highlight && (
                                        <span className="text-xs font-mono text-cyan-400 border border-cyan-400/30 px-2 py-0.5 rounded-sm">
                      Featured
                    </span>
                                    )}
                                </div>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-500 hover:text-cyan-400 transition-colors duration-200"
                                    aria-label="GitHub"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                </a>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed text-sm">
                                {project.description}
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="relative z-10 flex flex-wrap gap-2 mt-8">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs font-mono text-gray-500 hover:text-cyan-400 transition-colors duration-200"
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