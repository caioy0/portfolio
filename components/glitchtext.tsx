"use client"
import { motion } from "motion/react"
import { useState, useEffect } from "react"

interface GlitchTextProps {
    text: string
    className?: string
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
    const [isGlitching, setIsGlitching] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsGlitching(true)
            setTimeout(() => setIsGlitching(false), 200)
        }, 3000)

        return () => clearInterval(interval)
    }, []);

    return (
        <div className={`relative inline-block ${className}`}>
            <motion.span
                className="relative z-10"
                animate={
                    isGlitching
                        ? {
                              x: [0, -2, 2, -2, 0],
                              textShadow: [
                                  "0 0 0px transparent",
                                  "-2px 0 0px #00f0ff, 2px 0 0px #ff00ff",
                                  "2px 0 0px #00f0ff, -2px 0 0px #ff00ff",
                                  "-2px 0 0px #00f0ff, 2px 0 0px #ff00ff",
                                  "0 0 0px transparent",
                              ],
                          }
                        : {}
                }
                transition={{ duration: 0.2 }}
            >
                {text}
            </motion.span>
        </div>
    );
}
