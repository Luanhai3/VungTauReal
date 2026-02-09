'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import PropertyCard from '@/components/PropertyCard';
import { projects } from '@/app/projects';

const featuredProjects = projects.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* Featured Projects */}
      <section className="py-24 md:py-32 px-6 md:px-10 max-w-[1600px] mx-auto">
      <motion.div
  initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }}
  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
  viewport={{ once: true, amount: 0.6 }}
  transition={{
    duration: 1.1,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  <SectionTitle
    overline="Dự án nổi bật"
    title="Tuyển Chọn Các Khu Đô Thị & Nghỉ Dưỡng Ven Biển"
    className="mb-20"
  />
</motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
        {projects.map((project) => (
  <PropertyCard key={project.id} project={project} />
))}

        </div>

        <motion.div className="mt-20 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <Link
            href="/properties"
            className="inline-block font-medium tracking-widest uppercase text-sm border-b-2 border-neutral-900 pb-2 hover:opacity-70 transition-opacity"
          >
            Xem tất cả dự án
          </Link>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-neutral-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="font-serif text-5xl md:text-6xl tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Sở Hữu Không Gian Sống Bên Đại Dương
          </motion.h2>

          <motion.div className="mt-12">
            <Link
              href="/properties"
              className="inline-block px-10 py-4 bg-neutral-900 text-white uppercase tracking-widest text-sm"
            >
              Khám phá ngay
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
