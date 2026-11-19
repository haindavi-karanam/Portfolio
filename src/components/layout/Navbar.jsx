import { useState, useEffect } from 'react'
import { Menu, X, FileText } from 'lucide-react'
import Container from '@/components/common/Container'
import { personalInfo } from '@/data/personal'
import { useActiveSection } from '@/hooks/useActiveSection'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const sectionIds = ['hero', 'about', 'skills', 'projects', 'achievements', 'contact']
  const activeSection = useActiveSection(sectionIds, 100)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-border-warm/80 bg-canvas/90 shadow-2xs backdrop-blur-md'
          : 'border-b border-transparent bg-canvas/60 backdrop-blur-xs'
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 text-base font-semibold tracking-tight text-charcoal transition-colors hover:text-accent"
        >
          <span className="flex h-2 w-2 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" />
          <span className="font-sans">{personalInfo.name}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {personalInfo.navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeSection === id

            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative py-1 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-charcoal'
                    : 'text-charcoal-muted hover:text-charcoal'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-accent" />
                )}
              </a>
            )
          })}

          {/* Resume Link */}
          <a
            href={personalInfo.resumeUrl}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border-warm bg-surface px-3.5 py-1.5 text-xs font-semibold tracking-wide text-charcoal shadow-2xs transition-all duration-200 hover:border-accent hover:text-accent active:translate-y-px"
          >
            <FileText size={13} className="text-accent" />
            <span>Resume</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex rounded-lg p-2 text-charcoal-muted transition-colors hover:bg-surface-subtle hover:text-charcoal md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-border-warm bg-surface/95 px-6 py-5 shadow-lg backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-2.5">
            {personalInfo.navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = activeSection === id

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-accent-subtle font-semibold text-accent'
                      : 'text-charcoal-muted hover:bg-surface-subtle hover:text-charcoal'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
            <div className="pt-2">
              <a
                href={personalInfo.resumeUrl}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg border border-border-warm bg-canvas px-4 py-2.5 text-xs font-semibold text-charcoal transition-all hover:border-accent hover:text-accent"
              >
                <FileText size={14} className="text-accent" />
                <span>Resume</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

