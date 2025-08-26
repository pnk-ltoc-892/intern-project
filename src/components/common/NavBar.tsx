"use client"

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation.js';
import Link from 'next/link.js';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const pathname = usePathname();
    const timeoutRef = useRef(null);

    const handleMouseEnter = (dropdown) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setActiveDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 150);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const solutionsMenu = {
        title: 'Solutions',
        sections: [
            {
                title: 'Core Solutions',
                items: [
                    {
                        name: 'Identity Verification (KYC)',
                        description: 'Onboard new users remotely',
                        href: '/solutions/solution1',
                        icon: '🔍'
                    },
                    {
                        name: 'Business Onboarding (KYB)',
                        description: 'Onboard business clients remotely',
                        href: '/solutions#kyb',
                        icon: '🏢'
                    },
                    {
                        name: 'Customer Data Platform (CDP)',
                        description: 'A centralized hub for managing customer data',
                        href: '/solutions#cdp',
                        icon: '📊'
                    },
                    {
                        name: 'Transaction Monitoring (KYT)',
                        description: 'Transaction monitoring from our partners',
                        href: '/solutions#kyt',
                        icon: '💳'
                    },
                    {
                        name: 'Due Diligence',
                        description: 'PEP, sanctions and adverse media checks',
                        href: '/solutions#due-diligence',
                        icon: '🔒'
                    }
                ]
            },
            {
                title: 'Advanced Features',
                items: [
                    {
                        name: 'OnAge',
                        description: 'Reusable Age Verification',
                        href: '/solutions#onage',
                        icon: '🎂'
                    },
                    {
                        name: 'Age Verification Software',
                        description: 'Document-free age authentication',
                        href: '/solutions#age-verification',
                        icon: '✅'
                    },
                    {
                        name: 'AML Software',
                        description: 'Cover all AML compliance needs',
                        href: '/solutions#aml',
                        icon: '🛡️'
                    },
                    {
                        name: 'Authentication Solutions',
                        description: 'Streamline returning user\'s journeys',
                        href: '/solutions#auth',
                        icon: '🔐'
                    },
                    {
                        name: 'Virtual Branch',
                        description: 'Interact with clients remotely',
                        href: '/solutions#virtual-branch',
                        icon: '🏦'
                    }
                ]
            }
        ]
    } as const;

    const resourcesMenu = {
        title: 'Resources',
        sections: [
            {
                title: 'Learn',
                items: [
                    {
                        name: 'Blog',
                        description: 'Latest insights and updates',
                        href: '/blogs',
                        icon: '📝'
                    },
                    {
                        name: 'Case Studies',
                        description: 'Success stories from our clients',
                        href: '/case-study',
                        icon: '📈'
                    },
                    {
                        name: 'Documentation',
                        description: 'Technical guides and API docs',
                        href: '/docs',
                        icon: '📚'
                    },
                    {
                        name: 'Webinars',
                        description: 'Educational sessions and demos',
                        href: '/webinars',
                        icon: '🎥'
                    }
                ]
            },
            {
                title: 'Support',
                items: [
                    {
                        name: 'Help Center',
                        description: 'Find answers to common questions',
                        href: '/help',
                        icon: '❓'
                    },
                    {
                        name: 'API Reference',
                        description: 'Complete API documentation',
                        href: '/api-docs',
                        icon: '⚡'
                    },
                    {
                        name: 'Developer Tools',
                        description: 'SDKs and integration guides',
                        href: '/developers',
                        icon: '🛠️'
                    },
                    {
                        name: 'Status Page',
                        description: 'System status and uptime',
                        href: '/status',
                        icon: '🟢'
                    }
                ]
            }
        ]
    };

    const companyMenu = {
        title: 'Company',
        sections: [
            {
                title: 'About',
                items: [
                    {
                        name: 'About Us',
                        description: 'Our mission and values',
                        href: '/about',
                        icon: '🏢'
                    },
                    {
                        name: 'Leadership Team',
                        description: 'Meet our executives',
                        href: '/team',
                        icon: '👥'
                    },
                    {
                        name: 'Careers',
                        description: 'Join our growing team',
                        href: '/career',
                        icon: '💼'
                    },
                    {
                        name: 'News & Press',
                        description: 'Latest company news',
                        href: '/news',
                        icon: '📰'
                    }
                ]
            },
            {
                title: 'Legal',
                items: [
                    {
                        name: 'Privacy Policy',
                        description: 'How we protect your data',
                        href: '/privacy',
                        icon: '🔒'
                    },
                    {
                        name: 'Terms of Service',
                        description: 'Our terms and conditions',
                        href: '/terms',
                        icon: '📋'
                    },
                    {
                        name: 'Trust Center',
                        description: 'Security and compliance',
                        href: '/trust-center',
                        icon: '🛡️'
                    },
                    {
                        name: 'Cookie Policy',
                        description: 'Cookie usage information',
                        href: '/cookies-info',
                        icon: '🍪'
                    }
                ]
            }
        ]
    } as const;

    const navigationItems = [
        { name: 'Home', href: '/', hasDropdown: false },
        { name: 'Solutions', href: '/solutions', hasDropdown: true, menu: solutionsMenu },
        // { name: 'Resources', href: '#', hasDropdown: true, menu: resourcesMenu },
        // { name: 'Company', href: '#', hasDropdown: true, menu: companyMenu },
        { name: 'Careers', href: '/careers', hasDropdown: false },
        { name: 'Blogs', href: '/blogs', hasDropdown: false },
        { name: 'About', href: '/about', hasDropdown: false },
        { name: 'Contact', href: '/contact', hasDropdown: false },
        { name: 'Privacy Policy', href: '/privacy-policy', hasDropdown: false },
        { name: 'Terms & Conditions', href: '/terms-conditions', hasDropdown: false },
        { name: 'Trust Center', href: '/trust-center', hasDropdown: false }
    ];

    const isActivePage = (href : string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    const dropdownVariants = {
        hidden: {
            opacity: 0,
            y: -10,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: -10,
            scale: 0.95,
            transition: {
                duration: 0.15,
                ease: "easeIn"
            }
        }
    } as const;

    const mobileMenuVariants = {
        hidden: { opacity: 0, x: "100%" },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            x: "100%",
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        }
    } as const;

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-5000">
            {/* Main Navigation */}
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.div
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Link href="/" className="text-2xl font-bold text-primary">
                            InsightAI
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navigationItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative"
                                    onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link
                                        href={item.href}
                                        className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActivePage(item.href)
                                            ? 'text-primary border-b-2 border-primary'
                                            : 'text-gray-700 hover:text-primary'
                                            }`}
                                    >
                                        {item.name}
                                        {item.hasDropdown && (
                                            <motion.div
                                                animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ChevronDown className="ml-1 h-4 w-4" />
                                            </motion.div>
                                        )}
                                    </Link>

                                    {/* Dropdown Menu */}
                                    <AnimatePresence>
                                        {item.hasDropdown && activeDropdown === item.name && (
                                            <motion.div
                                                className="absolute top-full left-0 mt-2 w-screen max-w-4xl bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
                                                style={{ left: '-200px' }}
                                                variants={dropdownVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                            >
                                                <div className="p-8">
                                                    <div className="grid grid-cols-2 gap-8">
                                                        {item.menu.sections.map((section, sectionIndex) => (
                                                            <div key={sectionIndex}>
                                                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                                                    {section.title}
                                                                </h3>
                                                                <div className="space-y-3">
                                                                    {section.items.map((menuItem, itemIndex) => (
                                                                        <motion.div
                                                                            key={itemIndex}
                                                                            whileHover={{ x: 5 }}
                                                                            transition={{ type: "spring", stiffness: 300 }}
                                                                        >
                                                                            <Link
                                                                                href={menuItem.href}
                                                                                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                                                                                onClick={() => setActiveDropdown(null)}
                                                                            >
                                                                                <span className="text-2xl">{menuItem.icon}</span>
                                                                                <div>
                                                                                    <div className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                                                                                        {menuItem.name}
                                                                                    </div>
                                                                                    <div className="text-sm text-gray-500 mt-1">
                                                                                        {menuItem.description}
                                                                                    </div>
                                                                                </div>
                                                                            </Link>
                                                                        </motion.div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* <div className="flex items-center">
                        <Link href="/contact" className="px-6 sm:px-8 py-2 flex items-center justify-center bg-black text-white rounded-full hover:bg-slate-800">
                            Talk to sales
                        </Link>
                        <Link href="/demo" className="px-6 sm:px-8 py-2 flex items-center justify-center border border-gray-500 rounded-full hover:bg-gray-100">
                            Try for free
                        </Link>
                    </div> */}

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors duration-200"
                            whileTap={{ scale: 0.95 }}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto"
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-4">
                            {navigationItems.map((item, index) => (
                                <div key={index}>
                                    <Link
                                        href={item.href}
                                        className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${isActivePage(item.href)
                                            ? 'text-primary bg-blue-50'
                                            : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>

                                    {/* Mobile Dropdown Items */}
                                    {item.hasDropdown && (
                                        <div className="ml-4 mt-2 space-y-2">
                                            {item.menu.sections.map((section, sectionIndex) => (
                                                <div key={sectionIndex}>
                                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                                        {section.title}
                                                    </h4>
                                                    {section.items.map((menuItem, itemIndex) => (
                                                        <Link
                                                            key={itemIndex}
                                                            href={menuItem.href}
                                                            className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors duration-200"
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {menuItem.icon} {menuItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Mobile CTA Buttons */}
                            <div className="pt-4 border-t border-gray-200 space-y-2">
                                <Link
                                    href="/contact"
                                    className="block w-full text-center bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Talk to sales
                                </Link>
                                <Link
                                    href="/demo"
                                    className="block w-full text-center border border-primary text-primary px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Try for free
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            
        </nav>
    );
};
