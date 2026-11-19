import { motion } from 'framer-motion'
import { Layers, Brain, CheckCircle2, GraduationCap, Award } from 'lucide-react'
import Container from '@/components/common/Container'
import SectionHeader from '@/components/common/SectionHeader'
import { fadeUp, staggerContainer } from '@/utils/animations'

export default function About() {
  const pillars = [
    {
      icon: Layers,
      title: 'Full-Stack Architecture',
      description:
        'Building cohesive systems that bridge responsive, accessible React interfaces with secure, reliable Node.js backends and well-modeled data layers.',
    },
    {
      icon: Brain,
      title: 'Problem-Solving Focus',
      description:
        'Approaching challenges through rigorous algorithmic thinking, data structure analysis, and optimization for both performance and code readability.',
    },
    {
      icon: CheckCircle2,
      title: 'Engineering Craftsmanship',
      description:
        'Prioritizing modular design, secure authentication (JWT), cryptographic verification (HMAC), and maintainable architecture over fragile shortcuts.',
    },
  ]

  return (
    <section id="about" className="py-20 sm:py-28 border-t border-border-warm/60">
      <Container>
        <SectionHeader
          badge="About Me"
          title="Engineering Mindset & Approach"
          subtitle="A disciplined focus on full-stack architecture, clean code, and practical problem solving."
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Narrative Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="space-y-5 text-charcoal-muted leading-relaxed sm:text-base lg:col-span-7"
          >
            <motion.p variants={fadeUp}>
              I am a software developer with a strong foundation in modern full-stack
              engineering and computational problem solving. My approach to software
              development combines practical architecture with analytical rigor,
              ensuring that every project is performant, maintainable, and user-centered.
            </motion.p>
            <motion.p variants={fadeUp}>
              Whether architecting full-stack applications with React and Node.js or
              tackling algorithmic problems with Python and C++, I focus on
              clean patterns, secure authentication (JWT), and modular codebases.
              I enjoy turning complex functional requirements into clear, dependable software solutions.
            </motion.p>
            <motion.p variants={fadeUp}>
              Driven by continuous learning, I maintain a high academic standard (CGPA 9.33,
              recognized with department second-highest honors) while consistently building
              real-world developer projects and exploring emerging technologies.
            </motion.p>

            {/* Academic Snapshot Pills */}
            <motion.div
              variants={fadeUp}
              className="pt-4 grid grid-cols-2 gap-3 sm:grid-cols-2"
            >
              <div className="rounded-xl border border-border-warm bg-surface p-4 shadow-2xs">
                <div className="flex items-center gap-2 text-accent">
                  <GraduationCap size={18} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-light">
                    Academic Standing
                  </span>
                </div>
                <div className="mt-1.5 text-lg font-bold text-charcoal">
                  9.33 CGPA
                </div>
                <p className="mt-0.5 text-xs text-charcoal-muted">
                  Consistent high academic achievement
                </p>
              </div>

              <div className="rounded-xl border border-border-warm bg-surface p-4 shadow-2xs">
                <div className="flex items-center gap-2 text-accent">
                  <Award size={18} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-light">
                    Department Honor
                  </span>
                </div>
                <div className="mt-1.5 text-lg font-bold text-charcoal">
                  2nd Highest CGPA
                </div>
                <p className="mt-0.5 text-xs text-charcoal-muted">
                  Academic cohort recognition (2025–26)
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Pillars Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="space-y-4 lg:col-span-5"
          >
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.title}
                  variants={fadeUp}
                  className="group rounded-2xl border border-border-warm bg-surface p-6 shadow-2xs transition-all duration-300 hover:border-accent/40 hover:shadow-xs"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-subtle text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-charcoal">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-charcoal-muted">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

