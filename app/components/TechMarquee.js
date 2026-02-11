"use client";

import { motion } from "framer-motion";

const techStack = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Git",
    "Redis",
    "GraphQL",
    "Express",
    "Firebase",
    "Linux",
];

export default function TechMarquee() {
    const doubled = [...techStack, ...techStack];

    return (
        <motion.div
            className="marquee-wrapper"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="marquee">
                {doubled.map((tech, i) => (
                    <span key={`${tech}-${i}`} className="marquee__item">
                        <span style={{ color: "var(--accent-primary)", fontSize: "8px" }}>
                            ◆
                        </span>
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
