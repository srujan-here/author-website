import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Books', path: '/books' },
        { name: 'Blogs', path: '/blogs' },
    ];

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 bg-transparent pt-6 px-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo / Author Name */}
                <Link to="/" className="text-2xl font-serif text-[#1E1E24] dark:text-[#FAFAFA] tracking-wide hover:opacity-80 transition-opacity">
                    Vivek Kar
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-[#1E1E24]/60 dark:text-[#FAFAFA]/70 hover:text-[#6B5B33] dark:hover:text-[#BDB28E] text-sm font-medium tracking-widest uppercase transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-[#1E1E24]/60 dark:text-[#FAFAFA]/70 hover:text-[#6B5B33] dark:hover:text-[#BDB28E] transition-colors focus:outline-none"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-[#1E1E24] dark:text-[#FAFAFA] focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#E8E2D6]/95 dark:bg-[#0f0f10]/95 backdrop-blur-md py-4 shadow-lg border-t border-[#1E1E24]/5 dark:border-[#FAFAFA]/5">
                    <ul className="flex flex-col items-center space-y-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className="text-[#1E1E24] dark:text-[#FAFAFA]/90 hover:text-[#6B5B33] dark:hover:text-[#BDB28E] text-lg font-medium transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <button
                                onClick={() => {
                                    toggleTheme();
                                    setIsMenuOpen(false);
                                }}
                                className="flex items-center space-x-2 text-[#1E1E24] dark:text-[#FAFAFA]/90 hover:text-[#6B5B33] dark:hover:text-[#BDB28E] transition-colors"
                            >
                                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
