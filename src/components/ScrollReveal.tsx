import React from 'react';
import { motion, useReducedMotion, Variants } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  scale?: boolean;
  once?: boolean;
  amount?: number | 'some' | 'all';
}

/**
 * ScrollReveal:
 * High-performance entrance and exit scroll animation wrapper.
 * Smoothly fades and slides content in as it enters the viewport,
 * and gracefully transitions when scrolling away.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.75,
  distance = 36,
  scale = false,
  once = false,
  amount = 0.12,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getOffset = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...offset,
        scale: scale ? 0.98 : 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once,
        amount,
        margin: '-50px 0px -50px 0px',
      }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Apple / cinematic smooth ease-out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ScrollStaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
  amount?: number | 'some' | 'all';
}

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (staggerDelay = 0.1) => ({
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  }),
};

export const ScrollStagger: React.FC<ScrollStaggerProps> = ({
  children,
  className = '',
  staggerDelay = 0.1,
  once = false,
  amount = 0.12,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={staggerContainerVariants}
      custom={staggerDelay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: '-40px 0px -40px 0px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ScrollItemProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const ScrollItem: React.FC<ScrollItemProps> = ({
  children,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};
