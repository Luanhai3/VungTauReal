'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';

const posts = [
  {
    id: '1',
    title: 'Cận cảnh 38 km cao tốc Biên Hòa – Vũng Tàu sắp thông xe',
    category: 'Hạ tầng',
    date: '22/01/2026',
    image: '/images/news1.jpg',
  },
  {
    id: '2',
    title: 'TP HCM tính phát triển TOD kết nối Bình Dương – Bà Rịa – Vũng Tàu',
    category: 'Giao thông',
    date: '28/01/2026',
    image: '/images/news2.jpg',
  },
  {
    id: '3',
    title: 'Thị trường TP.HCM: Đất nền lặng sóng, căn hộ bật phá',
    category: 'Thị trường',
    date: '20/01/2026',
    image: '/images/news3.jpg',
  },
  {
    id: '4',
    title: 'Cầu đường nối Vũng Tàu – Cần Giờ có hầm vượt biển',
    category: 'Hạ tầng',
    date: '05/02/2026',
    image: '/images/news4.jpg',
  },
  {
    id: '5',
    title: 'Cách tra cứu thông tin bất động sản theo quy định mới 2026',
    category: 'Định hướng',
    date: '10/02/2026',
    image: '/images/news5.jpg',
  },
  {
    id: '6',
    title: 'Top dự án căn hộ Vũng Tàu đáng đầu tư năm 2026',
    category: 'Dự án',
    date: '07/02/2026',
    image: '/images/news1.jpg',
  },
];

export default function NewsPage() {
  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 px-6 md:px-10 max-w-[1600px] mx-auto">
        <SectionTitle
          overline="Tin tức thị trường"
          title="Hạ tầng - Quy hoạch - Bất động sản Vũng Tàu"
          className="mb-20 md:mb-28"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={`/insights/${post.id}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-neutral-200 mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex gap-4 text-xs font-medium tracking-widest uppercase text-neutral-500 mb-3">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>

                <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 tracking-tight group-hover:opacity-80 transition-opacity">
                  {post.title}
                </h2>

                <span className="inline-block mt-4 text-sm font-medium tracking-widest uppercase border-b border-neutral-900 pb-1 group-hover:opacity-70">
                  Đọc bài viết
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
