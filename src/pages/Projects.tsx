import Project from "../components/Project";
import projects from "../data/projects";

const Projects = () => {
    return (
        <div className="w-full flex flex-col items-center px-4 pt-8">
            <h1 className="text-4xl font-bold mb-6">Projects</h1>
            <p className="max-w-2xl text-center text-lg">
                A showcase of things I’ve built — code, design, and ideas brought to life.
            </p>
            {projects.map((project) => (
                <Project key={project.name} {...project} />
            ))}
        </div>
    );
};

export default Projects;