import { ArrowUp, Mail } from 'lucide-react'
import Container from '@/components/common/Container'
import { personalInfo } from '@/data/personal'
import { GithubIcon, LinkedinIcon } from '@/components/common/Icons'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-border-warm/70 bg-surface/50 py-12">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <p className="text-sm font-semibold tracking-tight text-charcoal">
              {personalInfo.name}
            </p>
          </div>
          <p className="mt-1 text-xs text-charcoal-muted">
            {personalInfo.title} • {personalInfo.focus}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {personalInfo.socials.github && (
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="rounded-lg p-2 text-charcoal-muted transition-colors hover:bg-surface hover:text-charcoal"
            >
              <GithubIcon size={17} />
            </a>
          )}
          {personalInfo.socials.linkedin && (
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="rounded-lg p-2 text-charcoal-muted transition-colors hover:bg-surface hover:text-charcoal"
            >
              <LinkedinIcon size={17} />
            </a>
          )}
          {personalInfo.email && (
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="rounded-lg p-2 text-charcoal-muted transition-colors hover:bg-surface hover:text-charcoal"
            >
              <Mail size={17} />
            </a>
          )}
        </div>

        {/* Back to top & copyright */}
        <div className="flex items-center gap-5 text-xs text-charcoal-light">
          <span>© {currentYear} Haindavi Karanam</span>
          <a
            href="#hero"
            aria-label="Back to top"
            className="inline-flex items-center gap-1 text-charcoal-muted transition-colors hover:text-accent"
          >
            <span>Top</span>
            <ArrowUp size={12} />
          </a>
        </div>
      </Container>
    </footer>
  )
}

