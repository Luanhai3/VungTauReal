'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import PropertyCard from '@/components/PropertyCard';
import { projects } from '@/app/projects';

const filterOptions = [
  'Tất cả',
  'Biệt thự biển',
  'Căn hộ',
  'Shophouse',
  'Khu đô thị',
];

export default function PropertiesPage() {
  const [activeFilter, setActiveFilter] = useState('Tất cả');

  const filteredProjects =
    activeFilter === 'Tất cả'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 px-6 md:px-10 max-w-[1600px] mx-auto">
        <SectionTitle
          overline="Dự án nổi bật"
          title="Các Khu Đô Thị & Nghỉ Dưỡng Ven Biển"
          className="mb-16"
        />

        {/* FILTER */}
        <motion.div
          className="flex flex-wrap gap-4 mb-16 pb-8 border-b border-neutral-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {filterOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setActiveFilter(opt)}
              className={`px-5 py-2.5 text-sm font-medium tracking-wide rounded-full transition-colors border
                ${
                  activeFilter === opt
                    ? 'bg-neutral-900 text-white border-neutral-900'
                    : 'border-neutral-300 hover:border-neutral-900 hover:bg-neutral-50'
                }`}
            >
              {opt}
            </button>
          ))}
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
          {filteredProjects.map((project) => (
            <PropertyCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
