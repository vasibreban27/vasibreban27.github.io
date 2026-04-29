import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-gray-950/90 backdrop-blur-md shadow-lg shadow-black/20"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-cyan-400 font-bold text-xl tracking-tight">
          vb<span className="text-white">.</span>
        </span>

                <ul className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <li key={link}>
                            <a
                                href={`#${link.toLowerCase()}`}
                                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium"
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>

                <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-950 transition-all duration-200 px-4 py-1.5 rounded text-sm font-medium"
                >
                    Resume
                </a>
            </div>
        </motion.nav>
    );
}