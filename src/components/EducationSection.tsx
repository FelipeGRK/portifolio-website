
// src/components/Education.tsx
import React from 'react'

/** Month names for display */
export enum Months {
  Jan = 1,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

/** Shape of an education entry */
interface EducationItem {
  institution: string
  degree: string
  logoUrl?: string
  from: string   // "YYYY-MM"
  to?: string    // "YYYY-MM" or omitted for present
  website?: string
}

/** Sample data */
const EDUCATION: EducationItem[] = [
  {
    institution: 'Fisher College, Boston, MA',
    degree:      'B.S. in Information Technology (minor Software Engineering)',
    logoUrl:     '/assets/fisher_college_logo.jpg',
    from:        '2024-09',
    to:          '2026-05',
    website:     'https://fisher.edu',
  },
  {
    institution: 'Cumberland University',
    degree:      'Information Technology',
    logoUrl:     '/assets/cumberland_university_logo.jpg',
    from:        '2023-08',
    to:          '2024-05',
    website:     'https://www.cumberland.edu',
  },
  {
    institution: 'Northeastern Oklahoma A&M College, Miami, OK',
    degree:      'Computer Science',
    logoUrl:     '/assets/neo.jpg',
    from:        '2022-08',
    to:          '2023-05',
    website:     'https://neo.edu',
  },
]

/** Utility to convert "YYYY-MM" → "Mon YYYY" */
const formatDate = (iso: string) => {
  const [year, month] = iso.split('-').map(Number)
  return `${Months[month]} ${year}`
}

const Education: React.FC = () => (
  <section id="education" className="py-20 px-4 bg-gray-800">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-12">Education</h2>
      <h2 className="text-3xl font-bold text-green-400 mb-12">Expected Graduation May 2026</h2>
      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-600"></div>

        <div className="space-y-10">
          {EDUCATION.map((edu, i) => {
            const fromLabel = formatDate(edu.from)
            const toLabel   = edu.to ? formatDate(edu.to) : 'Present'

            return (
              <div key={i} className="flex items-start group">
                {/* date + dot */}
                <div className="flex flex-col items-center">
                  <span className="text-gray-300 text-sm mb-2">{fromLabel}</span>
                  <div className="w-3 h-3 bg-teal-400 rounded-full transition-colors group-hover:bg-green-400"></div>
                </div>

                {/* card */}
                <div className="ml-8 flex-1 bg-gray-700 p-4 rounded-lg shadow-lg border border-transparent transform transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:border-green-400">
                  {edu.logoUrl && (
                    <img
                      src={edu.logoUrl}
                      alt={`${edu.institution} logo`}
                      className="w-20 h-auto object-contain mb-3"
                    />
                  )}
                  <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
                  <p className="text-gray-300 text-sm">{edu.degree}</p>
                  <p className="text-gray-400 text-xs mt-1">
                    {fromLabel} &ndash; {toLabel}
                  </p>
                  {edu.website && (
                    <a
                      href={edu.website}
                      target="_blank"
                      rel="noopener"
                      className="inline-block mt-2 text-green-300 hover:underline text-xs"
                    >
                      Visit website
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </section>
)

export default Education
