type ProjectProps = {
    name: string;
    github: string;
    description: string;
    tags: string[];
    image?: string;
};

const Project = ({ name, github, description, tags, image }: ProjectProps) => {
    return (
        <div className="w-full max-w-2xl p-6 mb-4 border rounded-lg shadow-md">
            {image && (
                <img
                    src={image}
                    alt={`${name} screenshot`}
                    className="w-full h-auto rounded-lg mb-4"
                />
            )}
            <h2 className="text-2xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-700 mb-2">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-gray-200 text-sm text-gray-800 px-2 py-1 rounded"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
            >
                View on GitHub
            </a>
        </div>
    );
};

export default Project;
