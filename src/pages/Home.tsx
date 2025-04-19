import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => (
    <div className="w-full h-full flex flex-col items-center justify-center text-center space-y-5 px-10 pt-30 pb-5">
    {/* Profile Picture */}
        <img
            src="https://placehold.co/128"
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover shadow-md mb-5"
        />

        {/* Heading */}
        <h1 className="text-5xl font-bold">Hi, I’m Nick 👋</h1>

        {/* Status */}
        <div className="flex items-center gap-2 text-lg">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span>Available for freelance</span>
        </div>

        {/* Tagline */}
        <p className="text-xl max-w-xl">
            Welcome to my portfolio — developer, designer, and dreamer.
        </p>

        {/* Short Bio */}
        <p className="text-lg max-w-xl text-gray-700 dark:text-gray-300">
            I love building clean, performant web apps and exploring new technologies. Currently focused on React, TypeScript, and UI design.
        </p>

        {/* CTA Button */}
        <a
            href="/projects"
            className="mt-2 inline-block px-5 py-2 text-base rounded-full transition hover:opacity-90 shadow"
            style={{
                backgroundColor: 'var(--text-color)',
                color: 'var(--bg-color)',
            }}
        >
            View My Work
        </a>

        {/* Social Links */}
        <div className="flex gap-5 mt-2">
            <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithub size={26} />
            </a>
            <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin size={26} />
            </a>
        </div>

        {/* Contact Info */}
        <div className="mt-2 space-y-1">
            <p className="text-xl font-medium">
                Interested in working together? Feel free to reach out!
            </p>
            <p className="text-lg">
                Email:{' '}
                <a
                    href="mailto:someone@example.com"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                >
                    someone@example.com
                </a>
            </p>
        </div>
    </div>
);

export default Home;
