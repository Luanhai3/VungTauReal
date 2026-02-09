'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingZalo() {
  const [showTip, setShowTip] = useState(false);
  const [shake, setShake] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const dismissed = localStorage.getItem('zalo_tip_dismissed');
    if (dismissed) return;

    const timer = setTimeout(() => {
      setShowTip(true);
      setShake(true);

      const enableSound = () => {
        audioRef.current?.play().catch(() => {});
        window.removeEventListener('click', enableSound);
      };

      window.addEventListener('click', enableSound);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const closeTip = () => {
    setShowTip(false);
    localStorage.setItem('zalo_tip_dismissed', 'true');
  };

  return (
    <>
      <audio ref={audioRef} src="/sounds/ting.mp3" preload="auto" />

      <div className="fixed bottom-6 right-6 z-[2147483647]">
        <AnimatePresence>
          {showTip && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-3 bg-white rounded-2xl shadow-xl p-4 w-[240px] relative"
            >
              <button
                onClick={closeTip}
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-black text-white text-xs"
              >
                ×
              </button>

              <div className="font-semibold flex items-center gap-2 text-black">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                MR Luân đang online
              </div>

              <div className="text-sm text-neutral-600 mt-1">
                Anh/chị cần tư vấn nhanh dự án này không ạ?
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.a
          href="https://zalo.me/0332327008"
          target="_blank"
          animate={shake ? { rotate: [0, -10, 10, -8, 8, 0] } : {}}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center"
        >
          <Image src="/icons/zalo.svg" alt="zalo" width={34} height={34} />
        </motion.a>
      </div>
    </>
  );
}
