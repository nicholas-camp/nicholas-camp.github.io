type ProjectProps = {
    name: string;
    github: string;
    description: string;
    tags: string[];
};

const Project = ({ name, github, description, tags }: ProjectProps) => {
    return (
        <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-4xl p-5 mb-5 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
            <h2 className="text-3xl font-semibold mb-5">{name}</h2>

            <div className="flex flex-wrap gap-2 mb-5">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-sm font-medium px-3 py-1 rounded-full bg-gray-200 text-gray-900 dark:bg-gray-600 dark:text-gray-200"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <p className="mb-5 text-gray-700 dark:text-gray-300 transition-colors duration-300">{description}</p>

            <span className="text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors duration-300">
                View on GitHub
            </span>
        </a>
    );
};

export default Project;
