import { motion } from 'framer-motion'
import { ArrowDown, Mail, FileText } from 'lucide-react'
import Container from '@/components/common/Container'
import Button from '@/components/common/Button'
import { GithubIcon, LinkedinIcon } from '@/components/common/Icons'
import { personalInfo } from '@/data/personal'
import { fadeUp, staggerContainer } from '@/utils/animations'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      {/* Subtle decorative background gradient */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -z-10 h-96 w-full -translate-x-1/2 max-w-6xl opacity-35 blur-3xl"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, rgba(232, 138, 53, 0.12) 0%, rgba(250, 250, 248, 0) 70%)',
        }}
      />

      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          {/* Status Chip */}
          <motion.div variants={fadeUp} className="mb-6 inline-flex">
            <div className="inline-flex items-center gap-2 rounded-full border border-border-warm bg-surface px-3.5 py-1.5 text-xs text-charcoal shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-medium text-charcoal-muted">
                {personalInfo.status}
              </span>
            </div>
          </motion.div>

          {/* Heading / Identity */}
          <motion.div variants={fadeUp} className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{' '}
              <span className="text-charcoal">{personalInfo.name}</span>
            </h1>
            <p className="text-xl font-medium tracking-tight text-charcoal sm:text-2xl">
              Software Developer{' '}
              <span className="font-normal text-charcoal-muted">|</span>{' '}
              <span className="text-accent">{personalInfo.focus}</span>
            </p>
          </motion.div>

          {/* Elevator Statement */}
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal-muted sm:text-lg"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <Button href="#projects" variant="primary" size="lg">
              <span>View Projects</span>
              <ArrowDown size={16} />
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Get in Touch
            </Button>
            <Button
              href={personalInfo.resumeUrl}
              variant="ghost"
              size="lg"
              className="border border-border-warm/60 bg-surface/60"
            >
              <FileText size={16} className="text-accent" />
              <span>Resume</span>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-center gap-3 pt-4 border-t border-border-warm/60"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-charcoal-light">
              Connect:
            </span>
            <div className="flex items-center gap-1.5">
              {personalInfo.socials.github && (
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-charcoal-muted transition-colors hover:bg-surface hover:text-charcoal"
                >
                  <GithubIcon size={15} />
                  <span>GitHub</span>
                </a>
              )}
              {personalInfo.socials.linkedin && (
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-charcoal-muted transition-colors hover:bg-surface hover:text-charcoal"
                >
                  <LinkedinIcon size={15} />
                  <span>LinkedIn</span>
                </a>
              )}
              {personalInfo.email && (
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-charcoal-muted transition-colors hover:bg-surface hover:text-charcoal"
                >
                  <Mail size={15} />
                  <span>Email</span>
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
