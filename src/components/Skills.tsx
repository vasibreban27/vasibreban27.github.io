import { motion } from "framer-motion";

const skillGroups = [
    {
        category: "Languages",
        skills: ["Java", "TypeScript", "JavaScript", "Python", "C/C++", "VHDL"],
    },
    {
        category: "Frontend",
        skills: ["React", "Next.js", "Vue.js", "HTML", "CSS", "Tailwind CSS"],
    },
    {
        category: "Backend",
        skills: ["Spring Boot", "Node.js", "Express", "REST APIs", "JWT"],
    },
    {
        category: "Databases",
        skills: ["PostgreSQL", "MySQL"],
    },
    {
        category: "Tools & Platforms",
        skills: ["Git", "GitHub", "Docker", "Postman", "Stripe API", "GitHub Actions"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-32 px-6 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
                    <span className="text-cyan-400 font-mono text-xl">04.</span>
                    Skills
                    <span className="flex-1 h-px bg-gray-800 ml-4" />
                </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillGroups.map((group, i) => (
                    <motion.div
                        key={group.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        viewport={{ once: true }}
                        className="border border-gray-800 rounded-sm p-6 hover:border-cyan-400/40 transition-all duration-300 group"
                    >
                        <h3 className="text-white font-semibold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                            {group.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-gray-900 text-gray-400 text-xs font-mono px-3 py-1.5 rounded-sm border border-gray-800 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-200"
                                >
                  {skill}
                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}