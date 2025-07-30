'use client';

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
        <section className="bg-gray-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl bg-white p-6 sm:p-8 rounded-xl shadow">
                <h2 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900">
                    Stay in the loop with the latest industry news
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="mt-6 sm:mt-8 space-y-4 sm:space-y-6"
                >
                    {/* Email field */}
                    <div>
                        <label
                            htmlFor="newsletter-email"
                            className="block text-sm sm:text-base font-medium text-gray-700"
                        >
                            Email*
                        </label>
                        <input
                            id="newsletter-email"
                            type="email"
                            placeholder="Corporate email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`mt-1 block w-full rounded-lg border px-3 py-2 sm:px-4 sm:py-3 text-gray-800 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 ${error ? 'border-red-500' : 'border-gray-300'
                                }`}
                        />
                    </div>

                    {/* Consent */}
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0">
                        <input
                            id="newsletter-consent"
                            type="checkbox"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            className="h-4 w-4 sm:h-5 sm:w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                            htmlFor="newsletter-consent"
                            className="ml-0 sm:ml-3 text-sm sm:text-base text-gray-700"
                        >
                            I agree to receive updates and offers from InsightAI. Read our{' '}
                            <a
                                href="/privacy-policy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-green-600 hover:underline"
                            >
                                Privacy Policy
                            </a>{' '}
                            to learn more.*
                        </label>
                    </div>

                    {/* Error */}
                    {error && <p className="text-sm text-red-600">{error}</p>}

                    {/* Subscribe button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            disabled={!consent}
                            className={`inline-flex items-center justify-center rounded-full px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold text-white shadow transition ${consent
                                    ? 'bg-gray-900 hover:bg-gray-800'
                                    : 'bg-gray-400 cursor-not-allowed'
                                }`}
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};
