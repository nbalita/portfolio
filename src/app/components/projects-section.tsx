import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Filter, Folder, X, ExternalLink, Youtube } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

interface ProjectsSectionProps {
  highlightId?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ highlightId }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Get all unique tags
  const allTags = Array.from(
    new Set(portfolioData.projects.flatMap((project) => project.tags))
  ).sort();

  const filteredProjects = selectedTag
    ? portfolioData.projects.filter((project) => project.tags.includes(selectedTag))
    : portfolioData.projects;

  useEffect(() => {
    if (highlightId && itemRefs.current[highlightId]) {
      itemRefs.current[highlightId]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setSelectedProject(highlightId);
    }
  }, [highlightId]);

  const selectedProjectData = portfolioData.projects.find(
    (p) => p.id === selectedProject
  );

  // Function to open external URLs
  const openExternalUrl = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
              <Folder size={28} />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-700 dark:text-slate-100 mb-4">
            Featured Projects
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A collection of my recent work and projects showcasing different technologies and solutions.
          </p>
        </motion.div>

        {/* Filter by Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Filter size={20} className="text-slate-600 dark:text-slate-400" />
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              Filter by Technology
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <motion.button
              onClick={() => setSelectedTag(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedTag === null
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              All Projects
            </motion.button>

            {allTags.map((tag) => (
              <motion.button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg transition-all text-sm ${
                  selectedTag === tag
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {tag}
                {selectedTag === tag && <X size={14} className="inline ml-2" />}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              ref={(el: HTMLDivElement | null) => {
                if (el) {
                  itemRefs.current[project.id] = el;
                }
                return undefined;
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedProject(project.id)}
              className={`p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 shadow-lg hover:shadow-xl transition-all cursor-pointer ${
                highlightId === project.id
                  ? "border-emerald-500 dark:border-emerald-400 ring-4 ring-emerald-500/20"
                  : "border-slate-200 dark:border-slate-800"
              }`}
            >
              {/* Project Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white mb-4">
                <Folder size={24} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 line-clamp-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs font-medium rounded-md bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-500">
                  {project.status}
                </span>
                {project.hasDemo && (
                  <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    <Youtube size={14} />
                    View Demo →
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
            onClick={() => {
              setSelectedTag(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <ExternalLink size={20} />
            <span>Explore All Projects</span>
            <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && selectedProjectData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 p-8 text-white">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Folder size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-1">
                      {selectedProjectData.title}
                    </h2>
                    <div className="flex items-center gap-2 text-sm opacity-90">
                      <span>{selectedProjectData.status}</span>
                      {selectedProjectData.hasDemo && (
                        <span className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-md">
                          <Youtube size={12} />
                          Demo Available
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Description Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    Description
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {selectedProjectData.description}
                  </p>
                </div>

                {/* Technologies Used Section - NOW VISIBLE */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    Technologies / Tools Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProjectData.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                  {selectedProjectData.hasDemo && selectedProjectData.demourl && (
                    <button
                      onClick={() => openExternalUrl(selectedProjectData.demourl!)}
                      className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Youtube size={20} />
                      <span className="font-semibold">Watch Demo on YouTube</span>
                    </button>
                  )}
                  
                  {selectedProjectData.hasDemo && !selectedProjectData.demourl && (
                    <button
                      onClick={() => {
                        console.log("Demo requested but no URL available");
                      }}
                      className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <ExternalLink size={20} />
                      <span className="font-semibold">View Demo</span>
                    </button>
                  )}
                  
                  <button
                    onClick={() => {
                      console.log("Viewing project details:", selectedProjectData.title);
                    }}
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink size={20} />
                    <span className="font-semibold">View Project Details</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};