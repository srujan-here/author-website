import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-black text-gray-900 dark:text-white py-16 mt-0">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Quote */}
                <p className="text-gray-600 dark:text-gray-300 italic font-serif text-lg mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                    "Weaving silence into words, and light into shadows."
                </p>

                {/* Social Links */}
                <div className="flex justify-center items-center gap-8 mb-8 text-sm text-gray-600 dark:text-gray-400">
                    <a href="https://x.com/vivekkar" className="hover:text-gray-900 dark:hover:text-white transition-colors">Twitter</a>
                    <a href="https://www.instagram.com/vivekkar" className="hover:text-gray-900 dark:hover:text-white transition-colors">Instagram</a>
                    <a href="mailto:contact@vivekkar.com" className="hover:text-gray-900 dark:hover:text-white transition-colors">Email</a>
                </div>

                {/* Copyright */}
                <p className="text-gray-500 text-xs tracking-wider mb-6">
                    © 2026 VIVEK KAR. CRAFTING STILLNESS.
                </p>

                {/* Bottom Icon */}
                <div className="flex justify-center">
                    <div className="w-12 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
