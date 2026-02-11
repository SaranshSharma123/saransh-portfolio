"use client";

import { motion } from "framer-motion";

const techStack = [
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Jenkins",
    "Node.js",
    "React",
    "Express",
    "MongoDB",
    "Python",
    "MySQL",
    "Linux",
    "Nginx",
    "GitHub Actions",
    "CloudFormation",
    "CI/CD",
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
