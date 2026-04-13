import { portfolioData } from "@/config/data";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-zinc-950 text-white relative px-6 md:px-12 border-t border-zinc-900/50">
      {/* Background Gradient */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="mb-16 md:mb-24 flex items-end gap-6">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            <span className="text-purple-500 font-mono font-normal text-3xl md:text-5xl mr-2">{"<"}</span>
            Experience
            <span className="text-purple-500 font-mono font-normal text-3xl md:text-5xl ml-2">{"/>"}</span>
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-zinc-800 to-transparent mb-4 hidden md:block" />
        </div>

        <div className="space-y-12">
          {experience.map((item, index) => (
            <div key={index} className="relative group pl-8 md:pl-0">
              
              {/* Timeline line */}
              <div className="absolute left-[11px] md:left-[50%] top-0 bottom-[-3rem] w-px bg-zinc-800 group-last:bg-transparent" />
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16">
                
                {/* Left Side: Period (Desktop only) */}
                <div className="hidden md:block w-1/2 text-right pr-12">
                  <span className="text-blue-400 font-mono text-sm px-4 py-2 bg-blue-950/20 border border-blue-900/30 rounded-full">
                    {item.period}
                  </span>
                </div>

                {/* Center Node */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-zinc-950 border-4 border-zinc-800 group-hover:border-blue-500 transition-colors duration-300 z-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-blue-400 transition-colors duration-300" />
                </div>

                {/* Right Side: Details */}
                <div className="md:w-1/2 md:pl-12 w-full">
                  <div className="p-6 bg-zinc-900/40 border border-zinc-800/50 rounded-xl hover:bg-zinc-900/80 hover:border-blue-500/30 transition-all duration-300">
                    {/* Period (Mobile only) */}
                    <div className="md:hidden mb-4">
                      <span className="text-blue-400 font-mono text-xs px-3 py-1 bg-blue-950/20 border border-blue-900/30 rounded-full">
                        {item.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="text-blue-400" size={20} />
                      <h3 className="text-xl font-bold text-zinc-100">{item.role}</h3>
                    </div>
                    
                    <p className="text-zinc-400 mb-3 font-mono text-sm text-purple-400">{item.company}</p>
                    
                    <p className="text-sm text-zinc-300 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
