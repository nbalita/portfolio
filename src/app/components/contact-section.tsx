import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Linkedin, Globe, Send, CheckCircle, AlertCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Your Formspree endpoint
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mykklekl";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Prepare form data for Formspree
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("_replyto", formData.email); // Reply-to email
      formDataToSend.append("_subject", `Portfolio Contact: ${formData.subject}`);

      // Send to Formspree
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", subject: "", message: "" });
        }, 5000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }
    } catch (err) {
      console.error("Error sending email:", err);
      setError("Failed to send message. Please try again or email me directly.");
      
      // Fallback to mailto as backup
      fallbackToMailto();
    } finally {
      setIsSubmitting(false);
    }
  };

  const fallbackToMailto = () => {
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent from your portfolio website`
    );
    window.open(`mailto:noelb.itprofessional@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError(null);
  };

  return (
    <div className="min-h-screen py-20" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-sky-600 text-white">
              <Mail size={28} />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-700 dark:text-slate-100 mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Let's Work Together - I'm currently available for freelance work, full-time positions or work abroad.
          </p>
          
        
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Contact Information
              </h2>

              <div className="space-y-4">
                {/* Email */}
                <motion.a
                  href={`mailto:${portfolioData.personal.email}`}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>

           <div>
  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
    Direct Email
  </h3>
  <p className="text-slate-600 dark:text-slate-400 break-all">
    <a
      href={`mailto:noelb.itprofessional@gmail.com`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 dark:text-blue-400 hover:underline"
    >
      noelb.itprofessional@gmail.com
    </a>
  </p>
  <p className="text-xs mt-1">
    Click to email directly
  </p>
</div>



                </motion.a>

                {/* Location */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                >
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                      Location
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {portfolioData.personal.location}
                    </p>
                  </div>
                </motion.div>

                {/* LinkedIn */}
                <motion.a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                      LinkedIn
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 break-all">
                      Connect with me
                    </p>
                  </div>
                </motion.a>

                {/* Website */}
                <motion.a
                  href={portfolioData.personal.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                      Portfolio
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 break-all">
                      View my work
                    </p>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Send Message
                </h2>
              
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="mb-4"
                  >
                    <CheckCircle size={64} className="text-emerald-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    Message Sent Successfully! ✓
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-2">
                    Your message has been forwarded to my email.
                  </p>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                    Delivered to: noelb.itprofessional@gmail.com
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-4">
                    You should receive a copy of this message in your email too.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800"
                    >
                      <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <span className="font-medium">{error}</span>
                        <button
                          type="button"
                          onClick={fallbackToMailto}
                          className="mt-2 text-sm underline hover:no-underline"
                        >
                          Click here to email directly instead
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2"
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Project inquiry, collaboration, job opportunity..."
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="space-y-3">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`w-full py-4 rounded-lg text-white font-semibold shadow-lg transition-all flex items-center justify-center gap-3 ${
                        isSubmitting 
                          ? "bg-gradient-to-r from-blue-400 to-blue-400 cursor-not-allowed" 
                          : "bg-gradient-to-r from-blue-600 to-teal-600 hover:shadow-xl"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending to your inbox...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    <div className="text-center space-y-2">
                    
                      <button
                        type="button"
                        onClick={fallbackToMailto}
                        className="text-sm text-blue-600 dark:text-blue-400 hover:text-teal-700 dark:hover:text-teal-300 underline hover:no-underline transition-colors flex items-center justify-center gap-1 mx-auto"
                      >
                        <Mail size={14} />
                        Or click here to email directly
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};