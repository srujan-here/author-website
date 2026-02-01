import React, { useEffect, useRef, useState } from 'react';
import authorImg from '../assets/vivek_kar.jpeg';
import { useNavigate } from 'react-router-dom';


const AboutAuthor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.2, // Trigger when 20% of the component is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-gray-900 dark:text-white flex items-center justify-center py-20 px-4 md:px-12"
        >
            <div className={`max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>

                {/* Left Content */}
                <div className="flex flex-col items-start justify-center space-y-8">
                    <div className="border border-black/20 dark:border-white/20 px-4 py-2 text-xs tracking-[0.2em] text-gray-600 dark:text-gray-300 uppercase">
                        About Vivek
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 dark:text-white leading-relaxed font-light italic opacity-90">
                        Vivek Kar is an ISB Hyderabad alumnus with 18 years of experience in senior corporate leadership roles. His debut novel 'Threads of Light' is a lyrical coming-of-age story inspired by his formative years in the Doon valley.
                    </h2>

                    <button className="group relative px-8 py-3 overflow-hidden border border-black/30 dark:border-white/30 hover:border-black dark:hover:border-white transition-all duration-300" onClick={() => navigate('/about')}>
                        <span className="relative z-10 text-gray-900 dark:text-white text-xs tracking-[0.2em] font-medium uppercase group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                            Read Full Biography
                        </span>
                        <div className="absolute inset-0 bg-black dark:bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out"></div>
                    </button>

                    <div className="w-16 h-0.5 bg-gray-300 dark:bg-gray-700 mt-8"></div>
                </div>

                {/* Right Image */}
                <div className="relative w-full h-full flex justify-center md:justify-end">
                    <div className="relative w-full max-w-lg aspect-[4/5] bg-gray-200 dark:bg-gray-900 border-8 border-gray-100 dark:border-neutral-800 shadow-xl dark:shadow-2xl overflow-hidden">
                        <img
                            src={authorImg}
                            alt="Vivek Kar"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutAuthor;
