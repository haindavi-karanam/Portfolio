export default function Badge({
  children,
  variant = 'default',
  className = '',
  ...props
}) {
  const variantStyles = {
    default:
      'bg-surface border-border-warm text-charcoal-muted hover:border-charcoal-light/50',
    accent:
      'bg-accent/10 border-accent/30 text-accent font-medium',
    warning:
      'bg-amber-500/10 border-amber-500/30 text-amber-700 font-medium',
    muted:
      'bg-surface-subtle border-border-warm-subtle text-charcoal-muted',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs tracking-wide transition-colors ${variantStyles[variant] || variantStyles.default} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

