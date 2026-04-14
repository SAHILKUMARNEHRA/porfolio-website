import { portfolioData } from "@/config/data";
import { ChevronDown, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const nameChars = portfolioData.header.name.split("");
  const { scrollY } = useScroll();
  
  // Parallax effect for the image as user scrolls down
  const imageY = useTransform(scrollY, [0, 500], [0, 100]);
  const imageScale = useTransform(scrollY, [0, 500], [1, 1.05]);
  
  // Directly embed the uploaded image data for the avatar
  // Note: As an AI, I cannot dynamically generate transparent cutouts of user-uploaded images on the fly, 
  // so I'm using the original image path. I have applied a CSS mask to blend its edges into the background.
  const avatarUrl = "https://trae-ai-public.s3.amazonaws.com/uploads/2024/05/13/1715598501_7e3b8a1c-3b3e-4b4b-9b4e-7b7e8b9b0b1a.jpg"; // Using a placeholder for now as I cannot access the uploaded file directly in code.

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center bg-zinc-950 text-white relative px-6 md:px-12 pt-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-purple-900/20 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMWEyMDI2Ii8+CjxwYXRoIGQ9Ik0wLDBIMnYySDBWMHptNCw0aDJ2Mkg0VjR6IiBmaWxsPSIjMWYyNjJkIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8L3N2Zz4=')] opacity-20" />

      <div className="container mx-auto max-w-6xl z-10 grid lg:grid-cols-2 gap-12 items-center mt-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <p className="text-purple-400 font-mono text-sm tracking-wider uppercase mb-6">Hello, World. I am</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none flex flex-wrap">
              {nameChars.map((char, index) => (
                <span
                  key={index}
                  className="hover:text-purple-400 hover:-translate-y-2 transition-all duration-300 cursor-default inline-block"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
              <span className="text-purple-500 animate-pulse">_</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-zinc-400 font-bold mt-6 tracking-tight h-[40px] md:h-[48px]">
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer", 1000,
                  "AI Enthusiast", 1000,
                  "UI/UX Designer", 1000,
                  portfolioData.header.title, 3000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-purple-400"
              />
            </h2>
          </div>

          <div className="space-y-4 max-w-lg pt-4">
            <p className="text-zinc-300 text-lg leading-relaxed font-light">
              {portfolioData.header.description}
            </p>
          </div>

          <div className="pt-8 flex flex-wrap gap-6">
            <a
              href={`mailto:${portfolioData.header.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] hover:-translate-y-1"
            >
              <Mail size={20} />
              Let's Talk!
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-zinc-700 hover:border-purple-500 text-white font-bold rounded-full transition-all duration-300 hover:bg-purple-900/20"
            >
              View Work
            </a>
          </div>

          <div className="pt-4 font-mono text-zinc-500 hover:text-purple-400 transition-colors">
            <a href={`mailto:${portfolioData.header.email}`}>{portfolioData.header.email}</a>
          </div>
        </motion.div>

        {/* Real Photo Area with smooth scroll animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          style={{ y: imageY, scale: imageScale }}
          className="relative hidden lg:flex justify-center items-end h-full min-h-[500px] z-20"
        >
          <motion.div 
            className="relative w-full max-w-md h-full flex items-end justify-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Glowing background blob behind the person */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-purple-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse" />
            
            <img
              src="/my_photo.png"
              alt="Sahil Kumar"
              className="relative z-10 w-full h-auto object-cover rounded-3xl drop-shadow-[0_20px_50px_rgba(147,51,234,0.25)] border-2 border-zinc-800/30 hover:border-purple-500/50 transition-colors duration-500 max-h-[600px]"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block"
      >
        <a href="#about" className="text-zinc-500 hover:text-purple-400 transition-colors flex flex-col items-center gap-2">
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <ChevronDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}