export const transitions = {
  smooth: {
    duration: 0.45,
    ease: [0.25, 0.1, 0.25, 1],
  },
  spring: {
    type: 'spring',
    stiffness: 120,
    damping: 20,
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.smooth,
  },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

