"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            className="footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <p className="footer__text">
                    Designed & Built with{" "}
                    <span className="footer__heart">♥</span> by Saransh Sharma
                    &nbsp;&bull;&nbsp; © {new Date().getFullYear()}
                </p>
            </div>
        </motion.footer>
    );
}
