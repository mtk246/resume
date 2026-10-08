import ProjectCard from "../components/ProjectCard";

export default function Portfolio() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">My Portfolio</h1>
      <p className="text-lg text-gray-700 mb-8">Here you can find a selection of my projects. Click on any project to learn more!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Project One"
          description="A brief description of project one, highlighting its key features and technologies used."
          link="#"
        />
        <ProjectCard
          title="Project Two"
          description="This project involved building a responsive web application with a focus on user experience."
          link="#"
        />
        <ProjectCard
          title="Project Three"
          description="An exciting project that showcases my skills in backend development and database management."
          link="#"
        />
      </div>
    </div>
  );
}
