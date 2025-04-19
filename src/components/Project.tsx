type ProjectProps = {
    name: string;
    github: string;
    description: string;
    tags: string[];
};

const Project = ({ name, github, description, tags }: ProjectProps) => {
    return (
        <div className="w-full max-w-4xl p-5 mb-5 rounded-xl border border-gray-300 dark:border-gray-700 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800">
            <h2 className="text-3xl font-semibold mb-5">{name}</h2>

            <div className="flex flex-wrap gap-2 mb-5">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <p className="mb-5 text-gray-700 dark:text-gray-300">{description}</p>
            <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
                View on GitHub
            </a>
        </div>
    );
};

export default Project;
