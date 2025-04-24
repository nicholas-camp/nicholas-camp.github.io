type ProjectProps = {
    name: string;
    tags: string[];
    description: string;
    github: string;
};

const ProjectCard = ({ name, tags, description, github }: ProjectProps) => {
    return (
        <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-4xl p-6 mb-6 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
            <h2 className="text-3xl font-semibold mb-4">{name}</h2>

            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-sm font-medium px-3 py-1 rounded-full bg-gray-200 text-gray-900 dark:bg-gray-600 dark:text-gray-200"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <p className="mb-6">{description}</p>

            <span className="text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors duration-300">
                View on GitHub
            </span>
        </a>
    );
};

export default ProjectCard;