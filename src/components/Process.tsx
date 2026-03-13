"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We dive deep into your business objectives, technical requirements, and market landscape to architect a roadmap tailored to your success."
    },
    {
      number: "02",
      title: "Design & Engineering",
      description: "Our team of experts crafts responsive, high-performance solutions using modern frameworks and best-in-class architectural patterns."
    },
    {
      number: "03",
      title: "Deployment & Scaling",
      description: "We deploy with zero downtime and continuously monitor, optimize, and scale your product to ensure it handles future growth effortlessly."
    }
  ];

  return (
    <section id="process" className="py-24 bg-background relative z-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            How We <span className="text-accent">Work</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            A streamlined, transparent process designed to deliver exceptional results with velocity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[4.5rem] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative text-center group"
            >
              <div className="w-24 h-24 mx-auto bg-surface rounded-full border-2 border-white/10 flex items-center justify-center mb-8 relative z-10 group-hover:border-accent group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-500">
                <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-foreground to-slate-500 group-hover:from-accent group-hover:to-blue-400 transition-all duration-300">
                  {step.number}
                </span>
                <div className="absolute inset-0 rounded-full border border-accent opacity-0 group-hover:animate-ping group-hover:opacity-20"></div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
                {step.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="p-8 md:p-12 bg-gradient-to-b from-surface to-background rounded-3xl border border-white/10 inline-block w-full max-w-4xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full mix-blend-screen filter blur-[80px]"></div>
            <h3 className="text-2xl md:text-4xl font-bold mb-6 relative z-10">Ready to start your next project?</h3>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto relative z-10">
              Drop us a message and we&apos;ll get back to you within 24 hours to discuss how we can help your business thrive.
            </p>
            <form id="contact" className="relative z-10 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 rounded-full bg-background border border-white/10 text-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                required
              />
              <button 
                type="button" 
                className="px-8 py-4 bg-accent text-slate-950 font-bold rounded-full hover:bg-accent-hover transition-all shadow-lg shadow-accent/20 hover:-translate-y-1"
              >
                Let&apos;s Build
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
