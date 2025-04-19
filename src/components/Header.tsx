import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';

const Header = () => {
    const storedTheme = sessionStorage.getItem('theme');
    const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [darkMode, setDarkMode] = useState(() => {
        if (storedTheme) return storedTheme === 'dark';
        return systemDarkMode;
    });

    useEffect(() => {
        const root = window.document.documentElement;

        if (darkMode) {
            root.classList.add('dark');
            sessionStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            sessionStorage.setItem('theme', 'light');
        }

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleSystemThemeChange = (e: MediaQueryListEvent) => {
            setDarkMode(e.matches);
        };

        mediaQuery.addEventListener('change', handleSystemThemeChange);
        return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode((prev) => !prev);

    return (
        <header
            className="w-full flex justify-between items-center px-6 py-3 transition-all"
            style={{ backgroundColor: 'var(--bg-color)' }}
        >
            <nav className="flex gap-4 text-lg">
                {['Home', 'About', 'Projects', 'Posts'].map((label) => {
                    const path = label === 'Home' ? '/' : `/${label.toLowerCase()}`;
                    return (
                        <NavLink
                            key={label}
                            to={path}
                            className={({ isActive }) =>
                                `text-xl px-3 py-1 ${
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
