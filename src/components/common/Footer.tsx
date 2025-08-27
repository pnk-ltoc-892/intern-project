'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { socialLinks } from '@/data/Footer';
import { Send } from 'lucide-react';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setStatus("Please enter a valid email.")
      return
    }

    console.log("Submitted email:", email)

    setStatus("Thank you for subscribing! 🎉")
    setEmail("") // reset input
  }

  return (
    <footer className="">
      <div className="px-8 sm:px-12 lg:px-16 pt-8 md:pt-12 lg:pt-16">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> */}
        <div className="flex justify-evenly items-center flex-wrap gap-12">

          {/* NewsLetter */}
          <div className="">
            <h2 className="text-xl font-bold tracking-tight">Stay Connected</h2>
            <p className="mb-2 text-gray-600">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="flex gap-2 justify-center items-center p-1 pl-0" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} // update state
                className="flex-1 rounded-md border border-gray-300 bg-white/70 px-3 py-2 pr-12 text-sm shadow-sm backdrop-blur-sm focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <button
                type="submit"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white cursor-pointer"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </button>
            </form>

            {status && (
              <p className="mt-3 text-sm text-gray-700">{status}</p>
            )}

            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Policies</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="text-gray-800 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/trust-center" className="text-gray-800 hover:text-gray-600 transition-colors">Trust Center</Link></li>
              <li><Link href="/terms-conditions" className="text-gray-800 hover:text-gray-600 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/careers" className="text-gray-800 hover:text-gray-600 transition-colors">Careers</Link></li>
              <li><Link href="/about" className="text-gray-800 hover:text-gray-600 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-800 hover:text-gray-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full border border-gray-300 p-3 hover:bg-gray-100 transition"
                >
                  <Icon className="h-4 w-4" />
                  <span className="sr-only">{name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 lg:mt-12">
          <p className="text-gray-400 text-sm text-center p-4">
            © {currentYear} Pinnacle Technologies and Media Solution Pvt Ltd copyright reserved 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;