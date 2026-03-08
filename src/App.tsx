import { motion } from 'motion/react';
import { ArrowRight, Rocket, Cpu, BarChart3, AppWindow, Zap } from 'lucide-react';
import { cn } from './lib/utils';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
    <div className="glass px-6 py-3 rounded-full flex items-center gap-8 shadow-sm">
      <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
          <Zap size={18} fill="currentColor" />
        </div>
        <span>Break Solve Build</span>
      </div>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600">
        <a href="#vision" className="hover:text-emerald-600 transition-colors">Vision</a>
        <a href="#services" className="hover:text-emerald-600 transition-colors">Services</a>
        <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
      </div>
      <button className="bg-zinc-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-600 transition-all">
        Get Started
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Early Stage Partner
        </div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-zinc-900 mb-8 leading-[0.9]">
          Break. <br />
          <span className="text-emerald-500">Solve.</span> <br />
          Build.
        </h1>
        <p className="text-xl text-zinc-600 max-w-lg mb-10 leading-relaxed">
          We're redefining startup consulting. Breaking traditional barriers, solving with AI efficiency, and building your vision with precision.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2 group">
            Launch Your Startup <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-white border border-zinc-200 text-zinc-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-zinc-50 transition-all">
            View Our Work
          </button>
        </div>
      </motion.div>
      <div className="relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
        >
          <img 
            src="https://picsum.photos/seed/startup-tech/1000/1000" 
            alt="Innovative Startup Workspace" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent"></div>
        </motion.div>
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-200 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-200 rounded-full blur-3xl opacity-50 -z-10"></div>
      </div>
    </div>
  </section>
);

const Vision = () => (
  <section id="vision" className="py-24 px-6 bg-zinc-900 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <div className="text-emerald-500 font-mono text-sm uppercase tracking-[0.2em]">01. Break</div>
          <h3 className="text-4xl font-bold leading-tight">Breaking the Status Quo</h3>
          <p className="text-zinc-400 leading-relaxed">
            Traditional consulting is slow and expensive. We break those cycles by introducing lean, agile methodologies that prioritize speed and market validation.
          </p>
        </div>
        <div className="space-y-6">
          <div className="text-emerald-500 font-mono text-sm uppercase tracking-[0.2em]">02. Solve</div>
          <h3 className="text-4xl font-bold leading-tight">Solving with AI Intelligence</h3>
          <p className="text-zinc-400 leading-relaxed">
            We don't just guess. We use advanced AI models to solve complex problems in marketing, categorization, and market positioning with data-driven precision.
          </p>
        </div>
        <div className="space-y-6">
          <div className="text-emerald-500 font-mono text-sm uppercase tracking-[0.2em]">03. Build</div>
          <h3 className="text-4xl font-bold leading-tight">Building the Future</h3>
          <p className="text-zinc-400 leading-relaxed">
            From MVPs to full-scale applications, we build technology that scales. Your startup's tech stack is crafted to be your competitive advantage.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const services = [
  {
    title: "Marketing Strategy",
    description: "Growth hacking, brand positioning, and AI-optimized ad campaigns that actually convert.",
    icon: BarChart3,
    color: "bg-blue-500"
  },
  {
    title: "Technology Consulting",
    description: "Architecture design, cloud infrastructure, and choosing the right stack for your unique needs.",
    icon: Cpu,
    color: "bg-emerald-500"
  },
  {
    title: "App Development",
    description: "Building high-performance web and mobile applications that users love to interact with.",
    icon: AppWindow,
    color: "bg-purple-500"
  },
  {
    title: "Categorization & Data",
    description: "Organizing your startup's data and market categorization to find your perfect niche.",
    icon: Rocket,
    color: "bg-orange-500"
  }
];

const Services = () => (
  <section id="services" className="py-24 px-6 bg-zinc-50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Full-Spectrum Support</h2>
        <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
          We provide the specialized expertise early-stage startups need to navigate the transition from idea to industry leader.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col h-full"
          >
            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6", service.color)}>
              <service.icon size={28} />
            </div>
            <h4 className="text-xl font-bold mb-4">{service.title}</h4>
            <p className="text-zinc-600 leading-relaxed flex-grow">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section id="contact" className="py-24 px-6">
    <div className="max-w-5xl mx-auto bg-emerald-500 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Ready to build something <br className="hidden md:block" /> extraordinary?</h2>
        <p className="text-emerald-50 text-xl mb-12 max-w-2xl mx-auto">
          Join the next generation of startups working with Break Solve Build. Let's turn your vision into reality.
        </p>
        <button className="bg-white text-emerald-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-zinc-100 transition-all shadow-xl">
          Book a Consultation
        </button>
      </div>
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-400 rounded-full opacity-30"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-600 rounded-full opacity-30"></div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-zinc-100">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
          <Zap size={18} fill="currentColor" />
        </div>
        <span>Break Solve Build</span>
      </div>
      <div className="flex gap-8 text-sm text-zinc-500">
        <a href="#" className="hover:text-emerald-600">Twitter</a>
        <a href="#" className="hover:text-emerald-600">LinkedIn</a>
        <a href="#" className="hover:text-emerald-600">Instagram</a>
      </div>
      <div className="text-sm text-zinc-400">
        © 2026 Break Solve Build. All rights reserved.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Vision />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}
