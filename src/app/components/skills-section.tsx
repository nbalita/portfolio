import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Filter, Code2, X } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

interface SkillsSectionProps {
  highlightId?: string;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ highlightId }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const categories = portfolioData.skills.map((skill) => skill.category);
  const filteredSkills = selectedCategory
    ? portfolioData.skills.filter((skill) => skill.category === selectedCategory)
    : portfolioData.skills;

  useEffect(() => {
    if (highlightId && itemRefs.current[highlightId]) {
      itemRefs.current[highlightId]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [highlightId]);

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
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <Code2 size={28} />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-700 dark:text-slate-100 mb-4">
            Skills & Expertise
          </h1>


          {/*  <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive technical expertise across 10+ domains
          </p>  */}


        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Filter size={20} className="text-slate-600 dark:text-slate-400" />
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              Filter by Category
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <motion.button
              onClick={() => setSelectedCategory(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedCategory === null
                  ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              All Categories
            </motion.button>

            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() =>
                  setSelectedCategory(selectedCategory === category ? null : category)
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {category}
                {selectedCategory === category && (
                  <X size={16} className="inline ml-2" />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              ref={(el: HTMLDivElement | null) => {
                // FIXED: Proper ref callback that returns void
                if (el) {
                  itemRefs.current[skill.id] = el;
                }
                return undefined;
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 shadow-lg hover:shadow-xl transition-all ${
                highlightId === skill.id
                  ? "border-blue-500 dark:border-blue-400 ring-4 ring-blue-500/20"
                  : "border-slate-200 dark:border-slate-800"
              }`}
            >
              {/* Category Title */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                {skill.category}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                {skill.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-100 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};