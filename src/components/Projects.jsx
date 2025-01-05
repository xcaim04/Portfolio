import Card from "./Card";
import { useState, useEffect } from "react";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/DB/projects.json")
            .then((response) => response.json())
            .then((data) => setProjects(data.projects))
            .catch((error) => console.error("Error loading JSON:", error));
    }, []);

    return (
        <div id="projects" className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
            <div className="flex flex-wrap justify-center gap-5">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        url={project.url}
                        title={project.title}
                        imageUrl={project.imageUrl}
                        technologies={project.technologies}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
