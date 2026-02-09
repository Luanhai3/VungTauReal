import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import ResponsiveNavbar from '@/components/ResponsiveNavbar';
import Footer from '@/components/Footer';
import FloatingZalo from '@/components/FloatingZalo';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vung Tau Real | Luxury Property Showcase',
  description: 'High-end property presentation. Curated listings in premier locations.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
      <ResponsiveNavbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingZalo />
      </body>
    </html>
  );
}
