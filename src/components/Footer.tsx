import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="mt-6 mb-6">
            <div className="font-medium flex justify-center items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                <a
                    href="https://github.com/nicholas-camp"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub className="w-5 h-5 hover:text-black dark:hover:text-gray-300" />
                </a>
                <span>© {new Date().getFullYear()} Nick Camp. All rights reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
