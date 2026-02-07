'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';

const rentals = [
  {
    slug: 'the-song',
    name: 'The Sóng Apartment',
    image: '/images/the-song.jpg',
    address: '28 Thi Sách, P. Thắng Tam, TP. Vũng Tàu',
    description:
      'Căn hộ du lịch cao cấp với hồ bơi vô cực, phòng gym, BBQ rooftop và cách biển 200m.',
    amenities: ['Hồ bơi vô cực', 'Gym', 'BBQ Rooftop', 'Khu vui chơi', 'Gần biển'],
    map: 'https://www.google.com/maps?q=28+Thi+Sach+Vung+Tau&output=embed',
  },
  {
    slug: 'lavida',
    name: 'Lavida Residences',
    image: '/images/lavida.jpg',
    address: 'Đường 3/2, TP. Vũng Tàu',
    description:
      'Khu căn hộ hiện đại ngay trung tâm, phù hợp lưu trú gia đình và dài ngày.',
    amenities: ['Hồ bơi', 'TTTM', 'Công viên', 'An ninh 24/7'],
    map: 'https://www.google.com/maps?q=Lavida+Vung+Tau&output=embed',
  },
  {
    slug: 'centrepoint',
    name: 'Vũng Tàu Centre Point',
    image: '/images/centrepoint.jpg',
    address: 'Đường 2/9, TP. Vũng Tàu',
    description:
      'Căn hộ thương mại cao cấp, không gian sống sang trọng ngay trung tâm.',
    amenities: ['Hồ bơi', 'Shophouse', 'Bãi đậu xe rộng'],
    map: 'https://www.google.com/maps?q=Vung+Tau+Centre+Point&output=embed',
  },
];

export default function AboutPage() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');
  const rental = rentals.find((r) => r.slug === slug);

  // ================= LIST PAGE =================
  if (!slug) {
    return (
      <div className="pt-20">
        <section className="py-16 md:py-24 px-6 md:px-10 max-w-[1600px] mx-auto">
          <SectionTitle
            overline="Cho thuê căn hộ biển"
            title="Không gian lưu trú đẳng cấp tại Vũng Tàu"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {rentals.map((item) => (
              <motion.article
                key={item.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <Link href={`/about?slug=${item.slug}`}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="pt-6">
                    <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
                      {item.address}
                    </p>

                    <h3 className="font-serif text-2xl text-neutral-900 mb-3">
                      {item.name}
                    </h3>

                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // ================= DETAIL PAGE =================
  return (
    <div className="pt-20 px-6 md:px-10 max-w-[1200px] mx-auto">
      <div className="relative aspect-[21/9] w-full overflow-hidden rounded-sm">
        <Image
          src={rental!.image}
          alt={rental!.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="py-16">
        <Link
          href="/about"
          className="text-sm text-neutral-500 underline mb-6 inline-block"
        >
          ← Quay lại danh sách
        </Link>

        <h1 className="font-serif text-5xl mb-4">{rental!.name}</h1>
        <p className="text-neutral-500 mb-8">{rental!.address}</p>

        <p className="text-lg text-neutral-700 leading-relaxed">
          {rental!.description}
        </p>
      </div>

      <div className="border-t py-16">
        <h2 className="font-serif text-3xl mb-6">Tiện ích</h2>
        <ul className="grid grid-cols-2 gap-4 text-neutral-700">
          {rental!.amenities.map((a) => (
            <li key={a}>• {a}</li>
          ))}
        </ul>
      </div>

      <div className="border-t py-16">
        <h2 className="font-serif text-3xl mb-6">Vị trí</h2>
        <iframe
          src={rental!.map}
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          className="rounded-sm"
        />
      </div>
    </div>
  );
}
