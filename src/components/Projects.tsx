import React from 'react';
import { Users, Calendar, MapPin } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  participants: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  date,
  location,
  participants,
}) => {
  const handleJoinProject = () => {
    // In a real application, this would open a modal or navigate to a registration page
    alert(`Thanks for your interest in ${title}! In a real application, this would open a registration form.`);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-green-600" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-green-600" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-green-600" />
            <span>{participants} participants</span>
          </div>
        </div>
        <button
          onClick={handleJoinProject}
          className="mt-5 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
        >
          Join Project
        </button>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Urban Tree Planting',
      description:
        'Help increase urban green coverage by planting trees in city neighborhoods that need more shade and cleaner air.',
      image: 'https://images.pexels.com/photos/4488636/pexels-photo-4488636.jpeg',
      date: 'Ongoing - Every Saturday',
      location: 'Various City Parks',
      participants: 156,
    },
    {
      title: 'Beach Cleanup Initiative',
      description:
        'Join our monthly beach cleanup to remove plastic waste and debris from our local shorelines and protect marine life.',
      image: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg',
      date: 'First Sunday of Every Month',
      location: 'Coastal Beaches',
      participants: 89,
    },
    {
      title: 'Community Composting',
      description:
        'Learn how to reduce food waste through community composting programs that turn organic matter into rich soil.',
      image: 'https://images.pexels.com/photos/4505169/pexels-photo-4505169.jpeg',
      date: 'Workshops Every Third Friday',
      location: 'Community Gardens',
      participants: 42,
    },
  ];

  const handleViewAllProjects = () => {
    // In a real application, this would navigate to a full projects listing page
    alert('In a real application, this would navigate to a full projects listing page.');
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Be part of the change by participating in our community-driven environmental initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={handleViewAllProjects}
            className="bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;