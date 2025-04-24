import { useState, useMemo, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiSun, HiMoon, HiMenu, HiX } from "react-icons/hi";

interface HeaderProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    const navLinks = useMemo(() => {
        return ["Home", "About", "Projects", "Posts"].map((label) => {
            const path = label === "Home" ? "/" : `/${label.toLowerCase()}`;
            return (
                <NavLink
                    key={label}
                    to={path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                        `${menuOpen ? "text-3xl" : "text-2xl"} ${
                            isActive ? "font-bold underline underline-offset-4" : ""
                        }`
                    }
                >
                    {label}
                </NavLink>
            );
        });
    }, [menuOpen]);

    return (
        <>
            <header className="w-full px-6 py-4 flex items-center justify-between z-50 relative transition-all duration-300 ease-in-out">
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
                        style={{ cursor: "pointer" }}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
                    </button>
                </div>

                <nav className="hidden md:flex gap-12 items-center">{navLinks}</nav>

                <div className="flex items-center justify-center">
                    <button
                        onClick={toggleDarkMode}
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700"
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? (
                            <HiSun className="w-6 h-6 text-yellow-500" />
                        ) : (
                            <HiMoon className="w-6 h-6 text-blue-500" />
                        )}
                    </button>
                </div>
            </header>

            <div
                className={`fixed inset-0 z-40 flex flex-col items-center justify-center space-y-12 text-center transition-all duration-300 ease-in-out ${
                    menuOpen
                        ? "opacity-100 pointer-events-auto bg-[var(--bg-color)] bg-opacity-70 dark:bg-[var(--bg-color)] dark:bg-opacity-70"
                        : "opacity-0 pointer-events-none"
                }`}
            >
                {menuOpen && navLinks}
            </div>
        </>
    );
};

export default Header;
