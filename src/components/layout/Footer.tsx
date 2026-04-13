import { portfolioData } from "@/config/data";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-12 border-t border-zinc-900">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-500 font-mono text-sm hover:text-emerald-400 transition-colors cursor-pointer">
          {portfolioData.footer.text}
        </p>
        <div className="flex flex-wrap justify-center space-x-6 gap-y-2">
          <a href={`mailto:${portfolioData.header.email}`} className="text-zinc-400 hover:text-white transition-colors">
            Email
          </a>
          <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
            GitHub
          </a>
          <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href={portfolioData.socials.instagram} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
            Instagram
          </a>
        </div>
        <div className="text-zinc-600 text-xs">
          &copy; {new Date().getFullYear()} {portfolioData.header.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
