"use client";

import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Layer 7 Load Balancer",
        description:
            "Production-grade Node.js reverse proxy with a real-time React monitoring dashboard.",
        tags: ["Node.js", "React", "AWS", "Docker"],
        gradient: "gradient-bg-1",
        emoji: "",
        image: "/loadbalancer.png",
        github: "https://github.com/SaranshSharma123/load-balancer",
        live: "#",
    },
    {
        id: 2,
        title: "Cloud Infrastructure Automation",
        description:
            "Automated AWS infrastructure provisioning using Terraform and CloudFormation. Includes VPC setup, auto-scaling groups, load balancers, and monitoring with CloudWatch.",
        tags: ["AWS", "Terraform", "CloudFormation", "Python"],
        gradient: "gradient-bg-2",
        emoji: "☁️",
        github: "https://github.com/saransh",
        live: "#",
    },
    {
        id: 3,
        title: "CI/CD Pipeline Dashboard",
        description:
            "A full-stack MERN dashboard to monitor and manage CI/CD pipelines across multiple projects. Features real-time build status, deployment logs, and rollback capabilities.",
        tags: ["React", "Node.js", "MongoDB", "Docker"],
        gradient: "gradient-bg-3",
        emoji: "🚀",
        github: "https://github.com/saransh",
        live: "#",
    },
    {
        id: 4,
        title: "Containerized Microservices Platform",
        description:
            "A Dockerized microservices architecture with Kubernetes orchestration, service mesh, centralized logging with ELK stack, and automated scaling.",
        tags: ["Docker", "Kubernetes", "Node.js", "MySQL"],
        gradient: "gradient-bg-4",
        emoji: "📦",
        github: "https://github.com/saransh",
        live: "#",
    },
];

const cardVariants = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
};

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className="section-header__label">My Work</p>
                    <h2 className="section-header__title">Featured Projects</h2>
                </motion.div>

                <div className="projects__grid">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            {...cardVariants}
                            transition={{
                                duration: 0.7,
                                delay: i * 0.15,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            whileHover={{ y: -8 }}
                        >
                            <div className={`project-card__image ${project.gradient}`}>
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            borderRadius: "inherit",
                                        }}
                                    />
                                ) : (
                                    <div className="project-card__image-gradient">
                                        {project.emoji}
                                    </div>
                                )}
                                <span className="project-card__number">
                                    {String(project.id).padStart(2, "0")}
                                </span>
                            </div>

                            <div className="project-card__content">
                                <h3 className="project-card__title">{project.title}</h3>
                                <p className="project-card__description">
                                    {project.description}
                                </p>

                                <div className="project-card__tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="project-card__tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-card__links">
                                    <a
                                        href={project.github}
                                        className="project-card__link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        Code
                                    </a>
                                    <a
                                        href={project.live}
                                        className="project-card__link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                        Live
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
