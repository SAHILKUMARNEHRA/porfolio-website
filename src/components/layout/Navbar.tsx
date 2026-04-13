import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "</Home>", href: "#home" },
  { name: "</AboutMe>", href: "#about" },
  { name: "</Education>", href: "#education" },
  { name: "</Experience>", href: "#experience" },
  { name: "</Skills>", href: "#skills" },
  { name: "</Projects>", href: "#projects" },
  { name: "</YouTube>", href: "#youtube" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-950/70 backdrop-blur-xl border-b border-zinc-800/50 shadow-lg shadow-purple-900/5" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        <a href="#home" className="text-2xl font-bold text-white tracking-tighter hover:text-purple-400 transition-colors">
          SK<span className="text-purple-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className={`hidden md:flex space-x-8 px-6 py-2 rounded-full transition-all duration-300 ${
          scrolled ? "bg-transparent" : "bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50"
        }`}>
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              href={item.href}
              className="text-zinc-400 hover:text-purple-400 transition-colors font-mono text-sm"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-t border-zinc-800 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-2 px-6 py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-zinc-300 hover:text-purple-400 font-mono py-3 border-b border-zinc-900/50 last:border-none transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
