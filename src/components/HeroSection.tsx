'use client';

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const images = [
  '/images/news1.jpg',
  '/images/news2.jpg',
  '/images/news3.jpg',
  '/images/news4.jpg',
  '/images/news5.jpg',
  '/images/news6.jpg',
];

const burns = [
  { scale: 1.25, x: '-4%', y: '-3%' },
  { scale: 1.2, x: '5%', y: '-2%' },
  { scale: 1.22, x: '-6%', y: '3%' },
  { scale: 1.18, x: '4%', y: '4%' },
  { scale: 1.24, x: '-5%', y: '2%' },
  { scale: 1.2, x: '6%', y: '-4%' },
];

const DURATION = 10000;

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const i = setInterval(
      () => setIndex((p) => (p + 1) % images.length),
      DURATION
    );
    return () => clearInterval(i);
  }, [paused]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);

  return (
    <section
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative h-screen w-full"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              scale: burns[index].scale,
              x: burns[index].x,
              y: burns[index].y,
            }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2 },
              scale: { duration: DURATION / 1000, ease: 'linear' },
              x: { duration: DURATION / 1000, ease: 'linear' },
              y: { duration: DURATION / 1000, ease: 'linear' },
            }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[index]})` }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: yText }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6"
      >
        <p className="text-sm tracking-[0.25em] uppercase mb-6">
          Bất Động Sản Biển Cao Cấp
        </p>

        <h1 className="font-serif text-6xl md:text-8xl leading-[1.05]">
          Kiệt tác <br /> Bên bờ biển
        </h1>

        <p className="mt-8 text-lg text-white/90 max-w-xl">
          Khám phá những tuyệt tác ven biển tại các vị trí đắt giá nhất.
        </p>

        {/* DOT dưới text */}
        <div className="mt-12 flex gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-all ${
                i === index ? 'bg-white scale-125' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
