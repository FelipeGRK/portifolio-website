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
{/* Intro heading + profile/top-skills card — full width, above everything */}
<IntroCards />

{/* ——— 3D MODEL BACKDROP WITH TEXT OVERLAID ——— */}
<div id="about" className="relative h-auto lg:h-[720px] scroll-mt-16 py-12 lg:py-0">
{/* 3D model fills the whole block on desktop */}
<div className="hidden lg:block absolute inset-0">
<PCModelViewer />
</div>
{/* Dark gradient so overlaid text stays readable against the model */}
<div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-gray-900/10 pointer-events-none" />
<div className="hidden lg:block absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-gray-900 pointer-events-none" />

<div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col lg:flex-row lg:items-center gap-10 lg:h-full">
{/* About text — overlaid on the left of the model on desktop */}
<div className="lg:w-1/2">
<About />
</div>

{/* Mobile-only 3D model (stacked, not overlapping text) */}
<div className="lg:hidden relative h-[50vh] rounded-2xl overflow-hidden">
<PCModelViewer />
</div>

{/* Hi, I'm Felipe + intro — right side, over the model on desktop */}
<div className="lg:w-1/2 flex flex-col items-center text-center">
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
