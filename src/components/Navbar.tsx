// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

interface NavLink {
  label: string
  sectionId: string
}

const LINKS: NavLink[] = [
  { label: 'Home',          sectionId: 'hero'          },
  { label: 'About',         sectionId: 'about'         },
  { label: 'Skills',        sectionId: 'skills'        },
  { label: 'Certifications',sectionId: 'certifications'},
  { label: 'Education',     sectionId: 'education'     },
  { label: 'Contact',       sectionId: 'contact'       },
]

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // add shadow after scrolling down
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-gray-900 bg-opacity-80 backdrop-blur-sm
        transition-shadow
        ${scrolled ? 'shadow-lg' : ''}
      `}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        {/* logo / home link */}
        <button
          onClick={() => scrollTo('hero')}
          className="text-2xl font-bold text-white focus:outline-none"
        >
          Felipe's Portifolio
        </button>

        {/* desktop nav */}
        <nav className="hidden md:flex space-x-6">
          {LINKS.map((link) => (
            <button
              key={link.sectionId}
              onClick={() => scrollTo(link.sectionId)}
              className="text-gray-300 hover:text-white transition"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* mobile menu button */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* mobile nav drawer */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-95">
          <ul className="flex flex-col space-y-1 px-4 py-4">
            {LINKS.map((link) => (
              <li key={link.sectionId}>
                <button
                  onClick={() => scrollTo(link.sectionId)}
                  className="w-full text-left text-gray-300 hover:text-white py-2 transition"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
