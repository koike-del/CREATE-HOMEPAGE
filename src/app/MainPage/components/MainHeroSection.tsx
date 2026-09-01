"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function MainHeroSection() {
    const { t } = useLanguage();
    const [index, setIndex] = useState(0);
    const slideDuration = 6000;

    const renderSupportMessage = (message: {
        badge?: string;
        title: string;
        body: string[];
        cta: string;
    }) => (
        <>
            {message.badge && (
                <p className="leading-relaxed text-zinc-200">
                    <strong className="font-bold text-white">{message.badge}</strong>
                </p>
            )}
            {message.title && (
                <p className="leading-relaxed text-zinc-200">
                    <strong className="font-bold text-white">{message.title}</strong>
                </p>
            )}
            {message.body.map((paragraph, index) => (
                <p key={`${paragraph}-${index}`} className="leading-relaxed text-zinc-200">
                    {paragraph}
                </p>
            ))}
            {message.cta && (
                <p className="leading-relaxed text-emerald-300">{message.cta}</p>
            )}
        </>
    );

    const mediaFiles = [
        {
            type: "video",
            src: "/ScreenRecording_08-31-2025 21-51-40_1.mov",
            caption: "ENGINE 'J-6i'",
            sub: "NEW ENGINE"
        },
        {
            type: "video",
            src: "/73L.mp4",
            caption: "C-73J 'DAC'",
            sub: "HYBRID ROCKET"
        },
        {
            type: "video",
            src: "/cansat.mp4",
            caption: "CANSAT 'C-04R'",
            sub: "AUTONOMOUS CONTROL RUNBACK"
        },
        {
            type: "image",
            src: "/IMG_0853.jpg",
            caption: "C-83LM 'KEY-CHAN'",
            sub: "HYBRID ROCKET"
        },
        {
            type: "image",
            src: "/61-fire.JPG",
            caption: "C-61J 'UNICORN'",
            sub: "HYBRID ROCKET"
        },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((current) => (current === mediaFiles.length - 1 ? 0 : current + 1))
        }, slideDuration);
        return () => clearInterval(interval);
    }, [mediaFiles.length]);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black">
            {/* Background Media */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1.0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    {mediaFiles[index].type === "image" ? (
                        <Image
                            src={mediaFiles[index].src}
                            alt={mediaFiles[index].caption}
                            fill
                            className="object-cover opacity-60"
                            priority
                        />
                    ) : (
                        <video
                            src={mediaFiles[index].src}
                            className="w-full h-full object-cover opacity-60"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    )}

                    {/* Cinematic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 z-20 flex items-end pb-20 md:pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16"
                >
                    <div className="max-w-[min(90vw,42rem)] rounded-2xl border border-white/15 bg-black/30 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm md:p-8">
                        <div className="mb-4 inline-flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.26em] text-emerald-300">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                            {t.fundPage.bannerp.mission}
                        </div>

                        <h1 className="max-w-full whitespace-nowrap text-3xl font-black leading-[0.95] tracking-tight text-white md:text-5xl lg:text-6xl">
                            {t.fundPage.bannerp.title}
                        </h1>

                        <div className="mt-4 max-w-lg space-y-3 text-sm md:text-base">
                            {renderSupportMessage(t.topPage.crowdfunding.message)}
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.18em] text-zinc-200 md:text-xs">
                            <div className="rounded-full border border-white/15 bg-white/5 px-3 py-2">
                                <span className="mr-2 text-zinc-400">{t.fundPage.bannerp.period}</span>
                                <span className="font-bold text-white">11/1~12/10</span>
                            </div>
                            <div className="rounded-full border border-white/15 bg-white/5 px-3 py-2">
                                <span className="mr-2 text-zinc-400">{t.fundPage.bannerp.goalFunds}</span>
                                <span className="font-bold text-white">{t.fundPage.bannerp.goalFundsNumber}</span>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Link
                                href="/Fund&SponsorPage"
                                className="group inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-400 px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:bg-emerald-300"
                            >
                                {t.fundPage.support.title}
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <div className="text-xs uppercase tracking-[0.24em] text-zinc-300">
                                {t.topPage.hero.scroll}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Tech Details - Corners */}
            <div className="absolute top-24 left-8 md:left-16 z-20 hidden md:block">
                <div className="flex flex-col space-y-1">
                    <span className="text-[10px] text-white/40 font-mono">COORDINATES</span>
                    <span className="text-xs text-white/80 font-mono">{t.topPage.hero.coordinates}</span>
                </div>
            </div>

            <div className="absolute top-24 right-8 md:right-16 z-20 hidden md:block">
                <div className="flex flex-col space-y-1 text-right">
                    <span className="text-[10px] text-white/40 font-mono">STATUS</span>
                    <span className="text-xs text-green-400 font-mono flex items-center justify-end gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        {t.topPage.hero.status}
                    </span>
                </div>
            </div>

            {/* Bottom Info & Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-30 flex justify-end items-end">
                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full">
                    <motion.div
                        key={index}
                        className="h-full bg-white"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: slideDuration / 1000, ease: "linear" }}
                    />
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/50 hidden md:flex flex-col items-center gap-2 cursor-pointer"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="text-[10px] tracking-widest uppercase font-mono">{t.topPage.hero.scroll}</span>
                <ChevronDown size={20} />
            </motion.div>
        </div>
    );
}