import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";

const Home = () => (
    <div className="w-full h-full flex flex-col items-center justify-center text-center px-10 pt-24 pb-6">
        <div className="flex flex-col items-center space-y-6">
            <img
                src={profileImg}
                alt="Profile"
                className="w-48 h-48 rounded-full object-cover"
            />

            <h1 className="text-5xl font-bold">Hi, I’m Nick 👋</h1>

            <div className="flex items-center gap-3 text-2xl">
                <span className="h-3 w-3 rounded-full bg-green-500" />
                <span>Available for hire</span>
            </div>

            <div className="prose prose-xl dark:prose-invert max-w-4xl transition-colors duration-300">
                <p>
                    I’m a Computer Science graduate with a passion for building, learning, and solving problems.
                </p>
                <p>
                    I'm currently open to new opportunities, with a strong interest in cybersecurity and a passion for solving complex problems. I’m eager to contribute to innovative projects, grow my skills, and make a meaningful impact in the tech industry.
                </p>
            </div>
        </div>

        <div className="mt-6 text-xl space-y-3">
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
                    className="hover:text-black dark:hover:text-gray-400 inline-flex items-center gap-1 transition-colors duration-300 no-underline"
                >
                    <FaLinkedin size={24} />
                    LinkedIn
                </a>
                <a
                    href="https://github.com/nicholas-camp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black dark:hover:text-gray-400 inline-flex items-center gap-1 transition-colors duration-300 no-underline"
                >
                    <FaGithub size={24} />
                    GitHub
                </a>
            </div>
        </div>
    </div>
);

export default Home;
