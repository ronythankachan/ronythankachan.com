import Link from 'next/link';

interface ResourceItem {
  icon: string;
  label: string;
  href: string;
}

interface ResourceListProps {
  title: string;
  items: ResourceItem[];
  textSize?: string;
}

const ResourceList = ({ title, items, textSize = "text-xl" }: ResourceListProps) => {
  return (
    <div>
      <h3 className={`${textSize} font-serif mb-4`}>{title}</h3>
      <div className="space-y-4">
        {items.map((item) => (
          <Link 
            key={item.label}
            href={item.href} 
            className={`flex items-center gap-3 ${textSize} hover:underline`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResourceList; 