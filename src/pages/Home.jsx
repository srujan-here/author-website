import { useNavigate } from 'react-router-dom';
import authorBg from '../assets/vivek_kar.jpeg';
import AboutAuthor from '../components/AboutAuthor';
import BooksSection from '../components/BooksSection';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="relative w-full min-h-screen bg-white dark:bg-black overflow-x-hidden">
            {/* Hero Section */}
            <div className="relative w-full h-screen">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${authorBg})`,
                        backgroundPosition: 'center 20%', // Adjusted focus to upper center for portrait
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 backdrop-blur-[1px]" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-16">
                    <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 animate-fade-in tracking-tight">
                        VIVEK KAR
                    </h1>

                    <div className="w-16 h-1 bg-amber-600/60 mb-8 rounded-full"></div>

                    <p className="text-xl md:text-3xl text-gray-200 font-light italic tracking-wide max-w-2xl leading-relaxed mb-12">
                        "Weaving silence into words, and light into shadows."
                    </p>

                    <button
                        onClick={() => navigate('/books')}
                        className="group relative px-8 py-3 overflow-hidden border border-white/30 hover:border-white/80 transition-all duration-300"
                    >
                        <span className="relative z-10 text-white text-sm tracking-[0.2em] font-medium uppercase group-hover:text-black transition-colors duration-300">
                            Explore the Work
                        </span>
                        <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out"></div>
                    </button>
                </div>

                {/* Simple Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
                    <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center p-2">
                        <div className="w-1 h-2 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <AboutAuthor />

            {/* Books Section */}
            <BooksSection />
        </div>
    );
};

export default Home;
