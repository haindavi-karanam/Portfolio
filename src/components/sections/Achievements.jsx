import { motion } from 'framer-motion'
import { Trophy, Award, CheckCircle, GraduationCap } from 'lucide-react'
import Container from '@/components/common/Container'
import SectionHeader from '@/components/common/SectionHeader'
import Badge from '@/components/common/Badge'
import { achievements } from '@/data/achievements'
import { fadeUp, staggerContainer } from '@/utils/animations'

export default function Achievements() {
  const getIcon = (type) => {
    switch (type) {
      case 'academic':
        return GraduationCap
      case 'award':
        return Trophy
      case 'certification':
        return Award
      default:
        return CheckCircle
    }
  }

  return (
    <section id="achievements" className="py-20 sm:py-28 border-t border-border-warm/60">
      <Container>
        <SectionHeader
          badge="Distinctions & Certifications"
          title="Achievements & Honors"
          subtitle="Documented academic distinctions, departmental honors, and professional engineering credentials."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-3"
        >
          {achievements.map((item) => {
            const Icon = getIcon(item.type)

            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="group relative flex flex-col justify-between rounded-2xl border border-border-warm bg-surface p-7 shadow-2xs transition-all duration-300 hover:border-accent/40 hover:shadow-xs"
              >
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-subtle text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <Icon size={22} />
                    </div>
                    <Badge variant="accent" className="font-mono text-xs">
                      {item.highlight}
                    </Badge>
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-light">
                    {item.category}
                  </span>

                  <h3 className="mt-1.5 text-lg font-bold tracking-tight text-charcoal">
                    {item.title}
                  </h3>

                  <p className="mt-0.5 text-xs font-medium text-accent">
                    {item.subtitle} {item.period ? `(${item.period})` : ''}
                  </p>

                  <p className="mt-3.5 text-xs leading-relaxed text-charcoal-muted sm:text-sm">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-border-warm/60 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-charcoal-light">
                    <CheckCircle size={13} className="text-accent" />
                    <span>Verified Credential</span>
                  </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}

