import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/common/Footer';
import NavBar from '@/components/common/NavBar';
import Banner from '@/components/common/Banner';
import { CookiePanel } from '@/components/global/cookie-banner';
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
        {/* Cookie Panel */}
        <CookiePanel />

        {/* Top Banner Component */}
        {/* <Banner /> */}

        {/* Navigation Bar */}
        <NavBar />

        <main>{children}</main>

        {/* Footer Component */}
        <Footer />
      </body>
    </html>
  );
}