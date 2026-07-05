import { motion } from 'motion/react';
import { fadeInUp, cardHover, buttonHover } from './animation-variants';

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function FadeInSection({ children, className = '', delay = 0 }: FadeInSectionProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeInUp}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}

type HoverCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function HoverCard({ children, className = '' }: HoverCardProps) {
  return (
    <motion.div
      className={className}
      initial="rest"
      whileHover="hover"
      variants={cardHover}
    >
      {children}
    </motion.div>
  );
}

type AnimatedButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function AnimatedButton({ children, className = '' }: AnimatedButtonProps) {
  return (
    <motion.button
      className={className}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      variants={buttonHover}
    >
      {children}
    </motion.button>
  );
}
