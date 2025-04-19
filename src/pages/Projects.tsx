import Project from "../components/Project";
import projects from "../data/projects";

const Projects = () => {
    return (
        <div className="w-full h-full flex flex-col items-center px-12 pt-20 pb-5">
            <h1 className="text-5xl font-bold tracking-tight mb-4">Projects</h1> {/* Adjusted margin */}
            <div className="w-12 h-1 bg-gray-300 dark:bg-gray-500 mx-auto rounded-full mb-8" />
            <p className="max-w-2xl text-center text-lg mb-8">
                A showcase of things I’ve built — code, design, and ideas brought to life.
            </p>
            {projects.map((project) => (
                <Project key={project.name} {...project} />
            ))}
        </div>
    );
};

export default Projects;
