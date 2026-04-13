import { portfolioData } from "@/config/data";
import { Github, Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import EyeTrackingAvatar from "../ui/EyeTrackingAvatar";

export default function Contact() {
  const { socials, projects, footer } = portfolioData;

  return (
    <section id="contact" className="py-24 bg-zinc-950 text-white relative px-6 md:px-12 flex flex-col items-center overflow-hidden">
      {/* Background Gradient Effect matching the screenshot */}
      <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-purple-900/30 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-4xl text-center z-10 space-y-12">
        <h2 className="text-2xl md:text-4xl text-zinc-400 font-serif italic mb-8">
          "{projects.subtitle}"
        </h2>

        <a 
          href={`mailto:${socials.email}`} 
          className="inline-block text-3xl md:text-5xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 hover:scale-105 transition-transform duration-300"
        >
          {footer.text}
        </a>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-12">
          {[
            { icon: Instagram, href: socials.instagram, label: "Instagram" },
            { icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
            { icon: Github, href: socials.github, label: "GitHub" },
            { icon: Mail, href: `mailto:${socials.email}`, label: "Email" }
          ].map((item, index) => (
            <a 
              key={index}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full border-2 border-zinc-500 hover:border-purple-400 hover:bg-purple-900/20 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300 group relative"
              title={item.label}
            >
              <item.icon size={24} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
          ))}
        </div>

        <EyeTrackingAvatar />
      </div>
    </section>
  );
}
