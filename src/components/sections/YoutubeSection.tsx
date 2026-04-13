import { portfolioData } from "@/config/data";
import { Youtube, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function YoutubeSection() {
  const { youtube } = portfolioData;

  return (
    <section id="youtube" className="py-24 lg:py-32 bg-zinc-950 text-white relative px-6 md:px-12 border-t border-zinc-900/50">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16 md:mb-24 text-center"
        >
          <Youtube className="text-red-500 mb-6" size={64} />
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
            <span className="text-red-500 font-mono font-normal text-3xl md:text-5xl mr-2">{"<"}</span>
            {youtube.title}
            <span className="text-red-500 font-mono font-normal text-3xl md:text-5xl ml-2">{"/>"}</span>
          </h2>
          <p className="text-zinc-400 font-mono tracking-tight max-w-xl mx-auto">{youtube.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {youtube.channels.map((channel, idx) => (
            <motion.a
              key={channel.name}
              href={channel.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/20 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-zinc-950 border border-zinc-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-500 shadow-lg">
                <Youtube className="text-red-500 group-hover:text-white transition-colors" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-red-400 transition-colors mb-4">
                {channel.name}
              </h3>
              <p className="text-zinc-400 mb-8 font-light flex-1">
                {channel.description}
              </p>
              
              <div className="mt-auto px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-full transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.3)] group-hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                Subscribe Now <ExternalLink size={18} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
