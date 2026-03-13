"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Sparkles, Cloud } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

export default function Services() {
  const services = [
    {
      icon: <Code2 size={32} className="text-accent" />,
      title: "Custom Web Apps",
      description: "High-performance, scalable web applications tailored to your business needs, built with cutting-edge frameworks."
    },
    {
      icon: <Sparkles size={32} className="text-accent" />,
      title: "AI Automation",
      description: "Intelligent systems and agents that streamline operations, reduce manual work, and drive data decision-making."
    },
    {
      icon: <Cloud size={32} className="text-accent" />,
      title: "Cloud Solutions",
      description: "Robust cloud architectures ensuring high availability, security, and seamless deployment pipelines."
    }
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section id="services" className="py-24 relative z-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Extensive <span className="text-accent">Capabilities</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Delivering end-to-end solutions that sit at the intersection of design, engineering, and artificial intelligence.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <SpotlightCard className="h-full p-8 group">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed relative z-10">
                  {service.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
