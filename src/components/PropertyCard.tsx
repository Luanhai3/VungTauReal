'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export interface Project {
  id: string;
  name: string;
  address: string;
  totalArea: string;
  totalProducts: string;
  propertyTypes: string;
  legal: string;
  developer: string;
  contractor: string;
  image: string;
  floors?: string;
  bank?: string;
}

export default function PropertyCard({
  project,
}: {
  project: Project;
}) {
  const {
    id,
    name,
    address,
    totalArea,
    totalProducts,
    propertyTypes,
    legal,
    developer,
    contractor,
    image,
    floors,
    bank,
  } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <Link href={`/properties/${id}`} className="block">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        </div>

        {/* Content */}
        <div className="pt-6 pb-4">
          <p className="text-xs font-medium tracking-widest uppercase text-neutral-500 mb-1">
            {address}
          </p>

          <h3 className="font-serif text-2xl md:text-3xl text-neutral-900 tracking-tight mb-4 group-hover:opacity-80 transition-opacity">
            {name}
          </h3>

          <div className="text-sm text-neutral-600 space-y-1">
            <p><strong>Tổng diện tích:</strong> {totalArea}</p>

            {floors && (
              <p><strong>Số tầng:</strong> {floors}</p>
            )}

            <p><strong>Tổng số sản phẩm:</strong> {totalProducts}</p>
            <p><strong>Loại hình:</strong> {propertyTypes}</p>
            <p><strong>Pháp lý:</strong> {legal}</p>
            <p><strong>Chủ đầu tư:</strong> {developer}</p>
            <p><strong>Tổng thầu:</strong> {contractor}</p>

            {bank && (
              <p><strong>Ngân hàng liên kết:</strong> {bank}</p>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
