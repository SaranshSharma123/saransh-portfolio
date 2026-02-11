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
        title: "Cloud & AWS",
        items: ["EC2", "S3", "Lambda", "CloudFormation", "ECS"],
    },
    {
        title: "DevOps & CI/CD",
        items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform"],
    },
    {
        title: "Backend & MERN",
        items: ["Node.js", "Express", "React", "MongoDB", "Python"],
    },
    {
        title: "Database & Tools",
        items: ["MySQL", "MongoDB", "Git", "Linux", "Nginx"],
    },
];

export default function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <motion.div className="section-header" {...fadeInUp}>
                    <p className="section-header__label">About Me</p>
                    <h2 className="section-header__title">
                        Engineering the Cloud
                    </h2>
                </motion.div>

                <div className="about__grid">
                    <div className="about__text">
                        <motion.p {...fadeInUp}>
                            I&apos;m Saransh Sharma, a Cloud Engineer with a deep passion
                            for building scalable, resilient cloud infrastructure. I specialize in
                            AWS services, containerization with Docker, and implementing robust
                            CI/CD pipelines that deliver reliable, automated deployments.
                        </motion.p>

                        <motion.p
                            {...fadeInUp}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            My journey in cloud engineering has equipped me with expertise in
                            DevOps practices, infrastructure as code, and the MERN stack. I thrive on
                            architecting systems that scale effortlessly and automating
                            everything possible. Whether it&apos;s a Kubernetes cluster or a
                            serverless architecture, I bring the same level of dedication and
                            precision.
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
