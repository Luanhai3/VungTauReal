'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    need: 'Mua để ở',
    budget: 'Dưới 3 tỷ',
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

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert('Yêu cầu đã được gửi thành công!');
        setForm({
          name: '',
          phone: '',
          need: 'Mua để ở',
          budget: 'Dưới 3 tỷ',
          message: '',
        });
      } else {
        alert('Gửi thất bại!');
      }
    } catch (err) {
      alert('Có lỗi xảy ra!');
      console.error(err);
    }
  };

  return (
    <div className="pt-24">
      <section className="py-32 px-6 md:px-10 max-w-[860px] mx-auto">
        <SectionTitle
          overline="Liên hệ tư vấn"
          title="Đặt lịch tư vấn bất động sản"
          className="mb-12"
        />

        <motion.p
          className="text-lg text-neutral-600 mb-16 leading-relaxed max-w-[700px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Điền thông tin bên dưới để tôi tư vấn dự án phù hợp nhất tại Vũng Tàu.
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

          {/* Nhu cầu */}
          <div className="flex flex-col">
            <label className="label">Nhu cầu</label>
            <select
              name="need"
              value={form.need}
              onChange={handleChange}
              className="input bg-transparent"
            >
              <option>Mua để ở</option>
              <option>Đầu tư</option>
              <option>Cho thuê</option>
            </select>
          </div>

          {/* Ngân sách */}
          <div className="flex flex-col">
            <label className="label">Ngân sách dự kiến</label>
            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="input bg-transparent"
            >
              <option>Dưới 3 tỷ</option>
              <option>3 – 6 tỷ</option>
              <option>Trên 6 tỷ</option>
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

        <div className="mt-24 text-center text-neutral-500">
          Hoặc liên hệ nhanh qua Zalo:{' '}
          <span className="font-medium text-black">0332 327 008</span>
        </div>
      </section>
    </div>
  );
}
