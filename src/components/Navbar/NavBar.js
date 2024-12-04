
import React, { useState, useEffect } from 'react';
import NavLinks from '../Navbar/NavLinks';
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/Garmet logo and iconArtboard 3SVG.svg'; // Correct relative path
import { useLanguage } from '../../context/LanguageContext';

const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true';
    });
    const { language, toggleLanguage, translations } = useLanguage();

    function handleClick() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    useEffect(() => {
        const scrollHandler = () => {
            setTop(window.pageYOffset <= 10);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${
                !top && 'bg-white dark:bg-gray-800 shadow-lg'
            }`}
        >
            <div className="flex flex-row justify-between items-center py-2 px-6">
                {/* Logo Section */}
                <div className="flex flex-row justify-center md:px-12 md:mx-12 items-center text-center font-semibold">
                    <HashLink smooth to="/#hero">
                        <img src={logo} alt="GRAMMET Logo" className="h-8 mr-2" />
                    </HashLink>
                </div>

                {/* Language Toggle */}
                <div className="flex items-center">
                    <button
                        onClick={toggleLanguage}
                        className="p-2 mx-2 rounded-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white focus:outline-none"
                    >
                        {language === 'en' ? '🇫🇷 FR' : '🇬🇧 EN'}
                    </button>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white focus:outline-none mr-4"
                    >
                        {darkMode ? '🌙' : '☀️'}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="group flex flex-col items-center">
                    <button
                        className="p-2 rounded-lg lg:hidden text-blue-900 dark:text-white"
                        onClick={handleClick}
                    >
                        <svg
                            className="h-6 w-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Desktop NavLinks */}
                    <div className="hidden space-x-6 lg:inline-block p-5">
                        <NavLinks />
                    </div>

                    {/* Mobile NavLinks */}
                    <div
                        className={`fixed transition-transform duration-300 ease-in-out flex justify-center left-0 w-full h-auto rounded-md p-24 bg-white dark:bg-gray-800 lg:hidden shadow-xl top-14 ${
                            isOpen ? 'block' : 'hidden'
                        }`}
                    >
                        <div className="flex flex-col space-y-6">
                            <NavLinks />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;