interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <span className="text-blue-600 hover:underline">View Project &rarr;</span>
    </a>
  );
}
