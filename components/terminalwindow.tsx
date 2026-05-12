"use client"

import { motion } from "motion/react"
import { useState, useEffect } from "react"

interface TerminalWindowProps {
    title: string
    children: React.ReactNode
}

export function TerminalWindow({
    title,
    children,
}: TerminalWindowProps) {

    const [time, setTime] = useState("")

    useEffect(() => {
        const updateTime = () => {
            setTime(new Date().toLocaleTimeString())
        }

        updateTime()

        const interval = setInterval(updateTime, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="border-2 border-(--neon-green) bg-black/60 backdrop-blur-sm overflow-hidden"
        >
            <div className="bg-(--neon-green)/20 px-4 py-2 border-b border-(--neon-green) flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-(--neon-pink)" />
                        <div className="w-3 h-3 rounded-full bg-(--neon-yellow)" />
                        <div className="w-3 h-3 rounded-full bg-(--neon-green)" />
                    </div>

                    <span className="text-(--neon-green)">
                        {title}
                    </span>
                </div>

                <span className="text-(--neon-green)/60 font-mono">
                    {time}
                </span>
            </div>

            <div className="p-6 font-mono">
                {children}
            </div>
        </motion.div>
    )
}