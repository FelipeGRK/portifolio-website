// src/components/About.jsx
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function About() {
  const ref      = useRef(null);
  const inView   = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    },
  });

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-900 text-gray-200">
      {/* Intro heading */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeIn(0)}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <p className="text-sm uppercase text-purple-400 mb-2">Introduction</p>
        <h2 className="text-4xl font-bold">About me</h2>
      </motion.div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Profile + buttons */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeIn(0.2)}
          className="flex-shrink-0 flex flex-col items-center space-y-6"
        >
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
            <img
              src="/assets/profile.jpg"
              alt="Felipe Siqueira"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener"
              className="px-6 py-3 bg-red-600 hover:bg-purple-700 rounded-md text-white font-medium transition"
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/felipe-siqueira-0bbb6a169/"
              target="_blank"
              rel="noopener"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/FelipeGRK"
              target="_blank"
              rel="noopener"
              className="px-6 py-3 bg-purple-600 hover:bg-gray-700 rounded-md text-white font-medium transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Personalized bullet points */}
        <motion.ul
          initial="hidden"
          animate={controls}
          variants={fadeIn(0.4)}
          className="space-y-6 text-lg flex-1 list-none"
        >
          <li className="flex items-start">
            <span className="mr-4 text-2xl">🎮</span>
             Passionate about bridging esports and education—created Esports College Finder to help high-schoolers discover competitive gaming scholarships.
          </li>
          <li className="flex items-start">
            <span className="mr-4 text-2xl">🎓</span>
            Pursuing a BSc in Information Technology (minor Software Engineering) at Fisher College—Dean’s List Fall 2024. Expected Graduation May 2026
          </li>
          <li className="flex items-start">
            <span className="mr-4 text-2xl">🚀</span>
             Goal : secure a Software Engineer internship in 2025 to gain hands-on experience,contribute to innovative projects and and learn from experienced IT professionals.
          </li>
          <li className="flex items-start">
            <span className="mr-4 text-2xl">🤖</span>
            Integrated an AI-powered chatbot (GPT API) to deliver personalized, real-time college recommendations.
          </li>
        </motion.ul>
      </div>
    </section>
  );
}
