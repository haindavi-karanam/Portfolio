import { motion } from 'framer-motion'
import { Layout, Server, Code2, Database, Wrench } from 'lucide-react'
import Container from '@/components/common/Container'
import SectionHeader from '@/components/common/SectionHeader'
import Badge from '@/components/common/Badge'
import { skillCategories } from '@/data/skills'
import { fadeUp, staggerContainer } from '@/utils/animations'

export default function Skills() {
  const getCategoryIcon = (title) => {
    switch (title.toLowerCase()) {
      case 'frontend':
        return Layout
      case 'backend':
        return Server
      case 'languages':
        return Code2
      case 'databases':
        return Database
      case 'tools':
        return Wrench
      default:
        return Code2
    }
  }

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-border-warm/60">
      <Container>
        <SectionHeader
          badge="Technical Skills"
          title="Skills & Technologies"
          subtitle="Core engineering proficiencies, languages, frameworks, and developer tools."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => {
            const Icon = getCategoryIcon(category.title)

            return (
              <motion.div
                key={category.title}
                variants={fadeUp}
                className="group relative flex flex-col justify-between rounded-2xl border border-border-warm bg-surface p-6 shadow-2xs transition-all duration-300 hover:border-accent/40 hover:shadow-xs"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-subtle text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <Icon size={20} />
                    </div>
                    <span className="text-xs font-mono font-medium text-charcoal-light">
                      {category.skills.length} skills
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold tracking-tight text-charcoal">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-charcoal-muted">
                    {category.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="default"
                        className="transition-colors group-hover:border-border-warm hover:border-accent hover:text-accent"
                      >
                        {skill}
                      </Badge>
                    ))}
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

