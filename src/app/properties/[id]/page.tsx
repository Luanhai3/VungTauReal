'use client';

import { useParams } from 'next/navigation';
import { projects } from '@/app/projects';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project)
    return <div className="pt-32 text-center">Project not found</div>;

  return (
    <div className="pt-20">
      <article className="max-w-[1400px] mx-auto px-6 md:px-10">

        {/* HERO */}
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-sm bg-neutral-200">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* TITLE */}
        <div className="py-16 md:py-24">
          <p className="text-xs tracking-widest uppercase text-neutral-500 mb-3">
            Dự án bất động sản biển cao cấp
          </p>
          <h1 className="font-serif text-4xl md:text-6xl tracking-tight mb-6">
            {project.name}
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl">
            {project.address}
          </p>
        </div>

        {/* INTRODUCTION - nội dung riêng từng dự án */}
        <section className="border-t border-neutral-200 pt-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">
            Giới thiệu dự án
          </h2>

          <div className="space-y-6 text-lg leading-8 text-neutral-700 max-w-5xl whitespace-pre-line">
            {project.introduction}
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="border-t border-neutral-200 py-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-10">
            Điểm nổi bật của dự án
          </h2>

          {project.highlights?.length ? (
  <ul className="grid md:grid-cols-2 gap-6 text-lg text-neutral-700">
    {project.highlights.map((item, index) => (
      <li key={index} className="flex gap-3">
        <span>•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
) : null}
        </section>

        {/* OVERVIEW TABLE */}
        <section className="border-t border-neutral-200 py-16">
          <SectionTitle overline="Overview" title="Tổng quan dự án" className="mb-12" />

          <div className="grid md:grid-cols-2 gap-10">
            <Info label="Tên thương mại" value={project.name} />
            <Info label="Vị trí" value={project.address} />
            <Info label="Tổng diện tích" value={project.totalArea} />
            <Info label="Tổng số sản phẩm" value={project.totalProducts} />
            <Info label="Loại hình sản phẩm" value={project.propertyTypes} />
            <Info label="Pháp lý" value={project.legal} />
            <Info label="Chủ đầu tư" value={project.developer} />
            <Info label="Tổng thầu thi công" value={project.contractor} />
            {project.bank && <Info label="Ngân hàng bảo lãnh" value={project.bank} />}
            {project.floors && <Info label="Số tầng" value={project.floors} />}
          </div>
        </section>

        {/* MAP */}
        <section className="border-t border-neutral-200 py-16">
          <SectionTitle overline="Location" title="Vị trí dự án" className="mb-10" />
          <div className="aspect-[21/9] w-full overflow-hidden rounded-sm bg-neutral-200">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                project.mapQuery
              )}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              className="w-full h-full"
            />
          </div>
        </section>

      </article>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm uppercase tracking-widest text-neutral-500 mb-2">
        {label}
      </p>
      <p className="text-lg font-medium text-neutral-900">
        {value}
      </p>
    </div>
  );
}
