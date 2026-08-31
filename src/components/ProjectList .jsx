import { useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A modern online shopping platform for a fashion brand.",
    technologies: ["React", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Restaurant Website",
    description: "A responsive website for a local restaurant.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing creative work.",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Mobile Banking App",
    description: "A simple and secure interface for managing finances.",
    technologies: ["React Native", "JavaScript"],
  },
];

function ProjectList() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState(projects);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newProject = {
      id: list.length + 1,
      title,
      description,
      technologies: technologies.split(",").map((tech) => tech.trim()),
    };
    setList([...list, newProject]);

    setTitle("");
    setDescription("");
    setTechnologies("");
  }

  const filteredProjects = list.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-300 rounded-2xl py-2 px-6"
        >
          <p className="text-blue-400">Add project</p>
          <label htmlFor="title">Title</label>
          <br />
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="border rounded-lg px-1"
            type="text"
            id="title"
            required
          />
          <br />
          <label htmlFor="description">Description</label>
          <br />
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="border rounded-lg px-1"
            type="text"
            id="description"
            required
          />
          <br />
          <label htmlFor="tech">Technologies</label>
          <br />
          <input
            onChange={(e) => setTechnologies(e.target.value)}
            value={technologies}
            className="border rounded-lg px-1"
            type="text"
            id="tech"
            required
          />
          <br />
          <input
            className="shadow rounded-lg bg-gray-500 my-3 px-1"
            type="submit"
            value={"Add"}
          />
        </form>
      </div>
      <div className="text-center font-bold">PROJECT LIST </div>

      <div className="flex justify-center mb-2">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="search"
          className="text-center rounded-lg border  border-gray-800 h-5 text-sm"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {filteredProjects.length === 0 && (
        <p className="text-center">Sorry, no projects found!</p>
      )}
    </>
  );
}
export default ProjectList;
