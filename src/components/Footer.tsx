import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="w-8 h-8 rounded bg-accent flex items-center justify-center text-slate-950 font-bold text-xl">
                P
              </div>
              <span className="font-bold text-2xl tracking-tight text-foreground">
                PLV <span className="text-accent">Ltd.</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-8 max-w-sm">
              We build scalable software and integrate AI solutions that transform businesses and accelerate growth.
            </p>
            <div className="flex gap-4 text-slate-400">
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-accent transition-colors">Custom Web Apps</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">AI Automation</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#work" className="hover:text-accent transition-colors">Our Work</a></li>
              <li><a href="#process" className="hover:text-accent transition-colors">Process</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} PLV Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

