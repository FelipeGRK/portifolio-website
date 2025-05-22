// src/components/CertificationsCarousel.tsx
import React, { useState, useRef, useEffect } from 'react'

interface Certification {
  id: string
  name: string
  issuer: string
  year: string
  logoUrl: string
  certUrl: string
  topics: string[]
}

const CERTIFICATIONS: Certification[] = [
  {
    id: 'meta-js',
    name: 'Programming with JavaScript',
    issuer: 'Meta',
    year: '2025',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
    certUrl: '/assets/skills/meta_javascript.png',
    topics: [
      'Core JavaScript fundamentals (ES6+, control flow, functions)',
      'Data structures & manipulation with objects & arrays',
      'Event-driven & asynchronous programming',
      'Unit testing with Jest for reliable code',
      'Node.js scripting & npm package management',
    ],
  },
    {
    id: 'google-python',
    name: 'Crash Course on Python',
    issuer: 'Google',
    year: '2023',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    certUrl: '/assets/skills/google_felipe.png',
    topics: [
      'Grasping Python’s relevance for automation & real-world tasks',
      'Writing concise scripts to automate repetitive workflows',
      'Working with core data structures: strings, lists & dictionaries',
      'Defining and using custom Python objects',
      'Navigating development environments and debugging effectively',
    ],
  },
    {
    id: 'ibm-sql-python',
    name: 'Databases & SQL for Data Science',
    issuer: 'IBM',
    year: '2024',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    certUrl: '/assets/skills/ibm_Database.png',
    topics: [
      'Relational schema design & DDL fundamentals',
      'CRUD operations & complex SQL querying',
      'Aggregations, grouping & built-in functions',
      'Views, stored procedures & ACID transactions',
      'SQL-Python integration with Pandas in Jupyter',
    ],
  },
  {
    id: 'meta-html-css',
    name: 'HTML & CSS in Depth',
    issuer: 'Meta',
    year: '2025',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
    certUrl: '/assets/skills/html_css_meta.png',
    topics: [
      'Semantic HTML5 markup & accessibility best practices',
      'Responsive layouts with CSS Flexbox & Grid',
      'Rapid UI assembly using Bootstrap components',
      'Cross-browser testing & DevTools debugging',
      'Modern front-end workflows & project structure',
    ],
  },
  {
    id: 'umich-html5',
    name: 'Introduction to HTML5',
    issuer: 'University of Michigan',
    year: '2024',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/University_of_Michigan_logo.svg',
    certUrl: '/assets/skills/html_certificate.png',
    topics: [
      'Crafting semantic HTML5 tags for clear structure',
      'Embedding images & hyperlinks to build interactive pages',
      'Basic CSS styling & layout techniques',
      'WCAG accessibility & semantic web principles',
      'Deploying static sites & cloud hosting basics',
    ],
  },
]

const CertificationsCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0)
  const length = CERTIFICATIONS.length
  const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Auto-advance every 5s
  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % length)
    }, 6500)
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current)
    }
  }, [length])

  const prevSlide = () =>
    setCurrent(prev => (prev - 1 + length) % length)
  const nextSlide = () =>
    setCurrent(prev => (prev + 1) % length)

  return (
    <section
      id="certifications"
      className="py-20 px-4 bg-gray-900 text-gray-200"
    >
      <div className="max-w-5xl mx-auto relative overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-8">
          Certifications
        </h2>

        {/* Left / Right arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl text-purple-400 hover:text-white z-10"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-3xl text-purple-400 hover:text-white z-10"
        >
          ›
        </button>

        {/* Slides wrapper */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {CERTIFICATIONS.map(cert => (
            <div
              key={cert.id}
              className="min-w-full flex-shrink-0 bg-gray-800 bg-opacity-50 rounded-2xl p-6 mx-2"
            >
              <img
                src={cert.logoUrl}
                alt={`${cert.issuer} logo`}
                className="h-16 mb-4 object-contain mx-auto"
              />

              <h3 className="text-2xl font-semibold text-center mb-2">
                {cert.name}
              </h3>
              <p className="text-gray-300 text-center">{cert.issuer}</p>
              <p className="text-gray-400 text-xs text-center mb-4">
                {cert.year}
              </p>

              {/* topics list — no scrollbar */}
              <ul className="list-disc list-inside text-sm mb-6 space-y-1 overflow-visible">
                {cert.topics.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>

              <div className="text-center">
                <a
                  href={cert.certUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors font-medium"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificationsCarousel
