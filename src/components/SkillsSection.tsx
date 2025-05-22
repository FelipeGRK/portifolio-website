// src/components/SkillsSection.tsx
import React from 'react'

export interface Skill {
  id: string
  name: string
  imageUrl: string
  link?: string
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming & Frameworks',
    skills: [
      { id: 'python', name: 'Python', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { id: 'javascript', name: 'JavaScript', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { id: 'php', name: 'PHP', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { id: 'csharp', name: 'C#', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
      { id: 'nodejs', name: 'Node.js', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { id: 'rest', name: 'REST API', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/openapiinitiative.svg' },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { id: 'html5', name: 'HTML5', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { id: 'css3', name: 'CSS3', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { id: 'ajax', name: 'AJAX', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
      { id: 'responsive', name: 'Responsive UI', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    ],
  },
  {
    title: 'Database & Data',
    skills: [
      { id: 'mysql', name: 'MySQL', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { id: 'phpmyadmin', name: 'phpMyAdmin', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/phpmyadmin.svg' },
      { id: 'sqlworkbench', name: 'MySQL Workbench', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    title: 'AI & Automation',
    skills: [
      { id: 'openai', name: 'OpenAI API', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/openai.svg' },
      { id: 'AIchatbot', name: 'Chatbot Dev', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
      { id: 'prompt', name: 'Prompt Engeering', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { id: 'google-cse', name: 'APi-Google CSE-Search Engine',imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg'},

    ],
  },
  {
    title: 'DevOps & Hosting',
    skills: [
      { id: 'git', name: 'Git & GitHub', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { id: 'cpanel', name: 'cPanel', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cpanel.svg' },
      { id: 'docker', name: 'Docker', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    ],
  },
  {
    title: 'Cybersecurity',
    skills: [
      { id: 'securedev', name: 'Secure Web Dev.', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/owasp.svg' },
      { id: 'access', name: 'Access Control', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    ],
  },
  {
    title: 'Additional Tools',
    skills: [
      { id: 'excel', name: 'Microsoft Office', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftoffice.svg' },
      { id: 'vba', name: 'VBA', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/visualbasic.svg' },
      { id: 'vm', name: 'Virtual Machines', imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/virtualbox.svg' },
    ],
  },
]
const SkillsSection: React.FC = () => (
  <section id="skills" className="py-20 px-4 bg-gray-900 text-gray-200">
    <div className="max-w-5xl mx-auto space-y-12 text-white">
      <h2 className="text-4xl font-bold text-center">Skills</h2>
      {SKILL_CATEGORIES.map(cat => (
        <div key={cat.title} className="space-y-4">
          <h3 className="text-2xl font-medium text-center">
            {cat.title}
            <span className="block h-1 w-20 mx-auto mt-1 bg-purple-600"></span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {cat.skills.map(skill => (
              <div
                key={skill.id}
                onClick={() => skill.link && window.open(skill.link, '_blank')}
                className="
                  bg-white rounded-xl 
                  p-3                
                  flex flex-col items-center space-y-1 
                  w-24               
                  border-2 border-transparent 
                  hover:border-purple-700 hover:shadow-lg 
                  transition-all duration-200 cursor-pointer
                "
              >
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="h-10 w-10 object-contain"
                />
                <p className="text-xs text-gray-800">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
)


export default SkillsSection
