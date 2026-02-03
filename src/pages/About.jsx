import authorPortrait from '../assets/vivek_kar.jpeg';

const About = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

                    {/* Left Column - Biography */}
                    <div className="space-y-8 md:pr-8">
                        <h1 className="text-5xl md:text-7xl font-serif mb-12 tracking-tight text-[#1E1E24] dark:text-[#FAFAFA]">
                            Vivek Kar
                        </h1>

                        <div className="space-y-6 text-[#1E1E24]/80 dark:text-[#FAFAFA]/80 leading-relaxed">
                            <p className="text-lg md:text-xl italic font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Vivek Kar is an ISB Hyderabad alumnus with 18 years of experience in
                                senior corporate leadership roles and a brief tenure consulting for the
                                Andhra Pradesh government. A telecom professional by day and an artist
                                by instinct, he has spent years sketching, painting, and capturing the
                                world in line and colour. Threads of Light marks his foray into fiction.
                            </p>

                            <p className="text-lg md:text-xl italic font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Growing up in a family that moved frequently across northern India—
                                Dhanbad, Lucknow, Kanpur, Saharanpur, Kolkata—Vivek found his first
                                true sense of belonging in Dehradun. His formative years in the Doon
                                valley inspired the vivid emotional landscape of Threads of Light, where
                                the city becomes more than a backdrop; it becomes memory, muse, and
                                quiet companion.
                            </p>

                            <p className="text-lg md:text-xl italic font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
                                An avid traveller with a deep curiosity for people, places, and the
                                stories that shape them, Vivek has explored much of India and beyond.
                                For the last sixteen years, he has made Mumbai his home, where he
                                continues to blend memory, observation, and creative exploration—now
                                as an author.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Author Photo */}
                    <div className="relative">
                        <div className="relative aspect-[3/4] max-w-lg mx-auto md:ml-auto">
                            {/* Photo Container */}
                            <div className="relative w-full h-full overflow-hidden bg-transparent shadow-2xl shadow-[#1E1E24]/10 dark:shadow-black/50">
                                <img
                                    src={authorPortrait}
                                    alt="Vivek Kar - Author Portrait"
                                    className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                                />
                                {/* Subtle border overlay */}
                                <div className="absolute inset-0 ring-1 ring-[#1E1E24]/10 dark:ring-[#FAFAFA]/10" />
                            </div>

                            {/* Decorative border element */}
                            <div className="absolute -bottom-6 -right-6 w-full h-full border border-[#1E1E24]/10 dark:border-[#FAFAFA]/10 -z-10 hidden md:block" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
