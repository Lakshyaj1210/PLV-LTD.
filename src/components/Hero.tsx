"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const headingText = "Building Tomorrow's Software, Today.";
  
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-accent"
        >
          Welcome to PLV Ltd.
        </motion.div>
        
        <motion.h1 
          variants={container}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-5xl mx-auto leading-tight flex flex-wrap justify-center gap-[0.2em]"
        >
          {headingText.split(" ").map((word, i) => (
            <motion.span key={i} variants={item} className={word === "Tomorrow's" ? "text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500" : ""}>
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          We architect premium digital experiences and intelligent systems that propel your business into the future.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <MagneticButton>
            <a
              href="#work"
              className="px-8 py-4 bg-accent text-slate-950 font-bold rounded-full hover:bg-accent-hover transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
            >
              Explore Our Work
              <ArrowRight size={20} />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#contact"
              className="px-8 py-4 bg-surface text-white font-medium rounded-full hover:bg-surface-hover border border-white/10 transition-all"
            >
              Let&apos;s Talk
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
