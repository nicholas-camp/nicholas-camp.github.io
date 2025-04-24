import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Posts from './pages/Posts';
import Post from './pages/Post';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

function App() {
    const storedTheme = localStorage.getItem("theme");
    const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const [darkMode, setDarkMode] = useState<boolean>(
        storedTheme ? storedTheme === "dark" : systemDarkMode
    );

    const toggleDarkMode = () => {
        setDarkMode((prev) => {
            const newDarkMode = !prev;
            localStorage.setItem("theme", newDarkMode ? "dark" : "light");
            return newDarkMode;
        });
    };

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div className="w-screen min-h-screen flex flex-col transition-colors duration-300">
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/posts/:url" element={<Post />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;