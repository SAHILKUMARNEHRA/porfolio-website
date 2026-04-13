import { portfolioData } from "@/config/data";
import { Code2, Database, LayoutTemplate, Server, Cpu, Wrench } from "lucide-react";

// Using cdn.jsdelivr.net devicons to get official colored logos
const deviconMap: Record<string, string> = {
  "Python": "python/python-original.svg",
  "JavaScript": "javascript/javascript-original.svg",
  "TypeScript": "typescript/typescript-original.svg",
  "HTML": "html5/html5-original.svg",
  "CSS": "css3/css3-original.svg",
  "React.js": "react/react-original.svg",
  "Tailwind CSS": "tailwindcss/tailwindcss-original.svg",
  "Figma": "figma/figma-original.svg",
  "Node.js": "nodejs/nodejs-original.svg",
  "Express.js": "express/express-original.svg",
  "Prisma": "prisma/prisma-original.svg",
  "MongoDB": "mongodb/mongodb-original.svg",
  "PostgreSQL": "postgresql/postgresql-original.svg",
  "MySQL": "mysql/mysql-original.svg",
  "SQL": "mysql/mysql-original.svg", // Fallback for general SQL
  "Git": "git/git-original.svg",
  "Netlify": "netlify/netlify-original.svg",
  "Vercel": "vercel/vercel-original.svg",
  "Render": "render/render-original.svg",
  "Railway": "railway/railway-original.svg",
  "Postman": "postman/postman-original.svg",
};

const categoryIconMap: Record<string, React.ElementType> = {
  "Programming Languages": Code2,
  "Frontend": LayoutTemplate,
  "Backend & Databases": Database,
  "Deployment & Tools": Wrench,
  "AI / ML": Cpu
};

export default function Skills() {
  const { title, categories } = portfolioData.skills;

  return (
    <section id="skills" className="py-24 lg:py-32 bg-zinc-950 text-white relative px-6 md:px-12 border-t border-zinc-900/50 overflow-hidden">
      
      {/* Background Pattern and subtle gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter inline-block relative">
            <span className="text-purple-500 font-mono font-normal text-3xl md:text-5xl mr-2">{"<"}</span>
            {title}
            <span className="text-purple-500 font-mono font-normal text-3xl md:text-5xl ml-2">{"/>"}</span>
            
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-purple-500/20" />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-purple-500" />
          </h2>
        </div>

        <div className="space-y-20">
          {categories.map((category, idx) => {
            const CatIcon = categoryIconMap[category.name] || Server;

            return (
              <div key={category.name} className="relative group">
                <div className="absolute -inset-x-4 -inset-y-4 bg-zinc-900/30 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-500 -z-10 blur-xl" />
                
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3 pt-2 flex flex-col gap-4">
                    <h3 className="text-xl font-bold text-zinc-100 flex items-center gap-4">
                      <span className="text-purple-500 font-mono text-sm">{`0${idx + 1}.`}</span>
                      <CatIcon className="text-purple-400" size={24} />
                      {category.name}
                    </h3>
                    <div className="w-8 h-px bg-zinc-800" />
                  </div>
                  
                  <div className="md:w-2/3 flex flex-wrap gap-4">
                    {category.items.map((skill, index) => {
                      const iconUrl = deviconMap[skill] 
                        ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${deviconMap[skill]}` 
                        : null;

                      // Express icon is black by default, adding a white background helps visibility
                      const needsWhiteBg = skill === "Express.js" || skill === "Next.js";

                      return (
                        <div 
                          key={skill}
                          className="flex items-center gap-3 px-4 py-3 bg-zinc-900/80 border border-zinc-800 text-zinc-200 rounded-lg text-sm font-mono hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-950/30 transition-all duration-300 shadow-sm"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          {iconUrl ? (
                            <div className={`w-6 h-6 flex items-center justify-center rounded-sm ${needsWhiteBg ? 'bg-white p-0.5' : ''}`}>
                              <img src={iconUrl} alt={skill} className="w-full h-full object-contain" />
                            </div>
                          ) : (
                            <Code2 size={18} className="text-purple-500" />
                          )}
                          <span className="font-semibold">{skill}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
