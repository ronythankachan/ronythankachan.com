export interface NavLink {
  label: string;
  href: string;
}

export interface ResourceItem extends NavLink {
  icon: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  hoverColor: string;
} 