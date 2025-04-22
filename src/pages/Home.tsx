import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => (
    <div className="w-full h-full flex flex-col items-center justify-center text-center px-10 pt-25 pb-6">
        {/* Everything that should have vertical spacing */}
        <div className="flex flex-col items-center space-y-5">
            {/* Profile Picture */}
            <img
                src="https://placehold.co/128"
                alt="Profile"
                className="w-48 h-48 rounded-full object-cover shadow-md"
            />

            {/* Heading */}
            <h1 className="text-5xl font-bold">Hi, I’m Nick 👋</h1>

            {/* Status */}
            <div className="flex items-center gap-3 text-xl">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span>Available for hire</span>
            </div>

            {/* Bio Section with Prose */}
            <div className="prose prose-lg dark:prose-invert max-w-4xl transition-colors duration-300">
                <p>
                    I’m a Computer Science graduate with a passion for building, learning, and solving problems.
                </p>
                <p>
                    I'm currently open to new opportunities, with a strong interest in cybersecurity and a passion for solving complex problems. I’m eager to contribute to innovative projects, grow my skills, and make a meaningful impact in the tech industry.
                </p>
            </div>
        </div>

        {/* Contact Info (custom spacing, no prose) */}
        <div className="mt-6 text-lg text-gray-800 dark:text-gray-200 space-y-2 transition-colors duration-300">
            <p>
                <strong>Let’s connect</strong> — I’d love to hear from you.
            </p>
            <p>
                Email:{" "}
                <a
                    href="mailto:cmpnik@gmail.com"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 no-underline"
                >
                    cmpnik@gmail.com
                </a>
            </p>
            <div className="flex items-center justify-center gap-3">
                <span>Find me on:</span>
                <a
                    href="https://linkedin.com/in/nicholas-j-camp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-gray-400 inline-flex items-center gap-1 transition-colors duration-300 no-underline"
                >
                    <FaLinkedin size={22} />
                    LinkedIn
                </a>
                <a
                    href="https://github.com/nicholas-camp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-gray-400 inline-flex items-center gap-1 transition-colors duration-300 no-underline"
                >
                    <FaGithub size={22} />
                    GitHub
                </a>
            </div>
        </div>
    </div>
);

export default Home;
