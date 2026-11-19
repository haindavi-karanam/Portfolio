import { motion } from 'framer-motion'
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react'
import Container from '@/components/common/Container'
import SectionHeader from '@/components/common/SectionHeader'
import Button from '@/components/common/Button'
import { GithubIcon, LinkedinIcon } from '@/components/common/Icons'
import { personalInfo } from '@/data/personal'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import { fadeUp, staggerContainer } from '@/utils/animations'

export default function Contact() {
  const { copied, copy } = useCopyToClipboard(2500)

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-border-warm/60">
      <Container>
        <SectionHeader
          badge="Get in Touch"
          title="Let's Connect"
          subtitle="Interested in discussing software engineering opportunities, full-stack development, or challenging technical problems? Reach out directly."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="mx-auto max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            className="overflow-hidden rounded-3xl border border-border-warm bg-surface p-8 shadow-2xs sm:p-12"
          >
            <div className="text-center space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-subtle px-3.5 py-1.5 text-xs font-semibold text-accent">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Available for New Opportunities
              </span>

              <h3 className="text-2xl font-bold tracking-tight text-charcoal sm:text-3xl">
                Ready to contribute to your team
              </h3>

              <p className="mx-auto max-w-lg text-sm leading-relaxed text-charcoal-muted sm:text-base">
                Whether you have an open full-stack developer role, a question about my projects, or an interesting engineering problem to discuss, my inbox is always open.
              </p>
            </div>

            {/* Email Box with One-Click Copy */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <div className="flex w-full max-w-md items-center justify-between rounded-xl border border-border-warm bg-canvas px-4 py-3 sm:w-auto">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail size={16} className="text-accent shrink-0" />
                  <span className="truncate font-mono text-xs text-charcoal sm:text-sm">
                    {personalInfo.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => copy(personalInfo.email)}
                  className="ml-3 inline-flex items-center gap-1 rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-charcoal-muted shadow-2xs transition-colors hover:text-charcoal cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-accent" />
                      <span className="text-accent font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <Button
                href={`mailto:${personalInfo.email}`}
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
              >
                <span>Send Email</span>
                <ArrowUpRight size={15} />
              </Button>
            </div>

            {/* Social Grid */}
            <div className="mt-10 grid gap-4 border-t border-border-warm/60 pt-8 sm:grid-cols-2">
              {personalInfo.socials.github && (
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-border-warm/80 bg-canvas/60 p-4 transition-all hover:border-accent/40 hover:bg-canvas"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface text-charcoal shadow-2xs">
                      <GithubIcon size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-charcoal">
                        GitHub
                      </p>
                      <p className="text-xs text-charcoal-muted">
                        Explore repositories & code
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-charcoal-light transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </a>
              )}

              {personalInfo.socials.linkedin && (
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-border-warm/80 bg-canvas/60 p-4 transition-all hover:border-accent/40 hover:bg-canvas"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface text-charcoal shadow-2xs">
                      <LinkedinIcon size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-charcoal">
                        LinkedIn
                      </p>
                      <p className="text-xs text-charcoal-muted">
                        Connect professionally
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-charcoal-light transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
