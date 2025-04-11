import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi'; // Importing icons

const Header = () => {
    // Check if there's a theme stored in sessionStorage
    const storedTheme = sessionStorage.getItem('theme');

    // Get the system's default theme
    const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Initialize darkMode state based on sessionStorage or system preference
    const [darkMode, setDarkMode] = useState(() => {
        if (storedTheme) {
            return storedTheme === 'dark'; // If theme is stored in sessionStorage, use it
        }
        return systemDarkMode; // If no theme in sessionStorage, use system's theme
    });

    // Apply the theme whenever darkMode state changes
    useEffect(() => {
        const root = window.document.documentElement;

        if (darkMode) {
            root.classList.add('dark');
            sessionStorage.setItem('theme', 'dark'); // Save the theme in sessionStorage
        } else {
            root.classList.remove('dark');
            sessionStorage.setItem('theme', 'light'); // Save the theme in sessionStorage
        }

        // Listen for system theme changes and update darkMode if needed
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleSystemThemeChange = (e: MediaQueryListEvent) => {
            setDarkMode(e.matches); // Update darkMode based on system preference
        };

        mediaQuery.addEventListener('change', handleSystemThemeChange);

        // Cleanup listener on unmount
        return () => {
            mediaQuery.removeEventListener('change', handleSystemThemeChange);
        };
    }, [darkMode]);

    // Toggle dark mode manually
    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        <header className="sticky top-0 z-10 w-full flex justify-between items-center px-6 py-4">
            <nav className="flex gap-2 sm:gap-4 text-lg">
                {['Home', 'About', 'Projects', 'Posts'].map((label) => {
                    const path = label === 'Home' ? '/' : `/${label.toLowerCase()}`;
                    return (
                        <NavLink
                            key={label}
                            to={path}
                            className={({ isActive }) =>
                                `text-xl px-3 py-1 transition-colors duration-200 ${
                                    isActive ? 'font-bold underline underline-offset-4' : ''
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    );
                })}
            </nav>
            <button
                onClick={toggleDarkMode}
                className="w-10 h-10 cursor-pointer rounded-full flex items-center justify-center bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700"
            >
                {darkMode ? (
                    <HiSun className="w-5 h-5 text-yellow-500" />
                ) : (
                    <HiMoon className="w-5 h-5 text-blue-500" />
                )}
            </button>



        </header>
    );
};

export default Header;
