import Link from 'next/link';

const ServiceCard = ({ title, description, link }) => (
  <Link href={link} className="block">
    <div className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </Link>
);

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ServiceCard
        title="Service 1"
        description="Description of service 1."
        link="/service1"
      />
      <ServiceCard
        title="Service 2"
        description="Description of service 2."
        link="/service2"
      />
      <ServiceCard
        title="Service 3"
        description="Description of service 3."
        link="/service3"
      />
    </div>
  );
};

export default Services; 