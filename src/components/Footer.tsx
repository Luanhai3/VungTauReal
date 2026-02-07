import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  explore: [
    { href: '/', label: 'Trang Chủ' },
    { href: '/properties', label: 'Dự Án' },
    { href: '/about', label: 'Cho Thuê' },
  ],
  contact: [
    {
      href: 'https://www.facebook.com/eouaen/?locale=vi_VN',
      label: 'Facebook',
    },
    {
      href: 'https://www.instagram.com/luanhoanggggg/',
      label: 'Instagram',
    },
    {
      href: 'https://zalo.me/0332327008',
      label: 'Zalo',
    },
  ],
};


export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 mt-auto">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          <div>
          <Link href="/" className="block mb-6">
  <Image
    src="/images/vungtauluan.png"
    alt="Vung Tau Luan Logo"
    width={160}
    height={50}
    className="object-contain"
  />
</Link>
            <p className="text-sm leading-relaxed max-w-xs">
            Những bất động sản hạng sang được tuyển chọn kỹ lưỡng. Cánh cửa dẫn bạn đến cuộc sống đẳng cấp.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-medium tracking-widest uppercase text-neutral-500 mb-6">
              Explore
            </h3>
            <ul className="space-y-4">
              {footerLinks.explore.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-white transition-colors duration-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
          <h3 className="text-xs font-medium tracking-widest uppercase text-neutral-500 mb-6">
  Liên hệ
</h3>
<ul className="space-y-4">
  {footerLinks.contact.map(({ href, label }) => (
    <li key={href}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm hover:text-white transition-colors duration-300"
      >
        {label}
      </a>
    </li>
  ))}
</ul>

          </div>
        </div>
        <div className="mt-20 pt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500">© {new Date().getFullYear()} Vung Tau Real | Design By Louis Hoang</p>
        </div>
      </div>
    </footer>
  );
}
