// src/App.tsx
import React from 'react';
import PCModelViewer from './components/PCModelViewer';
import About          from './components/About';
import { Github, Linkedin, Mail } from 'lucide-react';
const App: React.FC = () => {
  return (
    
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section with 3D Model */}
      <div className="h-screen relative">
        <PCModelViewer />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent to-gray-900">
          <div className="text-center px-4">
            <h1 className="text-6xl font-bold mb-4">
              Hi, I'm{' '}
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
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/felipe-siqueira-0bbb6a169/"
                className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition"
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

      {/* ——— ABOUT SECTION (from About.tsx) ——— */}
      <About />

{/* Education Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Education</h2>
          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-24 h-24 bg-gray-700 rounded-lg flex items-center justify-center">
                <img src="/assets/fisher_college_logo.jpg" alt="Fisher College" className="w-20 h-20 object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Fisher College, Boston, MA</h3>
                <p className="text-purple-400 mb-2">Bachelor of Science in Information Technology</p>
                <p className="text-gray-400">Dean's list, Fall 2024 (GPA 3.9)</p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-24 h-24 bg-gray-700 rounded-lg flex items-center justify-center">
                <img src="/assets/cumberland_university_logo.jpg" alt="Cumberland University" className="w-20 h-20 object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Cumberland University</h3>
                <p className="text-purple-400">Information Technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Programming</h3>
              <p className="text-gray-300">Python, JavaScript, SQL, C#</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Web Development</h3>
              <p className="text-gray-300">HTML, CSS, JavaScript, AJAX</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">AI & Automation</h3>
              <p className="text-gray-300">GPT API, Chatbot Development, Prompt Engineering</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="h-12 mb-4" />
              <h3 className="font-bold mb-2">Meta</h3>
              <p className="text-gray-400">Programming with JavaScript (2025)</p>
              <p className="text-gray-400">HTML and CSS in Depth (2025)</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" className="h-12 mb-4" />
              <h3 className="font-bold mb-2">IBM</h3>
              <p className="text-gray-400">Databases and SQL for Data Science with Python (2024)</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-12 mb-4" />
              <h3 className="font-bold mb-2">Google</h3>
              <p className="text-gray-400">Crash Course on Python (2023)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-400">
        <p>© 2025 Felipe Siqueira. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
