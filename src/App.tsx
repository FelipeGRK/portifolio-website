// src/App.tsx
import React from 'react'
import PCModelViewer from './components/PCModelViewer'
import About from './components/About'
import Navbar from './components/Navbar'
import Education from './components/EducationSection'
import SkillsSection from './components/SkillsSection'
import CertificationsSection from './components/certifications'
import './index.css'
import { Github, Linkedin, Mail } from 'lucide-react'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* ——— NAVBAR ——— */}
      <Navbar />

      {/* ——— HERO SECTION WITH 3D MODEL ——— */}
      {/* pt-16 / h-[calc(100vh-4rem)] moves it up under the navbar */}
      <div id="hero" className="pt-16 h-[calc(100vh-4rem)] relative">
        <PCModelViewer />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent to-gray-900">
          <div className="text-center px-4">
            <h1 className="text-6xl font-bold mb-4">
              Hi, I’m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-300">
                Felipe
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              <a href="https://git.io/typing-svg">
                <img
                  src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=25&pause=1000&color=29FF09&width=435&lines=Aspiring+Software+Engineer"
                  alt="Typing SVG"
                />
              </a>
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com/FelipeGRK"
                className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition"
                target="_blank"
                rel="noopener"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/felipe-siqueira-0bbb6a169/"
                className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition"
                target="_blank"
                rel="noopener"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:fcordeirogrochevskisiqueira@fisher.edu"
                className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ——— ABOUT SECTION ——— */}
      {/* scroll-mt-16 ensures it scrolls under the navbar */}
      <div id="about" className="scroll-mt-16">
        <About />
      </div>

      {/* ——— SKILLS SECTION ——— */}
      <div id="skills" className="scroll-mt-16">
        <SkillsSection />
      </div>
            {/* ——— NAVBAR ——— */}
      <CertificationsSection />

      {/* ——— EDUCATION SECTION ——— */}
      <div id="education" className="scroll-mt-16">
        <Education />
      </div>

      {/* ——— FOOTER ——— */}
      <footer className="py-8 px-4 text-center text-gray-400">
        <p>© 2025 Felipe Siqueira. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
