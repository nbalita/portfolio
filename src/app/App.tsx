import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search } from "lucide-react";
import { ThemeProvider } from "@/contexts/theme-context";
import { Navigation } from "@/app/components/navigation";
import { SearchModal } from "@/app/components/search-modal";
import { HomeSection } from "@/app/components/home-section";
import { ExperienceSection } from "@/app/components/experience-section";
import { SkillsSection } from "@/app/components/skills-section";
import { ProjectsSection } from "@/app/components/projects-section";
import { ContactSection } from "@/app/components/contact-section";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [highlightId, setHighlightId] = useState<string | undefined>(undefined);

  // Handle Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavigate = (section: string, itemId?: string) => {
    setActiveSection(section);
    setHighlightId(itemId);
    
    // Clear highlight after animation
    if (itemId) {
      setTimeout(() => setHighlightId(undefined), 3000);
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        {/* Navigation */}
        <Navigation activeSection={activeSection} onSectionChange={handleNavigate} />

        {/* Floating Search Button */}
        <motion.button
          onClick={() => setIsSearchOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-40 p-4 rounded-full bg-gradient-to-r from-blue-600 to-sky-600 text-white shadow-lg hover:shadow-xl transition-shadow"
          title="Search (Ctrl+K)"
        >
          <Search size={24} />
          <span className="sr-only">Search</span>
        </motion.button>

        {/* Search Modal */}
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onNavigate={handleNavigate}
        />

        {/* Main Content */}
        <main>
          <AnimatePresence mode="wait">
            {activeSection === "home" && (
              <motion.div
                key="home"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <HomeSection />
              </motion.div>
            )}

            {activeSection === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <ExperienceSection highlightId={highlightId} />
              </motion.div>
            )}

            {activeSection === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <SkillsSection highlightId={highlightId} />
              </motion.div>
            )}

            {activeSection === "projects" && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectsSection highlightId={highlightId} />
              </motion.div>
            )}

            {activeSection === "contact" && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <ContactSection />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="border-t border-slate-200 dark:border-slate-800 py-8 mt-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-slate-600 dark:text-slate-400">
              <p className="mb-2">
                © {new Date().getFullYear()} Noel Balita. All rights reserved.
              </p>
             
            </div>
          </div>
        </motion.footer>
      </div>
    </ThemeProvider>
  );
}
