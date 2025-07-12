import { ArrowRight, Shield, Zap, Users, CheckCircle, Star, TrendingUp } from 'lucide-react';
import Link from 'next/link.js';

export default function Features(){
    const features = [
        {
            icon: Shield,
            title: 'Advanced Security',
            description: 'State-of-the-art AI algorithms for document verification and fraud detection.'
        },
        {
            icon: Zap,
            title: 'Real-time Processing',
            description: 'Lightning-fast analysis and decision-making for critical financial operations.'
        },
        {
            icon: Users,
            title: 'Expert Support',
            description: 'Dedicated team of AI specialists and compliance experts at your service.'
        }
    ];

    const solutions = [
        {
            title: 'WizDoc',
            description: 'Intelligent document processing and verification system.',
            href: '/solutions#wizdoc'
        },
        {
            title: 'AML Solutions',
            description: 'Comprehensive anti-money laundering detection and reporting.',
            href: '/solutions#aml'
        },
        {
            title: 'Document Forgery Detection',
            description: 'Advanced AI-powered document authenticity verification.',
            href: '/solutions#forgery-detection'
        }
    ];

    const stats = [
        { number: '99.9%', label: 'Accuracy Rate' },
        { number: '500+', label: 'Financial Institutions' },
        { number: '10M+', label: 'Documents Processed' },
        { number: '24/7', label: 'Support Available' }
    ];

    const testimonials = [
        {
            quote: "InsightAI has revolutionized our compliance processes. The accuracy and speed are unmatched.",
            author: "Sarah Johnson",
            role: "Chief Risk Officer",
            company: "Global Bank Corp"
        },
        {
            quote: "The document forgery detection has saved us millions in potential fraud losses.",
            author: "Michael Chen",
            role: "Compliance Director",
            company: "FinTech Solutions"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                                    Advanced AI Solutions for{' '}
                                    <span className="text-blue-300">Financial Intelligence</span>
                                </h1>
                                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                                    Empower your financial institution with cutting-edge AI technology for
                                    anti-money laundering, document verification, and risk management.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/solutions"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 group"
                                >
                                    Explore Solutions
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold rounded-lg transition-colors duration-200"
                                >
                                    Get Started
                                </Link>
                            </div>

                            <div className="flex items-center space-x-6 pt-4">
                                <div className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <span className="text-blue-100">Trusted by 500+ institutions</span>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <span className="text-blue-200">Document Analysis</span>
                                        <span className="text-green-400 font-semibold">99.9% Accurate</span>
                                    </div>
                                    <div className="w-full bg-white/20 rounded-full h-2">
                                        <div className="bg-green-400 h-2 rounded-full w-full"></div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-white">10M+</div>
                                            <div className="text-blue-200 text-sm">Documents Processed</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-white">&lt;1s</div>
                                            <div className="text-blue-200 text-sm">Processing Time</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose InsightAI?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our AI-powered platform delivers unmatched accuracy, speed, and reliability
                            for your most critical financial operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className="text-center group">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-200">
                                        <Icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Solutions Preview */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Our Solutions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive AI-powered tools designed specifically for financial institutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-200 group">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    {solution.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {solution.description}
                                </p>
                                <a
                                    href={solution.href}
                                    className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors duration-200 group-hover:translate-x-1"
                                >
                                    Learn More
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/solutions"
                            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200"
                        >
                            View All Solutions
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Trusted by Industry Leaders
                        </h2>
                        <p className="text-xl text-gray-600">
                            See what our clients say about InsightAI.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-primary">
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <blockquote className="text-gray-700 text-lg mb-6 italic">
                                    "{testimonial.quote}"
                                </blockquote>
                                <div>
                                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                                    <div className="text-gray-600">{testimonial.role}</div>
                                    <div className="text-primary font-medium">{testimonial.company}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                        Ready to Transform Your Financial Operations?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        Join hundreds of financial institutions already using InsightAI to enhance
                        their compliance, security, and operational efficiency.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                            Get Started Today
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link
                            href="/case-study"
                            className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-lg transition-colors duration-200"
                        >
                            View Case Studies
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
