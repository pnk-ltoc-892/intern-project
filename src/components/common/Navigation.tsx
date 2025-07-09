'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const solutionsMenu = [
    {
      title: 'By Solutions',
      items: [
        { name: 'WizDoc', href: '/solutions/wizdoc' },
        { name: 'AML', href: '/solutions/aml' },
        { name: 'CROs', href: '/solutions/cros' },
        { name: 'MLROs', href: '/solutions/mlros' },
        { name: 'Document Forgery', href: '/solutions/document-forgery' },
        { name: 'APIs', href: '/solutions/apis' },
      ]
    },
    {
      title: 'By Industry',
      items: [
        { name: 'Banks', href: '/solutions/banks' },
        { name: 'NBFCs', href: '/solutions/nbfcs' },
      ]
    }
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              TechStartup
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              
              {/* Solutions Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle('solutions')}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                >
                  Solutions
                  <ChevronDownIcon className="ml-1 h-4 w-4" />
                </button>
                
                {activeDropdown === 'solutions' && (
                  <div className="absolute left-0 mt-2 w-96 bg-white rounded-md shadow-lg py-2 z-10">
                    <div className="grid grid-cols-2 gap-4 p-4">
                      {solutionsMenu.map((section, index) => (
                        <div key={index}>
                          <h3 className="font-semibold text-gray-900 mb-2">{section.title}</h3>
                          {section.items.map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              href={item.href}
                              className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-md transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/case-studies" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Case Studies
              </Link>
              <Link href="/blogs" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Blogs
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                About Us
              </Link>
              <Link href="/careers" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Careers
              </Link>
              <Link href="/faqs" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                FAQs
              </Link>
              <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium">
                Home
              </Link>
              <div className="px-3 py-2">
                <button
                  onClick={() => handleDropdownToggle('mobile-solutions')}
                  className="flex items-center text-gray-700 hover:text-blue-600 text-sm font-medium w-full"
                >
                  Solutions
                  <ChevronDownIcon className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'mobile-solutions' && (
                  <div className="mt-2 space-y-1 pl-4">
                    {solutionsMenu.map((section, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-gray-900 text-xs uppercase tracking-wide mb-1">
                          {section.title}
                        </h4>
                        {section.items.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            href={item.href}
                            className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/case-studies" className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium">
                Case Studies
              </Link>
              <Link href="/blogs" className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium">
                Blogs
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium">
                About Us
              </Link>
              <Link href="/careers" className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium">
                Careers
              </Link>
              <Link href="/faqs" className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium">
                FAQs
              </Link>
              <Link href="/contact" className="block px-3 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 mx-3">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;