export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  target,
  rel,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none'

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-lg gap-2',
    lg: 'text-base px-6 py-3 rounded-xl gap-2.5',
  }

  const variantStyles = {
    primary:
      'bg-accent text-white hover:bg-accent-hover shadow-xs hover:shadow active:translate-y-px',
    outline:
      'border border-border-warm bg-surface text-charcoal hover:border-charcoal-muted hover:bg-surface-subtle active:translate-y-px',
    ghost:
      'text-charcoal-muted hover:text-charcoal hover:bg-surface-subtle',
    link: 'text-accent hover:underline underline-offset-4 p-0',
  }

  const combinedStyles = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`

  if (href) {
    const isExternal = href.startsWith('http') || target === '_blank'
    return (
      <a
        href={href}
        className={combinedStyles}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  )
}

