'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const heroImage =
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80';

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Parallax transforms
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const yOverlay = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image cinematic zoom */}
      <motion.div style={{ scale: scaleImage }} className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Luxury property"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay trôi nhẹ */}
      <motion.div
        style={{ y: yOverlay }}
        className="absolute inset-0 bg-black/40"
      />

      {/* Content parallax */}
      <motion.div
        style={{ y: yText }}
        className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm font-medium tracking-[0.25em] uppercase mb-6"
        >
          Bất Động Sản Biển Cao Cấp
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-[1.05]"
        >
          Kiệt tác
          <br />
          Bên bờ biển
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 text-lg md:text-xl text-white/90 max-w-xl mx-auto"
        >
          Khám phá những tuyệt tác ven biển tại các vị trí đắt giá nhất.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-14 md:mt-20"
        >
          <div className="inline-flex flex-wrap items-center gap-3 justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-4 md:px-8 md:py-5">
            <input
              type="text"
              placeholder="Location"
              readOnly
              className="bg-transparent text-white placeholder-white/70 text-sm md:text-base w-28 md:w-36 outline-none"
            />
            <span className="text-white/50">|</span>
            <input
              type="text"
              placeholder="Property type"
              readOnly
              className="bg-transparent text-white placeholder-white/70 text-sm md:text-base w-28 md:w-36 outline-none"
            />
            <span className="text-white/50 hidden sm:inline">|</span>
            <button
              type="button"
              className="ml-2 px-5 py-2.5 bg-white text-neutral-900 text-sm font-medium rounded-full hover:bg-white/90 transition-colors"
            >
              Explore
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator breathing */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.span
          animate={{ height: [16, 28, 16] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="block w-px bg-white/60 mx-auto rounded-full"
        />
        <span className="text-xs tracking-widest uppercase text-white/70 mt-2 block">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
