
export type Theme = 'light' | 'dark';
export type Direction = 'ltr' | 'rtl';

export interface FoodTruck {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  image: string;
  distance: string;
  status: 'Open' | 'Closed' | 'Moving';
  priceRange: string;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}
