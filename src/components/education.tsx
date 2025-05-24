
// src/components/JobCard.tsx
import React from 'react'

/** ——— Constants inlined ——— */
export const THEME = { LIGHT: 'light', DARK: 'dark' } as const
export type Theme = typeof THEME[keyof typeof THEME]

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

export const SKILLSET = {
  LANGUAGES: 'languages',
  FRONTEND: 'frontend',
  UI_LIBRARIES: 'uilibraries',
  BACKEND: 'backend',
  DATABASE: 'database',
  HEADLESS_CMS: 'headless cms',
  TESTING: 'testing',
  TOOLS: 'tools',
} as const

export const TechStack = {
  All: 'All',
  React: 'React',
  NextJs: 'NextJs',
  JavaScript: 'JavaScript',
  TypeScript: 'TypeScript',
  Php: 'PHP',
  Cpp: 'C++',
} as const

export const SECTION = {
  ABOUT: 'about',
  JOBS: 'jobs',
  PROJECTS: 'projects',
  SKILLS: 'skills',
  CONTACT: 'contact',
} as const

/** ——— Job/Education card ——— */
export interface IJob {
  company: string
  designation: string
  logo?: { url: string }
  from: string       // "YYYY-MM"
  to?: string        // "YYYY-MM" or omitted
  companyLinkedin?: string
  companyUrl?: string
}

interface JobCardProps {
  job: IJob
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const [fromYear, fromMonth] = job.from.split('-')
  const fromLabel = `${Months[Number(fromMonth)]} ${fromYear}`

  const toLabel = job.to
    ? (() => {
        const [toYear, toMonth] = job.to!.split('-')
        return `${Months[Number(toMonth)]} ${toYear}`
      })()
    : 'Present'

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6">
      {job.logo?.url && (
        <img
          src={job.logo.url}
          alt={`${job.company} logo`}
          className="w-24 h-auto object-contain flex-shrink-0"
        />
      )}
      <div className="flex-1 space-y-1">
        <h2 className="text-2xl font-semibold">{job.company}</h2>
        <h3 className="text-lg text-gray-300">{job.designation}</h3>
        <p className="text-sm text-gray-400">
          {fromLabel} – {toLabel}
        </p>
        <div className="flex space-x-4 mt-2">
          {job.companyLinkedin && (
            <button
              onClick={() => window.open(job.companyLinkedin, '_blank')}
              className="text-gray-400 hover:text-white transition"
            >
              <img
                src="/assets/linkedin.webp"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </button>
          )}
          {job.companyUrl && (
            <button
              onClick={() => window.open(job.companyUrl, '_blank')}
              className="text-gray-400 hover:text-white transition"
            >
              <img
                src="/assets/www.webp"
                alt="Website"
                className="w-6 h-6"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default JobCard
