import React from 'react';
import { Recycle, Leaf, Sprout, Wind, Droplets, Sun } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500">
      <div className="text-green-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Recycle className="h-10 w-10" />,
      title: 'Waste Reduction',
      description:
        'Learn effective strategies to minimize waste in your daily life and contribute to a cleaner environment.',
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: 'Sustainable Living',
      description:
        'Discover practical tips for adopting a more sustainable lifestyle that reduces your ecological footprint.',
    },
    {
      icon: <Sprout className="h-10 w-10" />,
      title: 'Community Gardens',
      description:
        'Join local initiatives to create and maintain community gardens that promote biodiversity.',
    },
    {
      icon: <Wind className="h-10 w-10" />,
      title: 'Clean Energy',
      description:
        'Explore renewable energy options and learn how to transition to cleaner power sources for your home.',
    },
    {
      icon: <Droplets className="h-10 w-10" />,
      title: 'Water Conservation',
      description:
        'Implement water-saving techniques that preserve this precious resource for future generations.',
    },
    {
      icon: <Sun className="h-10 w-10" />,
      title: 'Solar Solutions',
      description:
        'Understand how solar technology can be integrated into your home to reduce carbon emissions.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Creating a <span className="text-green-600">Sustainable</span> Future
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our mission is to empower individuals and communities with the knowledge and tools they
            need to make environmentally conscious choices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;