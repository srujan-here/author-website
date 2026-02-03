import ImageCarousel from '../components/ImageCarousel';
import { books } from '../data/books';

const Books = () => {
    // For now, display the first book (Threads of Light)
    const book = books[0];

    return (
        <div className="relative w-full min-h-screen">
            {/* Page Header */}
            <div className="text-center pt-24 pb-16 px-4">
                <h1 className="text-6xl md:text-8xl font-serif mb-4 tracking-tight text-[#1E1E24] dark:text-[#FAFAFA]">
                    Library
                </h1>
                <p className="text-[#1E1E24]/50 dark:text-[#FAFAFA]/40 italic text-lg md:text-xl font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
                    A collection of works and words.
                </p>
            </div>

            {/* Book Display Section */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

                    {/* Left Column - Book Cover */}
                    <div className="relative">
                        <div className="relative aspect-[3/4] max-w-md mx-auto md:mx-0 shadow-2xl shadow-[#1E1E24]/10 dark:shadow-black/50 overflow-hidden">
                            <ImageCarousel images={book.images} title={book.title} />
                        </div>
                    </div>

                    {/* Right Column - Book Details */}
                    <div className="space-y-6">
                        {/* Book Title */}
                        <h2 className="text-4xl md:text-6xl font-serif text-[#6B5B33] dark:text-[#BDB28E] leading-tight transition-colors">
                            {book.title}
                        </h2>

                        {/* Genre */}
                        <p className="text-xs tracking-[0.3em] text-[#1E1E24]/50 dark:text-[#FAFAFA]/40 uppercase">
                            {book.genre}
                        </p>

                        {/* Divider */}
                        <div className="w-full h-px bg-[#1E1E24]/10 dark:bg-[#FAFAFA]/10"></div>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl italic text-[#1E1E24]/80 dark:text-[#FAFAFA]/80 font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
                            {book.subtitle}
                        </p>

                        {/* Description */}
                        <div className="space-y-4 text-[#1E1E24]/70 dark:text-[#FAFAFA]/70 leading-relaxed text-base md:text-lg italic font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
                            <p>
                                Set in the lush, rain-soaked valleys of late 1990s Dehradun, Threads of Light is a
                                lyrical coming-of-age tale that follows Vid, a boy teetering on the edge between
                                childhood and adulthood. As friendships blossom and falter, first loves ignite and
                                fade, and dreams unravel beneath the weight of expectation, Vid navigates the
                                bittersweet rhythms of growing up in a world on the cusp of change.
                            </p>

                            <p>
                                Through the corridors of school, the chaos of monsoon afternoons, and the gentle
                                rituals of family life, Vid's journey becomes a meditation on memory, identity, and
                                the invisible threads of hope that bind us—even as everything else falls apart.
                                With vivid cultural detail and a cast of unforgettable characters, Vivek Kar's
                                debut is a tender, nostalgic portrait of youth, loss, and the quiet triumphs that
                                shape who we become.
                            </p>

                            <p>
                                For anyone who has ever longed for belonging, mourned a first heartbreak, or
                                found solace in the small, luminous moments of ordinary days, Threads of Light is
                                a story to cherish.
                            </p>
                        </div>

                        {/* Purchase Links */}
                        <div className="pt-8">
                            <h3 className="text-xs tracking-[0.3em] text-[#1E1E24]/50 dark:text-[#FAFAFA]/40 uppercase mb-6">
                                Available At
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {book.purchaseLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative flex items-center justify-center gap-2 px-4 py-3 border border-[#1E1E24]/10 dark:border-[#FAFAFA]/10 text-xs tracking-wider transition-all duration-300 overflow-hidden"
                                    >
                                        <div className="relative z-10 flex items-center gap-2 text-[#1E1E24] dark:text-[#FAFAFA] group-hover:text-[#FAFAFA] dark:group-hover:text-[#1E1E24] transition-colors duration-300">
                                            {/* Icon */}
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                {link.icon === 'book' ? (
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                ) : (
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                                )}
                                            </svg>
                                            <span>{link.name}</span>
                                        </div>
                                        <div className="absolute inset-0 bg-[#6B5B33] dark:bg-[#BDB28E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out"></div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Books;
