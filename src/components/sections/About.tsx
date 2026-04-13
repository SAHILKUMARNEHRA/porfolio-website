import { portfolioData } from "@/config/data";
import { Download, Terminal } from "lucide-react";

export default function About() {
  const { title, section1, section2, resumeLink } = portfolioData.about;

  return (
    <section id="about" className="py-24 lg:py-32 bg-zinc-950 text-white relative px-6 md:px-12 border-t border-zinc-900/50">
      <div className="container mx-auto max-w-5xl">
        
        <div className="mb-16 md:mb-24 flex items-end gap-6">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            <span className="text-purple-500 font-mono font-normal text-3xl md:text-5xl mr-2">{"<"}</span>
            {title}
            <span className="text-purple-500 font-mono font-normal text-3xl md:text-5xl ml-2">{"/>"}</span>
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-zinc-800 to-transparent mb-4 hidden md:block" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-1 font-mono text-sm shadow-2xl backdrop-blur-sm relative overflow-hidden group">
                
                {/* Decorative terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/80 border-b border-zinc-800">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <div className="ml-2 text-zinc-500 text-xs flex items-center gap-2">
                    <Terminal size={12} />
                    <span>about_me.exe</span>
                  </div>
                </div>
                
                <div className="p-6 text-zinc-400 space-y-4 font-light">
                  <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {"{"}</p>
                  <p className="pl-4">name: <span className="text-yellow-300">'{portfolioData.header.name}'</span>,</p>
                  <p className="pl-4">role: <span className="text-yellow-300">'Full Stack & AI'</span>,</p>
                  <p className="pl-4">passion: <span className="text-yellow-300">'Clean Code & Logic'</span>,</p>
                  <p className="pl-4">status: <span className="text-green-400">true</span>,</p>
                  <p>{"};"}</p>
                  <br />
                  <p className="text-zinc-600">// Always learning.</p>
                  <p className="text-zinc-600">// Always building.</p>
                  
                  <div className="mt-8 pt-8 border-t border-zinc-800/50">
                    <a 
                      href={resumeLink}
                      download
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors rounded-sm border border-zinc-700"
                    >
                      <Download size={16} />
                      Download Resume
                    </a>
                  </div>
                </div>
                
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-16">
            <div className="space-y-6 relative">
              <div className="absolute -left-6 top-2 bottom-0 w-px bg-zinc-900 hidden md:block">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-500 border-4 border-zinc-950" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-100">{section1.subtitle}</h3>
              <p className="text-zinc-400 leading-relaxed text-lg font-light">
                {section1.text}
              </p>
            </div>

            <div className="space-y-6 relative">
              <div className="absolute -left-6 top-2 bottom-0 w-px bg-zinc-900 hidden md:block">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-zinc-700 border-4 border-zinc-950" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-100">{section2.subtitle}</h3>
              <p className="text-zinc-400 leading-relaxed text-lg font-light">
                {section2.text}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
