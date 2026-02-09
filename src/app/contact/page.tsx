'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    product: 'Blanca Tower (Căn hộ 50 năm)',
    type: 'Studio 35m2',
    budget: '3 - 4 tỷ',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    alert('Yêu cầu đã được gửi!');
  };

  return (
    <div className="pt-24">
      <section className="py-32 px-6 md:px-10 max-w-[860px] mx-auto">
        <SectionTitle
          overline="Liên hệ tư vấn"
          title="Đặt lịch tư vấn Sản Phẩm"
          className="mb-12"
        />

        <motion.p
          className="text-lg text-neutral-600 mb-16 leading-relaxed max-w-[700px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Chọn đúng phân khu bạn quan tâm, tôi sẽ tư vấn phương án phù hợp
          nhất với ngân sách của bạn.
        </motion.p>

        <motion.form
          className="grid md:grid-cols-2 gap-8"
          onSubmit={handleSubmit}
        >
          {/* Họ tên */}
          <div className="flex flex-col">
            <label className="label">Họ và tên</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              className="input"
              required
            />
          </div>

          {/* SĐT */}
          <div className="flex flex-col">
            <label className="label">Số điện thoại</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="text"
              className="input"
              required
            />
          </div>

          {/* Phân khu */}
          <div className="flex flex-col">
            <label className="label">Phân khu quan tâm</label>
            <select
              name="product"
              value={form.product}
              onChange={handleChange}
              className="input bg-transparent"
            >
              <option>Blanca Tower (Căn hộ 50 năm)</option>
              <option>CASA Townhouse (Sổ hồng lâu dài)</option>
              <option>CASA Villa song lập (Sổ hồng lâu dài)</option>
              <option>CASA Villa đơn lập (Sổ hồng lâu dài)</option>
            </select>
          </div>

          {/* Loại căn */}
          <div className="flex flex-col">
            <label className="label">Loại sản phẩm</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="input bg-transparent"
            >
              <option>Studio 35m2</option>
              <option>1PN</option>
              <option>2PN</option>
              <option>Nhà phố thương mại CASA</option>
              <option>Villa song lập CASA</option>
              <option>Villa đơn lập CASA</option>
            </select>
          </div>

          {/* Ghi chú */}
          <div className="md:col-span-2 flex flex-col">
            <label className="label">Ghi chú thêm</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="input resize-none"
            />
          </div>

          {/* Button */}
          <div className="md:col-span-2 mt-8">
            <button
              type="submit"
              className="w-full py-5 mt-6 border border-black text-black
              tracking-[0.3em] uppercase text-xs
              hover:bg-black hover:text-white
              transition-all duration-500"
            >
              Gửi yêu cầu tư vấn
            </button>
          </div>
        </motion.form>

        <div className="mt-32 flex justify-center">
  <div className="relative group">
    {/* animated glow background */}
    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-neutral-200 via-white to-neutral-200 blur-xl opacity-60 group-hover:opacity-100 transition duration-700" />

    <div
      className="
        relative overflow-hidden
        rounded-3xl
        border border-neutral-200
        bg-white/80 backdrop-blur-xl
        px-12 py-10
        shadow-xl
        transition-all duration-700
        group-hover:shadow-2xl
      "
    >
      {/* light sweep effect */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-[250%] transition-all duration-1000" />
      </div>

      <p className="text-xs tracking-[0.5em] uppercase text-neutral-400 text-center mb-4">
        Tư vấn trực tiếp 1–1
      </p>

      <p className="text-3xl font-semibold text-black text-center tracking-wide">
        Kết nối Zalo ngay
      </p>

      <div className="mt-8 flex justify-center">
        <a
          href="https://zalo.me/0332327008"
          target="_blank"
          className="
            flex items-center gap-5
            px-10 py-5
            rounded-full
            border border-black
            text-black
            tracking-[0.3em] uppercase text-xs
            hover:bg-black hover:text-white
            transition-all duration-500
          "
        >
          {/* Zalo icon */}
          <img
            src="/icons/zalo.svg"
            alt="Zalo"
            className="w-7 h-7"
          />

          <span className="text-sm tracking-[0.2em]">
            0332 327 008 (MR Luân)
          </span>

          <span className="text-lg">↗</span>
        </a>
      </div>
    </div>
  </div>
</div>

      </section>
    </div>
  );
}
