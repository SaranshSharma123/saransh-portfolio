"use client";

import { motion } from "framer-motion";

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const stagger = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
};

const skills = [
    {
        title: "Frontend",
        items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS"],
    },
    {
        title: "Backend",
        items: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
    },
    {
        title: "Database",
        items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
    },
    {
        title: "Tools & DevOps",
        items: ["Git", "Docker", "AWS", "Linux", "CI/CD"],
    },
];

export default function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <motion.div className="section-header" {...fadeInUp}>
                    <p className="section-header__label">About Me</p>
                    <h2 className="section-header__title">
                        Crafting Code with Purpose
                    </h2>
                </motion.div>

                <div className="about__grid">
                    <div className="about__text">
                        <motion.p {...fadeInUp}>
                            I&apos;m Saransh Sharma, a Software Engineer with a deep passion
                            for building things that live on the internet. I specialize in
                            creating exceptional, high-quality web applications and digital
                            experiences that not only look great but deliver real value.
                        </motion.p>

                        <motion.p
                            {...fadeInUp}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            My journey in software engineering has equipped me with a strong
                            foundation in both frontend and backend technologies. I thrive on
                            solving complex problems and translating ideas into clean,
                            efficient code. Whether it&apos;s a sleek user interface or a
                            robust API, I bring the same level of dedication and attention to
                            detail.
                        </motion.p>

                        <motion.p
                            {...fadeInUp}
                            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            When I&apos;m not coding, you&apos;ll find me exploring new
                            technologies, solving problems on LeetCode, or contributing to
                            open-source projects. I believe in continuous learning and pushing
                            the boundaries of what&apos;s possible with technology.
                        </motion.p>

                        <motion.div
                            className="about__stats"
                            {...fadeInUp}
                            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="stat-card">
                                <div className="stat-card__number">10+</div>
                                <div className="stat-card__label">Projects</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-card__number">500+</div>
                                <div className="stat-card__label">LeetCode</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-card__number">2+</div>
                                <div className="stat-card__label">Years Exp</div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="about__skills-grid">
                        {skills.map((skill, i) => (
                            <motion.div
                                key={skill.title}
                                className="skill-card"
                                {...stagger}
                                transition={{
                                    duration: 0.6,
                                    delay: i * 0.1,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                            >
                                <div className="skill-card__title">{skill.title}</div>
                                <div className="skill-card__items">
                                    {skill.items.map((item) => (
                                        <span key={item} className="skill-tag">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
