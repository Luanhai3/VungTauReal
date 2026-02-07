'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  overline?: string;
  title: string;
  className?: string;
}

export default function SectionTitle({ overline, title, className = '' }: SectionTitleProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {overline && (
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          {overline}
        </p>
      )}
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-neutral-900 leading-[1.1]">
        {title}
      </h2>
    </motion.div>
  );
}
