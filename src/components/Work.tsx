"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

export default function Work() {
  const projects = [
    {
      title: "E-commerce AI Agent",
      category: "AI Automation",
      description: "An intelligent chatbot integrated into top e-commerce platforms, utilizing NLP to handle customer queries, process returns, and recommend products, increasing sales conversion by 24%.",
      tags: ["Next.js", "Python", "OpenAI", "Stripe"],
    },
    {
      title: "SaaS Platform for Startups",
      category: "Custom Web App",
      description: "A comprehensive dashboard for early-stage companies to manage their equity, cap tables, and investor relations with real-time analytics and automated compliance checks.",
      tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    },
    {
      title: "Fintech API Gateway",
      category: "Cloud Solutions",
      description: "A highly resilient, low-latency microservices architecture built for a neobank to process millions of transactions per day securely and seamlessly.",
      tags: ["Go", "Kubernetes", "AWS", "Redis"],
    }
  ];

  return (
    <section id="work" className="py-24 relative z-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Our <span className="text-accent">Impact</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100 }}
              className="text-slate-400 text-lg"
            >
              Discover how we've helped forward-thinking companies build scalable technology and achieve extraordinary results.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <a href="#" className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent-hover transition-colors group">
              View all case studies 
              <span className="transform group-hover:translate-x-1 transition-transform">-&gt;</span>
            </a>
          </motion.div>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 80 }}
            >
              <SpotlightCard className="group flex flex-col lg:flex-row rounded-3xl p-0 h-full w-full">
                <div className="lg:w-7/12 p-8 md:p-12 flex flex-col justify-center relative z-10">
                  <div className="text-sm font-semibold text-accent tracking-wider uppercase mb-4">
                    {project.category}
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-blue-500 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-background/80 text-slate-300 text-sm rounded-full border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center text-slate-300 hover:text-accent hover:border-accent transition-all relative z-20">
                      <ExternalLink size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center text-slate-300 hover:text-accent hover:border-accent transition-all relative z-20">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                
                <div className="lg:w-5/12 relative min-h-[300px] lg:min-h-full bg-surface/50 overflow-hidden border-l border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-blue-600/20 mix-blend-overlay group-hover:opacity-70 opacity-30 transition-opacity duration-500 z-10"></div>
                  
                  {/* Abstract placeholder visual instead of an actual image depending on project */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="w-full h-full rounded-2xl border border-white/10 bg-background/50 backdrop-blur-sm relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                      {/* Decorative elements inside the placeholder */}
                      <div className="absolute top-4 left-4 right-4 h-6 border-b border-white/10 flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                      </div>
                      <div className="absolute top-16 left-6 right-6 bottom-6 flex flex-col gap-4">
                        <div className="h-4 w-1/3 bg-slate-800 rounded animate-pulse"></div>
                        <div className="h-4 w-1/2 bg-slate-800 rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="h-24 w-full bg-slate-800/50 rounded border border-white/5 mt-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
