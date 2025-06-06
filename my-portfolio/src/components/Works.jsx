import { useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import works from "../assets/works";

export default function Works({ showAll = false }) {
    const [hoveredIdx, setHoveredIdx] = useState(null);
    const [showPopoverIdx, setShowPopoverIdx] = useState(null);
    const [popoverPos, setPopoverPos] = useState({ x: 0, y: 0 });
    const hoverTimeout = useRef(null);
    const visibleWorks = showAll ? works : works.slice(0, 3);

    const handleMouseEnter = (idx, e) => {
        setHoveredIdx(idx);
        const { clientX, clientY } = e;
        setPopoverPos({ x: clientX, y: clientY });
        hoverTimeout.current = setTimeout(() => {
            setShowPopoverIdx(idx);
        }, 2000); // 2 seconds
    };

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        setPopoverPos({ x: clientX, y: clientY });
    };

    const handleMouseLeave = () => {
        setHoveredIdx(null);
        clearTimeout(hoverTimeout.current);
        setShowPopoverIdx(null);
    };

    return (
        <section
            id="work"
            className="min-h-[60vh] py-20 px-2 sm:px-4 flex flex-col items-center justify-center bg-transparent"
            style={{ overflow: "visible" }}
        >
            {/* Wrapper for line and heading */}
            <div
                className="w-full max-w-6xl z-30"
                // Removed sticky styles
            >
                {/* 1px line above the heading */}
                <div
                    style={{
                        borderTop: "1px solid #2c2b2b",
                        marginBottom: "2rem",
                    }}
                />
                <h2
                    className="text-2xl sm:text-3xl font-bold w-full text-[#c7c7c7]"
                    style={{
                        paddingTop: "1.5rem",
                        paddingBottom: "1.5rem",
                    }}
                >
                    {showAll ? "All Works" : "Latest work"}
                </h2>
            </div>

            {visibleWorks.map((work, idx) => (
                <div
                    key={work.title}
                    className="w-full max-w-6xl mb-8 relative"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.025,
                            boxShadow:
                                idx === 0
                                    ? "0 8px 32px 0 rgba(23,241,209,0.10)"
                                    : "0 8px 32px 0 rgba(163,116,255,0.10)",
                        }}
                        transition={{ duration: 0.7, delay: idx * 0.15, type: "spring" }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="relative rounded-2xl p-6 overflow-hidden cursor-pointer transition-all"
                        style={{
                            background: "#0e0e0e",
                            border: "1px solid #2c2b2b",
                        }}
                    >
                        {/* Top Row */}
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <div className="text-lg sm:text-xl font-semibold text-white">
                                    {work.title}
                                </div>
                                <div className="text-xs sm:text-sm text-neutral-400 mt-1">
                                    {work.subtitle}
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <ArrowUpRight className="text-[#c7c7c7]" size={22} />
                                <span className="text-xs text-neutral-400">
                                    {work.year}
                                </span>
                            </div>
                        </div>
                        {/* Image */}
                        <div className="w-full rounded-xl overflow-hidden border border-[#232323] bg-[#101010]">
                            <img
                                src={work.image}
                                alt={work.title}
                                className="w-full h-auto object-cover"
                                style={{ minHeight: 180, maxHeight: 340 }}
                            />
                        </div>
                        {/* Details Below Image */}
                        <div className="mt-4">
                            <div className="mb-2">
                                <span className="font-semibold text-[#c7c7c7]">Tech: </span>
                                {work.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="inline-block bg-[#101010] border border-[#232323] rounded px-2 py-1 text-xs text-[#2FCA55] font-semibold mr-2 mb-1"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className="text-xs text-neutral-300">
                                {work.detail}
                            </div>
                        </div>
                    </motion.div>

                    {/* Popover */}
                    <AnimatePresence>
                        {showPopoverIdx === idx && (
                            <motion.div
                                key="popover"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ type: "spring", duration: 0.3 }}
                                style={{
                                    position: "fixed",
                                    top: popoverPos.y + 16,
                                    left: popoverPos.x + 16,
                                    zIndex: 9999,
                                    width: "24rem",
                                    maxWidth: "90vw",
                                    borderRadius: "0.75rem",
                                    padding: "1rem",
                                    background: "#181818",
                                    border: "1px solid #2c2b2b",
                                    boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)",
                                    pointerEvents: "none",
                                }}
                            >
                                <div className="font-semibold text-white text-base mb-1">
                                    {work.title}
                                </div>
                                <div className="text-xs text-neutral-400 mb-2">
                                    {work.subtitle} &middot; {work.year}
                                </div>
                                <div className="mb-2">
                                    <span className="font-semibold text-[#c7c7c7]">Tech: </span>
                                    {work.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="inline-block bg-[#101010] border border-[#232323] rounded px-2 py-1 text-xs text-[#2FCA55] font-semibold mr-2 mb-1"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="text-xs text-neutral-300">
                                    {work.detail}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}

            {!showAll && (
                <div className="w-full max-w-6xl flex justify-end">
                    <a
                        href="/all-works"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#A374FF] text-base font-semibold hover:underline transition"
                    >
                        See all my works &rarr;
                    </a>
                </div>
            )}
        </section>
    );
}
