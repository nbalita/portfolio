import React, { useEffect } from "react";
import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

interface ExperienceSectionProps {
  highlightId?: string;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ highlightId }) => {
  useEffect(() => {
    if (highlightId) {
      const element = document.getElementById(highlightId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 text-white">
              <Briefcase size={28} />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-700 dark:text-slate-100 mb-4">
            Professional Experience
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          With 5 years of hands-on expertise in delivering enterprise-grade IT solutions
          </p>
        </motion.div>

        
        

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-600 via-teal-600 to-teal-600" />

          {/* Experience Items */}
          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                id={exp.id} // Using id instead of ref for scrolling
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-2rem)]">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 shadow-lg hover:shadow-xl transition-all ${
                      highlightId === exp.id
                        ? "border-teal-500 dark:border-teal-400 ring-4 ring-teal-500/20 animate-pulse"
                        : "border-slate-200 dark:border-slate-800"
                    }`}
                  >
                    {/* Period Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar size={16} className="text-teal-600" />
                      <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
                        {exp.period}
                      </span>
                    </div>

                    {/* Title & Company */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                      {exp.title}
                    </h3>
                    {exp.company && (
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
                        {exp.company}
                      </p>
                    )}

                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {exp.description.map((desc, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-slate-600 dark:text-slate-400"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-600 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`w-4 h-4 rounded-full ${
                      highlightId === exp.id
                        ? "bg-violet-600 ring-4 ring-violet-500/30 animate-pulse"
                        : "bg-gradient-to-r from-teal-600 to-emerald-600"
                    }`}
                  />
                </div>
              </motion.div>

              
            ))}
          </div>
          
        </div>
      </div>

       <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
           
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-700 dark:text-slate-100 mb-4">
           Non IT Experience
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          In addition to my IT background, I have practical experience in diverse non-IT roles, including Service Crew, Production Operator, and Stock Clerk. These positions allowed me to develop strong communication skills while also improving my ability to solve problems, skills I believe are transferable and valuable.
          </p>
        </motion.div>
    </div>

    
  );
};