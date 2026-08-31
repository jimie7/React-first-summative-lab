function ProjectCard({project}) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
       
        <h3 className="text-gray-600 mb-3">{project.description}</h3>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech)=>
          <span key={tech} className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
            {tech}
          </span>)}
        </div>
    </div>
  )
}
export default ProjectCard