import ProjectCard from "../components/ProjectCard.tsx";
import projects from "../data/projects";

const Projects = () => {
    return (
        <div className="w-full h-full flex flex-col items-center px-12 pt-12 pb-6">
            <h1 className="text-5xl font-bold tracking-tight mb-4">Projects</h1>
            <div className="w-12 h-1 bg-gray-300 dark:bg-gray-500 mx-auto rounded-full mb-5" />
            <p className="max-w-2xl text-center text-lg mb-7">
                A showcase of things I’ve built — code, design, and ideas brought to life.
            </p>
            {projects.map((project) => (
                <ProjectCard key={project.name} {...project} />
            ))}
        </div>
    );
};

export default Projects;
