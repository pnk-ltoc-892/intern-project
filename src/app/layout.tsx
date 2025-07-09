import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/common/Navigation';
import Footer from '@/components/common/Footer';
import CookiePopup from '@/components/common/CookiePopup';
import { NavbarDemo } from '@/components/ui/NavBar.tsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechStartup - Leading Financial Technology Solutions',
  description: 'Transform your financial operations with our cutting-edge technology solutions designed for banks, NBFCs, and financial institutions.',
  keywords: 'fintech, financial technology, AML, compliance, document verification, banking solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navigation /> */}
        <div className='relative'>
          <NavbarDemo />
        </div>
        
        <main>{children}</main>
        <Footer />
        <CookiePopup />
      </body>
    </html>
  );
}