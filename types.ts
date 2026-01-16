export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Brand {
  name: string;
  logo?: string; // Optional logo URL
  category: 'CAR' | 'PART';
}