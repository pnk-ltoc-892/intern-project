'use client'
import React, { useState } from 'react'
import { Send } from 'lucide-react'
import SocialLinkBar from '../footer/SocialLinkBar'
import FooterLink from '../footer/FooterLink'

const Footer = () => {
  const currentYear = new Date().getFullYear()
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
    setEmail("")
  }

  return (
    <footer className="bg-[#181818] text-white">
      <div className="container-wrapper">
        <div className="padding-wrapper-y grid gap-12 lg:grid-cols-3">

          {/* Left: Logo + Social Links */}
          <div>
            <SocialLinkBar />
          </div>

          {/* Middle: Links (Policies + Company) */}
          <div className="max-w-md mx-auto grid grid-cols-2 gap-36">
            {/* Policies */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Policies</h4>
              <ul className="space-y-3">
                <li><FooterLink href="/privacy-policy">Privacy Policy</FooterLink></li>
                <li><FooterLink href="/trust-center">Trust Center</FooterLink></li>
                <li><FooterLink href="/terms-conditions">Terms & Conditions</FooterLink></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><FooterLink href="/careers">Careers</FooterLink></li>
                <li><FooterLink href="/about">About Us</FooterLink></li>
                <li><FooterLink href="/contact">Contact Us</FooterLink></li>
              </ul>
            </div>
          </div>

          {/* Right: Newsletter */}
          <div className='w-full max-w-md mx-auto'>
            <h2 className="text-xl font-bold tracking-tight mb-2">Stay Connected</h2>
            <p className="mb-4 text-gray-400 text-sm">
              Join our newsletter for the latest updates and exclusive offers.
            </p>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-md border border-gray-600 bg-[#222] px-3 py-2 text-sm text-white placeholder-gray-400 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <button
                type="submit"
                className="h-8 w-8 flex justify-center items-center rounded-full bg-white text-black hover:bg-primary/90 transition"
              >
                <Send className="h-5 w-5" />
                <span className="sr-only">Subscribe</span>
              </button>
            </form>

            {status && <p className="mt-3 text-sm text-gray-400">{status}</p>}
          </div>
        </div>
        <div className="border-t border-gray-800 py-4">
          <p className="text-gray-500 text-xs text-center">
            © {currentYear} Pinnacle Technologies and Media Solution Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
