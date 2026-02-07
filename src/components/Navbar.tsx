'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Trang Chủ' },
  { href: '/properties', label: 'Dự Án Mới' },
  { href: '/about', label: 'Cho Thuê' },
  { href: '/insights', label: 'Tin Tức' },
  { href: '/contact', label: 'Liên Hệ' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // 🌊 Màu biển nhạt khi ở top
  const backgroundColor = useTransform(
    scrollY,
    [0, 120],
    ['rgba(0, 0, 0, 0.65)', 'rgba(255,255,255,0.95)']
  );
  

  // Chữ chuyển từ trắng → đen khi scroll
  const textColor = useTransform(
    scrollY,
    [0, 120],
    ['rgb(255,255,255)', 'rgb(15,15,15)']
  );

  return (
    <motion.header
      style={{ backgroundColor, backdropFilter: 'blur(14px)' }}
      className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center border-b border-white/20"
    >
      <nav className="w-full max-w-[1600px] mx-auto px-6 md:px-10 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/images/vungtauluan.png"
            alt="Logo"
            width={140}
            height={42}
            className="object-contain"
          />
        </Link>

        {/* MENU */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>
                <motion.span
                  style={{ color: textColor }}
                  className={`text-sm tracking-widest uppercase transition-opacity hover:opacity-70 ${
                    pathname === href ? 'font-semibold' : ''
                  }`}
                >
                  {label}
                </motion.span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
