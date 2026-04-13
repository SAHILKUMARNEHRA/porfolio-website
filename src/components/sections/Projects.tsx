import { portfolioData } from "@/config/data";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const { title, subtitle, items } = portfolioData.projects;

  return (
    <section id="projects" className="py-24 lg:py-32 bg-zinc-950 text-white relative px-6 md:px-12 border-t border-zinc-900/50">
      <div className="container mx-auto max-w-5xl">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
              <span className="text-purple-500 font-mono font-normal text-3xl md:text-5xl mr-2">{"<"}</span>
              {title}
              <span className="text-purple-500 font-mono font-normal text-3xl md:text-5xl ml-2">{"/>"}</span>
            </h2>
            <p className="text-zinc-400 font-mono tracking-tight">{subtitle}</p>
          </motion.div>
          
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href={portfolioData.socials.github} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-mono text-zinc-500 hover:text-white transition-colors"
          >
            <Github size={16} />
            View All on GitHub
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((project, idx) => (
            <motion.div 
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/20 flex flex-col"
            >
              
              {/* Project Image Area */}
              <div className="aspect-video bg-zinc-900 border-b border-zinc-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                
                {/* Fallback pattern in case image fails to load, otherwise shows the image */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-30" />
                
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 relative z-0"
                  onError={(e) => {
                    // Fallback to abstract blocks if image isn't found
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if(fallback) fallback.style.display = 'flex';
                  }}
                />
                
                {/* Abstract fallback (hidden by default unless image fails) */}
                <div className="hidden w-full h-full border border-zinc-800 flex-col overflow-hidden bg-zinc-950/50 shadow-lg relative z-0">
                  <div className="h-6 bg-zinc-900 border-b border-zinc-800 flex items-center px-3 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-zinc-700" />
                    <div className="w-2 h-2 rounded-full bg-zinc-700" />
                    <div className="w-2 h-2 rounded-full bg-zinc-700" />
                  </div>
                  <div className="flex-1 p-4 flex flex-col gap-2">
                    <div className="h-4 w-1/3 bg-zinc-800 rounded" />
                    <div className="h-2 w-full bg-zinc-800/50 rounded mt-2" />
                    <div className="h-2 w-5/6 bg-zinc-800/50 rounded" />
                    <div className="mt-auto flex justify-end">
                      <div className="h-6 w-16 bg-purple-500/20 rounded" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-purple-400 transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex gap-2 shrink-0">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-2 bg-zinc-800 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all duration-300"
                      title="View Code"
                    >
                      <Github size={16} />
                    </a>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-2 bg-zinc-800 rounded-full text-zinc-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
                      title="Live Demo"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
                
                <p className="text-zinc-400 mb-8 font-light leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-zinc-950 border border-zinc-800 rounded text-xs font-mono text-zinc-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
