'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Trang Chủ' },
  { href: '/properties', label: 'Dự Án Mới' },
  { href: '/about', label: 'Cho Thuê' },
  { href: '/insights', label: 'Tin Tức' },
  { href: '/contact', label: 'Liên Hệ' },
];

export default function ResponsiveNavbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [open, setOpen] = useState(false);

  // Background theo scroll
  const backgroundColor = useTransform(
    scrollY,
    [0, 120],
    ['rgba(0,0,0,0.65)', 'rgba(255,255,255,0.96)']
  );

  const textColor = useTransform(
    scrollY,
    [0, 120],
    ['rgb(255,255,255)', 'rgb(20,20,20)']
  );

  return (
    <>
      <motion.header
        style={{ backgroundColor, backdropFilter: 'blur(14px)' }}
        className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center border-b border-white/20"
      >
        <nav className="w-full max-w-[1600px] mx-auto pl-2 pr-6 md:px-10 flex items-center justify-between">
          
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

          {/* DESKTOP MENU */}
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

          {/* MOBILE HAMBURGER */}
          <button
  onClick={() => setOpen(!open)}
  className="md:hidden flex flex-col gap-1"
>
  {[1,2,3].map((i) => (
    <motion.span
      key={i}
      style={{ backgroundColor: textColor }}
      className="w-6 h-[2px] block"
    />
  ))}
</button>

        </nav>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35 }}
            className="fixed top-0 right-0 bottom-0 w-[80%] bg-black text-white z-50 p-10 flex flex-col gap-8"
          >
            <button
              onClick={() => setOpen(false)}
              className="text-right text-2xl"
            >
              ✕
            </button>

            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}>
                <span className="text-lg uppercase tracking-widest">
                  {label}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
