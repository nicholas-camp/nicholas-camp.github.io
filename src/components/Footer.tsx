import { FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="mt-5 mb-5">
            <div className="font-medium flex justify-center items-center gap-2 py-2 text-sm text-gray-500 dark:text-gray-500 transition-colors duration-300">
                <a
                    href="https://github.com/nicholas-camp"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub className="w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-gray-300 transition-colors duration-300" />
                </a>
                <span>© {new Date().getFullYear()} Nick Camp. All rights reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
