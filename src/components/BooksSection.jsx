
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { books } from '../data/books';

const BooksSection = () => {
    const navigate = useNavigate();
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Remove hidden state classes
                        entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-y-8');
                        // Add visible state (default is visible if we remove opacity-0, but let's be explicit if needed,
                        // actually just removing opacity-0 restores default opacity-100)
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
        <section ref={sectionRef} className="relative w-full bg-white dark:bg-black pt-32 pb-16 px-4 md:px-8 overflow-hidden">

            {/* Section Header */}
            <div className="max-w-7xl mx-auto mb-24 text-center reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
                <h2 className="text-gray-900 dark:text-white text-sm tracking-[0.3em] uppercase mb-4 text-gray-500 dark:text-gray-400">The Work</h2>
                <h3 className="text-5xl md:text-7xl font-serif text-gray-900 dark:text-white italic">
                    The Work
                </h3>
                {/* Note: I am assuming the user might want a generic header or the first book featured. 
            The prompt says "show all his books... in this manner." 
            I will list them one by one. 
            For the header, I used "Threads of Light" as a style choice, but maybe "Selected Works" is safer? 
            Let's stick to "Threads of Light" as the main engaging title or just "Selected Works" if it's a list.
            Actually, the design shows "Threads of Light" prominently. I will treat the list as a series of featured works.
         */}
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
                            <div className="relative aspect-[3/4] max-w-md mx-auto md:mx-0 overflow-hidden shadow-2xl shadow-zinc-200/50 dark:shadow-zinc-900/50">
                                <div className="absolute inset-0 bg-gray-800 animate-pulse" /> {/* Loading state placeholder in case logic */}
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="relative w-full h-full object-cover transform md:group-hover:scale-105 transition-transform duration-700 ease-in-out grayscale md:grayscale-0 md:group-hover:grayscale-0"
                                    loading="lazy"
                                />
                                {/* Overlay for depth */}
                                <div className="absolute inset-0 ring-1 ring-white/10" />
                            </div>

                            {/* Decorative elements behind */}
                            <div className={`absolute -top-12 ${index % 2 === 0 ? '-left-12' : '-right-12'} w-full h-full border border-gray-200 dark:border-white/5 -z-10 hidden md:block`} />
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <div className="h-0.5 w-12 bg-amber-600/80 mb-8 mx-auto md:mx-0" />

                            <h4 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white mb-6 leading-tight">
                                {book.title}
                                <span className="block text-xl md:text-2xl text-gray-500 dark:text-gray-400 mt-2 font-light italic opacity-80">
                                    {book.subtitle}
                                </span>
                            </h4>

                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg font-light mb-10 max-w-xl mx-auto md:mx-0">
                                {book.description}
                            </p>

                            <button
                                onClick={() => navigate(`/books`)}
                                className="inline-block border border-black/20 dark:border-white/20 px-8 py-3 text-sm tracking-[0.2em] text-gray-900 dark:text-white uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                            >
                                View Work
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BooksSection;
