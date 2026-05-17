/** Shared motion tokens — keep animations consistent site-wide. */
export const easeOut = [0.22, 1, 0.36, 1] as const;

export const spring = {
  type: "spring" as const,
  stiffness: 380,
  damping: 28,
};

export const springSnappy = {
  type: "spring" as const,
  stiffness: 520,
  damping: 32,
};

export const tween = {
  duration: 0.65,
  ease: easeOut,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1 },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const slideRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
};

export type RevealVariant = "up" | "fade" | "scale" | "left" | "right";

type RevealMotion = {
  hidden: Record<string, number>;
  visible: Record<string, number>;
};

export const revealVariants: Record<RevealVariant, RevealMotion> = {
  up: fadeUp,
  fade: fadeIn,
  scale: scaleIn,
  left: slideLeft,
  right: slideRight,
};
