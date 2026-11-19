import Badge from './Badge'

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'left',
  className = '',
}) {
  const alignmentStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
  }

  return (
    <div
      className={`mb-12 flex flex-col ${alignmentStyles[align] || alignmentStyles.left} ${className}`}
    >
      {badge && (
        <Badge variant="accent" className="mb-3">
          {badge}
        </Badge>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-charcoal sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-charcoal-muted sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  )
}

