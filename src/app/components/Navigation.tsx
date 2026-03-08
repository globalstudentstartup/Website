import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import logoBlack from "figma:asset/79566f8df6b5c3761b519dc9d46ef31e438a7a0b.png";

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/gssc", label: "GSSC" },
    { path: "/ai-cup", label: "AI Cup" },
    { path: "/academy", label: "Academy" },
    { path: "/ventures", label: "Ventures" },
    { path: "/advisory", label: "Advisory" },
    { path: "/team", label: "Team" },
    { path: "/network", label: "Network" },
    { path: "/governance", label: "Governance" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white border-b border-black/8 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.img 
              src={logoBlack} 
              alt="GSSF" 
              className="h-12 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </Link>

          {/* Menu button for all screens */}
          <motion.button
            className="text-gray-700 hover:text-[#242EC0] transition-colors flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-medium uppercase text-sm tracking-wide">Menu</span>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        {/* Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pb-6 pt-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                {navItems.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block p-4 rounded-lg transition-all ${ 
                        isActive(link.path)
                          ? "bg-[#242EC0] text-white font-semibold"
                          : "bg-gray-50 text-gray-700 hover:bg-[#242EC0] hover:text-white font-medium"
                      }`}
                    >
                      <span className="uppercase text-sm tracking-wide">{link.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}