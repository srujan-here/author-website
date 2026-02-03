
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    if (!images || images.length === 0) return null;

    return (
        <div className="relative w-full h-full group/carousel overflow-hidden">
            {/* Loading Placeholder */}
            <div className="absolute inset-0 bg-[#1E1E24]/5 dark:bg-[#FAFAFA]/5 animate-pulse" />

            {/* Images */}
            <div
                className="relative w-full h-full transition-transform duration-700 ease-in-out flex"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`${title} - Illustration ${idx + 1}`}
                        className="w-full h-full object-cover flex-shrink-0 grayscale md:grayscale-0"
                        loading="lazy"
                    />
                ))}
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-black/60 text-white rounded-full backdrop-blur-sm opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 z-10"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-black/60 text-white rounded-full backdrop-blur-sm opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 z-10"
                        aria-label="Next image"
                    >
                        <ChevronRight size={20} />
                    </button>
                </>
            )}

            {/* Pagination Dots */}
            {images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentIndex(idx);
                            }}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx
                                    ? 'bg-[#6B5B33] dark:bg-[#BDB28E] w-4'
                                    : 'bg-white/40 hover:bg-white/60'
                                }`}
                            aria-label={`Go to image ${idx + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Overlay for depth */}
            <div className="absolute inset-0 ring-1 ring-[#1E1E24]/10 dark:ring-[#FAFAFA]/10 pointer-events-none" />
        </div>
    );
};

export default ImageCarousel;
