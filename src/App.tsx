// src/App.tsx
import React from 'react'
import Navbar from './components/Navbar'
import PCModelViewer from './components/PCModelViewer'
import IntroCards from './components/IntroCards'
import About from './components/About'
import SkillsSection from './components/SkillsSection'
import CertificationsSection from './components/certifications'
import ProjectsSection from './components/projects'
import Education from './components/EducationSection'
import './index.css'
import { Github, Linkedin, Mail } from 'lucide-react'

const App: React.FC = () => (
<div className="min-h-screen bg-gray-900 text-white">
{/* ——— NAVBAR ——— */}
<Navbar />

{/* ——— HERO + ABOUT ——— */}
<div id="hero" className="pt-16">
{/* Intro heading + profile/top-skills cards — full width, above everything */}
<IntroCards />

<div className="flex flex-col lg:flex-row">
{/* ——— ABOUT TEXT COLUMN ——— */}
<div id="about" className="lg:w-1/2 scroll-mt-16">
<About />
</div>

{/* ——— 3D MODEL + INTRO COLUMN ——— */}
<div className="lg:w-1/2 relative h-[60vh] lg:h-auto lg:min-h-[calc(100vh-4rem)]">
<PCModelViewer />
<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent to-gray-900">
<div className="text-center px-4">
<h1 className="text-4xl lg:text-6xl font-bold mb-4">
Hi, I’m{' '}
<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-300">
Felipe
</span>
</h1>
<p className="text-lg lg:text-xl text-gray-300 mb-8">
<a href="https://git.io/typing-svg">
<img
src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=25&pause=1000&color=29FF09&width=560&lines=IT+Support+%7C+Help+Desk+Technician"
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
</div>
</div>

{/* ——— PROJECTS SECTION ——— */}
<div id="projects" className="scroll-mt-16">
<ProjectsSection />
</div>
{/* ——— SKILLS SECTION ——— */}
<div id="skills" className="scroll-mt-16">
<SkillsSection />
</div>

{/* ——— CERTIFICATIONS SECTION ——— */}
<div id="certifications" className="scroll-mt-16">
<CertificationsSection />
</div>

{/* ——— EDUCATION SECTION ——— */}
<div id="education" className="scroll-mt-16">
<Education />
</div>

{/* ——— FOOTER ——— */}
<footer className="py-8 px-4 text-center text-gray-400">
© 2025 Felipe Siqueira. All rights reserved.
</footer>
</div>
)

export default App
