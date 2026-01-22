import React from "react";
import { motion } from "motion/react";
import { User, GraduationCap, Award, Sparkles, Mail, MapPin, Linkedin, Globe, Mic, Briefcase, FileText,  Code } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const HomeSection: React.FC = () => {
  const { personal } = portfolioData;

  // Facebook embed URLs for highlights
  const facebookEmbeds = [
    {
      url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FEdustriaHS%2Fposts%2Fpfbid0QQMzZvLb8UDDuTq8G4r8APkmySgxPHdo3Bopbxs7mbHKzsQVmwuNnNGC6XfEHfpdl&show_text=true&width=590",
      height: 793
    },
    {
      url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02t3ZnfrwxAP42UR66jCr2coyFEoN2j8s52HdadM4DKW6xx9jUMNEcLcXNNdfB32R3l%26id%3D100076176731596&show_text=true&width=590",
      height: 626
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Picture */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-green-50/30 to-emerald-50/30 dark:from-slate-950 dark:via-green-950/20 dark:to-blue-950/20">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-20 left-20 w-72 h-72 bg-white-500/30 dark:bg-white-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-white-500/30 dark:bg-white-500/20 rounded-full blur-3xl"
          />
        </div>

        {/* Hero Content with Picture */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-8">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left Column - Profile Picture */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, x: -30 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="relative mx-auto w-64 h-64 lg:w-80 lg:h-80">
                {/* Gradient Border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 p-1"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 blur-sm" />
                </motion.div>
                
                {/* Profile Image */}
                <div className="absolute inset-2 rounded-full overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl">
                  <img
                    src={personal.picture || "https://lh3.googleusercontent.com/d/1MJquqxwDpExEU6wQ7i6jw_lAoAyFfQXT"}
                    alt={personal.altText || personal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20"
                />
              </div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 space-y-3"
              >
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-500 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400">
                    <Mail size={18} />
                  </div>
                  <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 truncate">
                    {personal.email}
                  </span>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <MapPin size={18} />
                  </div>
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    {personal.location}
                  </span>
                </div>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <Linkedin size={18} />
                  </div>
                  <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    LinkedIn Profile
                  </span>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-lg">
                  <Sparkles size={16} className="text-teal-600" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Available for Opportunities
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
              >
                <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
                  {personal.name}
                </span>
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl sm:text-2xl text-slate-700 dark:text-slate-300 mb-6"
              >
                {personal.title}
              </motion.p>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-slate-600 dark:text-slate-400 mb-8"
              >
                {/* {personal.tagline} */} {/* enable this line if you want to show tagline */}

                
              </motion.p>

              {/* Professional Summary */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-6 border-t border-slate-200 dark:border-slate-700"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  Professional Summary
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  {personal.about}
                </p>

                {/* Button Container */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="button-container mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                

                  <a
                    href="https://drive.google.com/uc?export=download&id=1cAgEUc-jwB7hwAThK9kycmDs-FN-NLsA"
                    className="modern-btn cv-btn flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br from-blue-500 to-sky-600 text-white hover:from-blue-600 hover:to-sky-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl border border-blue-600/20"
                  >
                    <FileText size={24} className="mb-2" />
                    <span className="text-sm font-medium">My CV</span>
                  </a>

                  <a
                    href="https://drive.google.com/drive/folders/1OoxagPvdYYWiEzB-oqVLkHUavmO91q7J?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modern-btn cert-btn flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 text-white hover:from-purple-600 hover:to-violet-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl border border-purple-600/20"
                  >
                    <Award size={24} className="mb-2" />
                    <span className="text-sm font-medium">Certifications</span>
                  </a>

                  
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Rest of the Home Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left Column - Education & Contact */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Education Card */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-800 dark:to-slate-900 border border-teal-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-white dark:bg-slate-800 text-teal-600">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    Education
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Academic Background
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="font-semibold text-lg text-slate-900 dark:text-slate-100">
                  {portfolioData.education.degree}
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  {portfolioData.education.institution}
                </p>
                <p className="text-sm text-teal-600 dark:text-teal-400 font-medium">
                  {portfolioData.education.period}
                </p>
              </div>
            </motion.div>

            {/* Contact Links */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400">
                  <User size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Connect With Me
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 transition-colors group text-center"
                >
                  <Mail size={20} className="mx-auto mb-2 text-teal-600 dark:text-teal-400" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                    Email
                  </span>
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group text-center"
                >
                  <Linkedin size={20} className="mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    LinkedIn
                  </span>
                </a>
                <a
                  href={personal.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors group text-center"
                >
                  <Globe size={20} className="mx-auto mb-2 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                    Portfolio
                  </span>
                </a>
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                  <MapPin size={20} className="mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {personal.location.split(',')[0]}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Core Competencies */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white">
                <Award size={24} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                  Core Competencies
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Technical expertise across multiple domains
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {portfolioData.coreCompetencies.map((competency, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-900 dark:text-slate-100">
                      {competency.name}
                    </span>
                    <span className="text-sm font-bold text-teal-600 dark:text-teal-400">
                      {competency.percentage}%
                    </span>
                  </div>
                  <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${competency.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Highlights Section with Facebook Embeds */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-sky-600 text-white">
                <Mic size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                Speaking Engagements
              </h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Sharing knowledge and expertise with educational institutions through interactive sessions and workshops
            </p>
          </motion.div>
          
          {/* Facebook Embeds for Highlights */}
          <div className="space-y-12">
            {portfolioData.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Facebook Embed - Position alternates */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                >
                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                    <iframe
                      src={facebookEmbeds[index].url}
                      width="100%"
                      height={facebookEmbeds[index].height}
                      style={{ border: 'none', overflow: 'hidden' }}
                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen={true}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      title={`Facebook post - ${highlight.title}`}
                      className="w-full"
                    />
                  </div>
                </motion.div>

                {/* Highlight Description */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                >
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30">
                        <Mic size={24} className="text-violet-600 dark:text-violet-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                        {highlight.title}
                      </h3>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      {highlight.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500">
                      <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
                        Public Speaking
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
                        Knowledge Sharing
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
                        Education
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

         
            
        </motion.div>
      </div>
    </div>
  );
};