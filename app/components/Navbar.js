"use client";

import { motion } from "framer-motion";

export default function Navbar() {
    const links = [
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            className="nav"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
            <span className="nav__logo">SS.</span>
            {links.map((link, i) => (
                <motion.a
                    key={link.label}
                    href={link.href}
                    className="nav__link"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                    onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                >
                    {link.label}
                </motion.a>
            ))}
        </motion.nav>
    );
}
