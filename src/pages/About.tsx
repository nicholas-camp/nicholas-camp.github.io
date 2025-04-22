import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => (
    <div className="w-full h-full flex flex-col items-center px-12 pt-20 pb-5">
        {/* Heading */}
        <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight mb-4">About Me</h1>
            <div className="w-12 h-1 bg-gray-300 dark:bg-gray-500 mx-auto rounded-full mb-12 " />
        </div>

        {/* Bio Section */}
        <div className="transition-colors duration-300 prose prose-lg dark:prose-invert max-w-4xl mb-5 ">
            <p>
                Hi, I'm <strong>Nick</strong> — a soon-to-be Computer Science graduate with a strong passion for cybersecurity and software development. I’m driven by the challenge of building secure, efficient, and scalable systems that meet real-world needs.
            </p>

            <p>
                Throughout my studies, I’ve developed a solid foundation in programming, algorithms, and system design. I approach problems with a focus on logical thinking and practical solutions, ensuring both performance and security are prioritized in the applications I build.
            </p>

            <p>
                While my primary focus is on cybersecurity, I’m also eager to explore other opportunities in tech and software development. I’m always seeking new challenges that allow me to apply my problem-solving skills and make a meaningful impact on the industry.
            </p>

            <p>
                In addition to my technical skills, I bring strong analytical and problem-solving abilities, honed through my academic background and hands-on project experience. I thrive in collaborative environments, valuing clear communication and team-driven innovation.
            </p>
        </div>

        {/* Contact Section */}
        <div className="transition-colors duration-300 prose prose-lg dark:prose-invert max-w-4xl w-full">
            <div className="flex items-center space-x-2">
                <span>Find me on:</span>
                <a
                    href="https://linkedin.com/in/nicholas-j-camp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-gray-400 transition-colors duration-300 no-underline"
                >
                    <FaLinkedin size={24} className="mr-1" />
                    <span>LinkedIn</span>
                </a>
                <a
                    href="https://github.com/nicholas-camp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-gray-400 transition-colors duration-300 no-underline"
                >
                    <FaGithub size={24} className="mr-1" />
                    <span>GitHub</span>
                </a>
            </div>

            <div className="flex items-center space-x-2">
                <span>Email:</span>
                <a
                    href="mailto:cmpnik@gmail.com"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 no-underline"
                >
                    cmpnik@gmail.com
                </a>
            </div>
        </div>
    </div>
);

export default About;
