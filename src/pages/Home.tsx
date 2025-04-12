import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Home = () => (
    <div className="w-full h-full flex flex-col items-center justify-center text-center px-4 space-y-5">
        {/* Profile Picture */}
        <img
            src="https://placehold.co/128"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover shadow-lg"
        />

        {/* Heading */}
        <h1 className="text-5xl font-bold">Hi, I’m Nick 👋</h1>

        {/* Subtle status */}
        <div className="flex items-center gap-2 text-lg text-gray-500 dark:text-gray-400">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>Available for freelance</span>
        </div>

        {/* Subtitle */}
        <p className="text-xl max-w-xl text-gray-600 dark:text-gray-400">
            Welcome to my portfolio — developer, designer, and dreamer.
        </p>

        {/* Short Bio */}
        <p className="text-md max-w-xl text-gray-500 dark:text-gray-400">
            I love building clean, performant web apps and exploring new technologies. Currently focused on React, TypeScript, and UI design.
        </p>

        {/* CTA Button */}
        <a
            href="/projects"
            className="mt-2 inline-block px-6 py-2 rounded-full transition hover:opacity-90"
            style={{
                backgroundColor: 'var(--text-color)',
                color: 'var(--bg-color)',
            }}
        >
            View My Work
        </a>

        {/* Social Links */}
        <div className="flex gap-6 mt-2">
            <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            >
                <FaGithub size={28} />
            </a>
            <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200 transition"
            >
                <FaLinkedin size={28} />
            </a>
        </div>

        {/* Contact Me Section */}
        <div className="mt-4 space-y-1">
            <p className="text-xl text-gray-600 dark:text-gray-400">
                Interested in working together? Feel free to reach out!
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400">
                Email: <a href="mailto:someone@example.com" className="text-blue-500 dark:text-blue-400">someone@example.com</a>
            </p>
        </div>
    </div>
)

export default Home
