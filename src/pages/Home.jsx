import { useNavigate } from 'react-router-dom';
import authorBg from '../assets/vivek_kar.jpeg';
import AboutAuthor from '../components/AboutAuthor';
import BooksSection from '../components/BooksSection';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="relative w-full min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <div className="relative w-full h-screen">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${authorBg})`,
                        backgroundPosition: 'center 20%',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    {/* Light Theme Overlay: Fades from bottom only */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F0ECE4] via-[#F0ECE4]/60 to-transparent dark:hidden" />

                    {/* Dark Theme Overlay: High clarity focus */}
                    {/* Deep fade from bottom to make text legible */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f10] via-[#0f0f10]/60 to-transparent hidden dark:block" />

                    {/* Targeted vignette: Transparent center is much wider (40%) and focused higher to protect the face/hair */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_40%,#0f0f10_100%)] opacity-70 hidden dark:block mix-blend-multiply" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-16">
                    <h1 className="text-6xl md:text-8xl font-serif text-[#1E1E24] dark:text-[#FAFAFA] mb-6 animate-fade-in tracking-tight">
                        VIVEK KAR
                    </h1>

                    <div className="w-16 h-1 bg-[#6B5B33] dark:bg-[#BDB28E] mb-8 rounded-full opacity-60"></div>

                    <p className="text-xl md:text-3xl text-[#1E1E24]/80 dark:text-[#FAFAFA]/80 font-light italic tracking-wide max-w-2xl leading-relaxed mb-12">
                        "Weaving silence into words, and light into shadows."
                    </p>

                    <button
                        onClick={() => navigate('/books')}
                        className="group relative px-8 py-3 overflow-hidden border border-[#1E1E24]/30 dark:border-[#FAFAFA]/30 hover:border-[#6B5B33] dark:hover:border-[#BDB28E] transition-all duration-300"
                    >
                        <span className="relative z-10 text-[#1E1E24] dark:text-[#FAFAFA] text-sm tracking-[0.2em] font-medium uppercase group-hover:text-[#FAFAFA] dark:group-hover:text-[#1E1E24] transition-colors duration-300">
                            Explore the Work
                        </span>
                        <div className="absolute inset-0 bg-[#6B5B33] dark:bg-[#BDB28E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out"></div>
                    </button>
                </div>

                {/* Simple Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
                    <div className="w-8 h-12 border-2 border-[#1E1E24] dark:border-[#FAFAFA] rounded-full flex justify-center p-2">
                        <div className="w-1 h-2 bg-[#1E1E24] dark:bg-[#FAFAFA] rounded-full"></div>
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
