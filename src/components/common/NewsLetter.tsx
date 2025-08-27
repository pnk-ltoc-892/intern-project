'use client';
import { Mail, Send } from 'lucide-react';
import React, { FC, useState, FormEvent } from 'react';

// Success message shown on subscription
const SuccessMessage: FC = () => (
    <div className="mt-6 flex flex-col items-center text-center px-4">
        <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M40 0C17.92 0 0 17.92 0 40C0 62.08 17.92 80 40 80H60V72H40C22.64 72 8 57.36 8 40C8 22.64 22.64 8 40 8C57.36 8 72 22.64 72 40V45.72C72 48.88 69.16 52 66 52C62.84 52 60 48.88 60 45.72V40C60 28.96 51.04 20 40 20C28.96 20 20 28.96 20 40C20 51.04 28.96 60 40 60C45.52 60 50.56 57.76 54.16 54.12C56.76 57.68 61.24 60 66 60C73.88 60 80 53.6 80 45.72V40C80 17.92 62.08 0 40 0ZM40 52C33.36 52 28 46.64 28 40C28 33.36 33.36 28 40 28C46.64 28 52 33.36 52 40C52 46.64 46.64 52 40 52Z"
                fill="#1E1E1E"
            />
        </svg>
        <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-gray-800">
            Email Sent!
        </h3>
        <p className="mt-2 text-sm sm:text-base text-gray-600">
            We’ve sent a confirmation to your inbox. Please check your email for next
            steps.
        </p>
    </div>
);


export const Newsletter: FC = () => {
    const [email, setEmail] = useState('');
    const [consent, setConsent] = useState(false);
    const [error, setError] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            setError('Please enter a valid corporate email address.');
            return;
        }
        if (!consent) {
            setError('You must agree to our Privacy Policy to subscribe.');
            return;
        }

        setError('');
        setSubscribed(true);
        // TODO: send to backend
    };

    if (subscribed) {
        return (
            <section className="bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg sm:max-w-xl md:max-w-2xl bg-white p-6 sm:p-8 rounded-xl shadow">
                    <SuccessMessage />
                </div>
            </section>
        );
    }

    return (
        <section className="bg-white px-4 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-2xl lg:max-w-3xl p-2 sm:p-4 rounded-2xl">

                <div className='flex justify-center items-center'>
                    <Mail className='w-6 h-6 text-gray-600' />
                </div>
                <h2 className="text-center font-semibold text-xl md:text-2xl text-gray-900 leading-tight">
                    Subscribe to our Newsletter
                </h2>
                <p className="text-gray-400 leading-relaxed text-center">
                    Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    {/* Email field */}
                    <div className='flex gap-2 justify-center items-center p-1 pl-0'>
                        <input
                            id="newsletter-email"
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full rounded-sm border p-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-800 ${error ? "border-red-500" : "border-gray-300"
                                }`}
                        />
                        <button
                            type="submit"
                            disabled={!consent}
                            className={`w-full sm:w-auto inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold text-white shadow-sm transition ${consent
                                ? "bg-black hover:bg-gray-800"
                                : "bg-gray-400 cursor-not-allowed"
                                }`}
                        >
                            <Send className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Consent */}
                    <div className="flex justify-center items-center space-x-3">
                        <input
                            id="newsletter-consent"
                            type="checkbox"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            className="h-5 w-5 rounded border-gray-300 text-gray-900 focus:ring-gray-800"
                        />
                        <label
                            htmlFor="newsletter-consent"
                            className="text-sm text-gray-700 leading-relaxed"
                        >
                            I agree to receive updates and offers. Read our{" "}
                            <a
                                href="/privacy-policy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-gray-900 underline hover:text-gray-700"
                            >
                                Privacy Policy
                            </a>
                        </label>
                    </div>

                    {/* Error */}
                    {error && <p className="text-sm text-red-600">{error}</p>}
                </form>
            </div>
        </section>
    );
};
