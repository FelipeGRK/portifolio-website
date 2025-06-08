import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  name: string;
  description: string;
  date: string;
  skills: string;
  imageUrl: string;
  link: string;
}

// Sample projects data
const PROJECTS: Project[] = [
  {
    id: 'clutchedu',
    name: 'ClutchEDU',
    description: 'Tinder-style mobile app to discover esports-focused colleges based on location, major, and scholarships.',
    date: 'May 2025 - Present',
    skills: 'Node.js · Geolocation API · JavaScript · Tailwind CSS · Firebase · React.js · GitHub',
    imageUrl: '/assets/projects/clutchedu.png',
    link: 'https://github.com/FelipeGRK/ClutchEDU',
  },
  {
    id: 'portfolio',
    name: 'Portfolio Website',
    description: 'Personal portfolio showcasing 3D models, projects, and skills built with React, TypeScript, and Three.js.',
    date: 'May 2025',
    skills: 'Git · TypeScript · Tailwind CSS · Three.js · Vite · PostCSS',
    imageUrl: '/assets/projects/portfolio.png',
    link: 'https://portifolio-website-omega.vercel.app/',
  },
  {
    id: 'esportsfinder',
    name: 'Esports College Finder',
    description: "Full-stack platform to help high school students discover esports programs, with AI chatbot integration.",
    date: 'Jan 2025 - Apr 2025',
    skills: 'HTML · CSS · JavaScript · PHP · MySQL · GPT API · Prompt Engineering · cPanel',
    imageUrl: '/assets/projects/esportsfinder.png',
    link: 'https://esportsfinderusa.com',
  },
  {
    id: 'genai-podcast',
    name: 'GenAI Podcast Summarization',
    description: 'AI tool that scrapes and summarizes podcast transcripts with semantic search and recommendations.',
    date: 'Feb 2025 - Apr 2025',
    skills: 'Python · NLP · Hugging Face · FAISS · Docker · CI/CD',
    imageUrl: '/assets/projects/genai-podcast.png',
    link: 'https://github.com/FelipeGRK/theamericanlifepodcast',
  },
  {
    id: 'iron-forge',
    name: 'Iron Forge Gym Website',
    description: 'Responsive, modern website for a gym with video hero, testimonials, and embedded Google Map.',
    date: 'Mar 2025 - Apr 2025',
    skills: 'HTML · CSS · JavaScript · Responsive Design · UI/UX · Git',
    imageUrl: '/assets/projects/iron-forge.png',
    link: 'https://github.com/FelipeGRK/iron-forge-gym',
  },
];

// Animation variants
const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-purple-900/20 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div key={project.id} variants={fadeIn(index * 0.3)} initial="hidden" animate="visible">
              <Tilt glareEnable glareColor="#805AD5" glareMaxOpacity={0.2} tiltMaxAngleX={20} tiltMaxAngleY={20}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-[300px] rounded-2xl border-2 border-purple-500 p-4 bg-gray-800 hover:border-green-400 transition-all duration-300">
                    <img src={project.imageUrl} alt={project.name} className="h-40 w-full object-cover rounded-md mb-4" />
                    <h3 className="text-2xl font-semibold mb-1">{project.name}</h3>
                    <p className="text-sm text-gray-300 mb-2">{project.date}</p>
                    <p className="text-gray-200 mb-3">{project.description}</p>
                    <p className="text-xs text-gray-400">Skills: {project.skills}</p>
                  </div>
                </a>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
