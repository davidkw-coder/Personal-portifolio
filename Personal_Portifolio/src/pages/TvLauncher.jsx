"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TvLauncher({
  title = "TV Launcher",
  subtitle = "Choose a channel",
  items = null,
  backgroundColor = "#061223",
  accentColor = "#ffd166",
}) {
  const demoItems = items || [
    { id: 1, title: "Movies", subtitle: "Top picks", img: "/thumbnail-1.png" },
    { id: 2, title: "Series", subtitle: "New episodes", img: "/thumbnail-2.png" },
    { id: 3, title: "Docs", subtitle: "Curated", img: "/thumbnail-1.png" },
    { id: 4, title: "Kids", subtitle: "For the family", img: "/thumbnail-2.png" },
  ];

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  };

  const tileVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.98 },
    show: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 140, damping: 12, mass: 0.6 } },
  };

  const ctaVariants = {
    hidden: { y: 18, opacity: 0, rotate: 6 },
    show: { y: 0, opacity: 1, rotate: 0, transition: { type: "spring", stiffness: 120, damping: 14 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ background: backgroundColor }}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="w-full h-full"
          style={{
            background: `radial-gradient(circle at 40% 30%, rgba(255,255,255,0.02), transparent 8%, rgba(0,0,0,0.45) 60%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl w-full">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 text-white">
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">{title}</h1>
            <p className="mt-2 text-slate-300">{subtitle}</p>
            <p className="mt-6 text-sm text-slate-400">Use keyboard to navigate tiles. Hover to preview.</p>
          </div>

          <div className="flex-none">
            <div className="relative" style={{ width: 520, maxWidth: "92vw" }}>
              <div className="rounded-2xl shadow-2xl overflow-hidden" style={{ background: "#0b1320", border: "1px solid rgba(255,255,255,0.03)" }}>
                <div className="relative p-5">
                  <motion.div
                    className="relative rounded-xl overflow-hidden"
                    initial={{ scale: 0.995 }}
                    animate={{ scale: [0.995, 1, 0.998, 1], rotate: 0 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))" }}
                  >
                    <motion.ul variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-2 gap-3 p-4 md:p-6">
                      {demoItems.map((item) => (
                        <motion.li key={item.id} variants={tileVariants} className="relative rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-500">
                          <button
                            className="w-full h-36 md:h-40 flex items-end p-3 bg-gradient-to-t from-black/30 to-transparent"
                            style={{ backgroundImage: `url(${item.img})`, backgroundSize: "cover", backgroundPosition: "center" }}
                            aria-label={`${item.title} - ${item.subtitle}`}
                          >
                            <div className="backdrop-blur-sm text-left text-white">
                              <div className="text-sm font-medium drop-shadow">{item.title}</div>
                              <div className="text-xs text-slate-200/80">{item.subtitle}</div>
                            </div>
                            <motion.div
                              layoutId={`glow-${item.id}`}
                              className="absolute inset-0 pointer-events-none"
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              transition={{ duration: 0.18 }}
                              style={{ boxShadow: `0 8px 40px -10px ${accentColor}` }}
                            />
                          </button>
                        </motion.li>
                      ))}
                    </motion.ul>

                    <motion.div initial="hidden" animate="show" variants={ctaVariants} className="absolute bottom-4 right-4">
                      <button
                        className="px-4 py-2 rounded-full font-semibold shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                        style={{ background: accentColor, color: "#0b1220" }}
                      >
                        Upload Video
                      </button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center">
                <div className="h-2 w-28 rounded-full bg-black/40" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .framer-motion { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
