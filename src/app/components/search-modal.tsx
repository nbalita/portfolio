import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, X } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: string, itemId?: string) => void;
}

interface SearchResult {
  type: "experience" | "skill" | "project";
  id: string;
  title: string;
  subtitle?: string;
  description: string;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchResults: SearchResult[] = [];
    const lowerQuery = query.toLowerCase();

    // Search in experience
    portfolioData.experience.forEach((exp) => {
      const matchesTitle = exp.title.toLowerCase().includes(lowerQuery);
      const matchesCompany = exp.company.toLowerCase().includes(lowerQuery);
      const matchesDescription = exp.description.some((desc) =>
        desc.toLowerCase().includes(lowerQuery)
      );

      if (matchesTitle || matchesCompany || matchesDescription) {
        searchResults.push({
          type: "experience",
          id: exp.id,
          title: exp.title,
          subtitle: exp.company,
          description: exp.period,
        });
      }
    });

    // Search in skills
    portfolioData.skills.forEach((skill) => {
      const matchesCategory = skill.category.toLowerCase().includes(lowerQuery);
      const matchesDescription = skill.description.toLowerCase().includes(lowerQuery);
      const matchesItems = skill.items.some((item) => item.toLowerCase().includes(lowerQuery));

      if (matchesCategory || matchesDescription || matchesItems) {
        searchResults.push({
          type: "skill",
          id: skill.id,
          title: skill.category,
          description: skill.description,
        });
      }
    });

    // Search in projects
    portfolioData.projects.forEach((project) => {
      const matchesTitle = project.title.toLowerCase().includes(lowerQuery);
      const matchesDescription = project.description.toLowerCase().includes(lowerQuery);
      const matchesTags = project.tags.some((tag) => tag.toLowerCase().includes(lowerQuery));

      if (matchesTitle || matchesDescription || matchesTags) {
        searchResults.push({
          type: "project",
          id: project.id,
          title: project.title,
          description: project.description,
        });
      }
    });

    setResults(searchResults.slice(0, 10));
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleResultClick = (result: SearchResult) => {
    if (result.type === "experience") {
      onNavigate("experience", result.id);
    } else if (result.type === "skill") {
      onNavigate("skills", result.id);
    } else if (result.type === "project") {
      onNavigate("projects", result.id);
    }
    onClose();
    setQuery("");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: -20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: -20 }}
          className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Input */}
          <div className="flex items-center gap-3 px-4 py-4 border-b border-slate-200 dark:border-slate-800">
            <Search className="text-slate-400" size={20} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search experience, skills, projects..."
              className="flex-1 bg-transparent text-slate-900 dark:text-slate-100 placeholder:text-slate-400 outline-none text-lg"
              autoFocus
            />
            <button
              onClick={onClose}
              className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X size={20} className="text-slate-400" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto p-2">
            {query && results.length === 0 && (
              <div className="text-center py-12 text-slate-500">
                No results found for "{query}"
              </div>
            )}

            {results.map((result, index) => (
              <motion.button
                key={`${result.type}-${result.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleResultClick(result)}
                className="w-full text-left p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`mt-1 px-2 py-1 rounded text-xs font-medium ${
                      result.type === "experience"
                        ? "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300"
                        : result.type === "skill"
                        ? "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300"
                        : "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300"
                    }`}
                  >
                    {result.type}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {result.title}
                    </div>
                    {result.subtitle && (
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {result.subtitle}
                      </div>
                    )}
                    <div className="text-sm text-slate-500 dark:text-slate-500 line-clamp-2 mt-1">
                      {result.description}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded">
                  ↵
                </kbd>
                <span>to select</span>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded">
                  Esc
                </kbd>
                <span>to close</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
