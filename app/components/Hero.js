"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="container">
                <div className="hero__content">
                    <motion.div
                        className="hero__badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="hero__badge-dot"></span>
                        Available for opportunities
                    </motion.div>

                    <motion.p
                        className="hero__greeting"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Hello, I&apos;m
                    </motion.p>

                    <motion.h1
                        className="hero__name"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Saransh Sharma
                    </motion.h1>

                    <motion.h2
                        className="hero__title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.7 }}
                    >
                        <span className="hero__title-accent">Software Engineer</span>{" "}
                        &mdash; Building Digital Experiences
                    </motion.h2>

                    <motion.p
                        className="hero__description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                    >
                        Passionate about crafting elegant, performant, and user-centric
                        applications. I transform complex problems into clean, intuitive
                        digital solutions.
                    </motion.p>

                    <motion.div
                        className="hero__cta-group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                    >
                        <a href="#projects" className="btn btn--primary" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                        }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                            </svg>
                            View Projects
                        </a>
                        <a href="#contact" className="btn btn--outline" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                        }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            Get in Touch
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    className="hero__scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                >
                    SCROLL
                    <div className="hero__scroll-line"></div>
                </motion.div>
            </div>
        </section>
    );
}
