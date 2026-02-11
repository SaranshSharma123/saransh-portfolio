"use client";

import { useEffect, useState } from "react";

export default function BackgroundEffects() {
    const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Generate particles only on client side
        const generated = Array.from({ length: 30 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 15}s`,
            animationDelay: `${Math.random() * 10}s`,
            size: `${1 + Math.random() * 2}px`,
            opacity: 0.1 + Math.random() * 0.3,
        }));
        setParticles(generated);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            {/* Grid background */}
            <div className="bg-grid" />

            {/* Gradient orbs */}
            <div className="bg-gradient-orb bg-gradient-orb--1" />
            <div className="bg-gradient-orb bg-gradient-orb--2" />
            <div className="bg-gradient-orb bg-gradient-orb--3" />

            {/* Floating particles */}
            <div className="particles">
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="particle"
                        style={{
                            left: p.left,
                            width: p.size,
                            height: p.size,
                            animationDuration: p.animationDuration,
                            animationDelay: p.animationDelay,
                            opacity: p.opacity,
                        }}
                    />
                ))}
            </div>

            {/* Cursor glow effect */}
            <div
                className="cursor-glow"
                style={{
                    left: mousePos.x,
                    top: mousePos.y,
                }}
            />
        </>
    );
}
