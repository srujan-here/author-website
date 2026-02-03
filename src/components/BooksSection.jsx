import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';
import { books } from '../data/books';

const BooksSection = () => {
    const navigate = useNavigate();
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        const elements = document.querySelectorAll('.reveal-on-scroll');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full pt-32 pb-16 px-4 md:px-8 overflow-hidden">
            {/* Primary Glow Radial Gradient */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6B5B33]/5 dark:bg-[#BDB28E]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10" />

            {/* Section Header */}
            <div className="max-w-7xl mx-auto mb-24 text-center reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
                <h3 className="text-5xl md:text-7xl font-serif text-[#1E1E24] dark:text-[#FAFAFA] italic">
                    The Work
                </h3>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col gap-32">
                {books.map((book, index) => (
                    <div
                        key={book.id}
                        className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 
              ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} 
              group reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        {/* Image Side */}
                        <div className="w-full md:w-1/2 relative">
                            <div className="aspect-[3/4] max-w-md mx-auto md:mx-0 shadow-2xl shadow-[#1E1E24]/10 dark:shadow-black/50 overflow-hidden">
                                <ImageCarousel images={book.images} title={book.title} />
                            </div>

                            {/* Decorative elements behind */}
                            <div className={`absolute -top-12 ${index % 2 === 0 ? '-left-12' : '-right-12'} w-full h-full border border-[#1E1E24]/5 dark:border-[#FAFAFA]/5 -z-10 hidden md:block`} />
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <div className="h-0.5 w-12 bg-[#6B5B33]/60 dark:bg-[#BDB28E]/60 mb-8 mx-auto md:mx-0" />

                            <h4 className="text-4xl md:text-5xl font-serif text-[#1E1E24] dark:text-[#FAFAFA] mb-6 leading-tight">
                                {book.title}
                                <span className="block text-xl md:text-2xl text-[#1E1E24]/60 dark:text-[#FAFAFA]/60 mt-2 font-light italic opacity-80">
                                    {book.subtitle}
                                </span>
                            </h4>

                            <p className="text-[#1E1E24]/80 dark:text-[#FAFAFA]/80 leading-relaxed text-lg font-light mb-10 max-w-xl mx-auto md:mx-0">
                                {book.description}
                            </p>

                            <button
                                onClick={() => navigate(`/books`)}
                                className="group relative px-8 py-3 overflow-hidden border border-[#1E1E24]/20 dark:border-[#FAFAFA]/20 hover:border-[#6B5B33] dark:hover:border-[#BDB28E] transition-all duration-300"
                            >
                                <span className="relative z-10 text-[#1E1E24] dark:text-[#FAFAFA] text-sm tracking-[0.2em] font-medium uppercase group-hover:text-[#FAFAFA] dark:group-hover:text-[#1E1E24] transition-colors duration-300">
                                    View Work
                                </span>
                                <div className="absolute inset-0 bg-[#6B5B33] dark:bg-[#BDB28E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out"></div>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BooksSection;
