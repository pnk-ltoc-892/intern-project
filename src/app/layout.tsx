import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/common/Navigation';
import Footer from '@/components/common/Footer';
import CookiePopup from '@/components/common/CookiePopup';
import { NavigationBar } from '@/components/common/NavigationBar';
import NavBar from '@/components/common/NavBar';
import Banner from '@/components/common/Banner';
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
          {/* Top Banner Component */}
          {/* // ! Can Be Made Sticky To Whole Website */}
          <Banner />
          
          {/* Navigation Bar */}
          <NavBar />
        
        <main>{children}</main>

        {/* Footer Component */}
        <Footer />
        {/* <CookiePopup /> */}
      </body>
    </html>
  );
}