import React from 'react';

const Footer = () => {
    return (
        <footer className="py-16 mt-0 border-t border-[#1E1E24]/5 dark:border-[#FAFAFA]/5">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Quote */}
                <p className="text-[#1E1E24]/60 dark:text-[#FAFAFA]/60 italic font-serif text-lg mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                    "Weaving silence into words, and light into shadows."
                </p>

                {/* Social Links */}
                <div className="flex justify-center items-center gap-8 mb-8 text-sm text-[#1E1E24]/60 dark:text-[#FAFAFA]/60">
                    <a href="https://x.com/vivekkar" className="hover:text-[#6B5B33] dark:hover:text-[#BDB28E] transition-colors">Twitter</a>
                    <a href="https://www.instagram.com/vivekkar" className="hover:text-[#6B5B33] dark:hover:text-[#BDB28E] transition-colors">Instagram</a>
                    <a href="mailto:contact@vivekkar.com" className="hover:text-[#6B5B33] dark:hover:text-[#BDB28E] transition-colors">Email</a>
                </div>

                {/* Copyright */}
                <p className="text-[#1E1E24]/40 dark:text-[#FAFAFA]/40 text-xs tracking-wider mb-6 uppercase">
                    © 2026 VIVEK KAR. CRAFTING STILLNESS.
                </p>

                {/* Bottom Icon */}
                <div className="flex justify-center">
                    <div className="w-12 h-0.5 bg-[#6B5B33]/20 dark:bg-[#BDB28E]/20 rounded-full"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
