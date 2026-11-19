import { motion } from 'framer-motion'
import { CheckCircle2, Clock, Sparkles } from 'lucide-react'
import Container from '@/components/common/Container'
import SectionHeader from '@/components/common/SectionHeader'
import Badge from '@/components/common/Badge'
import Button from '@/components/common/Button'
import { GithubIcon } from '@/components/common/Icons'
import { projects } from '@/data/projects'
import { fadeUp, staggerContainer } from '@/utils/animations'

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-border-warm/60">
      <Container>
        <SectionHeader
          badge="Featured Work"
          title="Engineered Projects"
          subtitle="Real-world full-stack applications showcasing end-to-end architecture, secure authentication, and asynchronous data processing."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="space-y-8"
        >
          {projects.map((project) => {
            const isInProgress = project.status.toLowerCase().includes('progress')

            return (
              <motion.div
                key={project.id}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-border-warm bg-surface p-6 shadow-2xs transition-all duration-300 hover:border-accent/40 hover:shadow-xs sm:p-8 lg:p-10"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  {/* Left Column: Details */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-bold tracking-tight text-charcoal sm:text-3xl">
                        {project.title}
                      </h3>
                      <Badge
                        variant={isInProgress ? 'warning' : 'accent'}
                        className="text-xs"
                      >
                        {isInProgress ? (
                          <Clock size={12} className="mr-1" />
                        ) : (
                          <Sparkles size={12} className="mr-1" />
                        )}
                        <span>{project.status}</span>
                      </Badge>
                    </div>

                    <p className="text-sm font-medium text-accent sm:text-base">
                      {project.tagline}
                    </p>

                    <p className="max-w-3xl text-sm leading-relaxed text-charcoal-muted sm:text-base">
                      {project.description}
                    </p>

                    {/* Architectural Highlights */}
                    <div className="pt-2">
                      <h4 className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-charcoal-light">
                        Key Features & Architecture
                      </h4>
                      <ul className="grid gap-2.5 sm:grid-cols-2">
                        {project.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs leading-relaxed text-charcoal-muted sm:text-sm"
                          >
                            <CheckCircle2
                              size={15}
                              className="mt-0.5 shrink-0 text-accent"
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="pt-3">
                      <div className="flex flex-wrap items-center gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-border-warm/70 bg-surface-subtle px-2.5 py-1 text-xs font-mono font-medium text-charcoal-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Actions */}
                  <div className="flex shrink-0 flex-row items-center gap-3 pt-2 lg:flex-col lg:items-end lg:pt-0">
                    {project.links.github && (
                      <Button
                        href={project.links.github}
                        variant="outline"
                        size="sm"
                        className="w-full justify-center sm:w-auto"
                      >
                        <GithubIcon size={14} />
                        <span>Source Code</span>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
