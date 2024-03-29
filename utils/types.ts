export interface Products {
  id: number;
  title: string;
  price: number;
  price_old: number | null;
  promo_percentage: number | null;
  stock_quantity: number;
  images: string[];
  description: string;
  characteristics: string[];
  brand_name: string;
  category_name: string;
  maintenance_cost: number;
  installation_cost: number;
  views: number | null;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  price_old: number | null;
  promo_percentage: number | null;
  stock_quantity: number;
  images: string[];
  description: string;
  characteristics: string[];
  brand_name: string;
  category_name: string;
  maintenance_cost: number;
  installation_cost: number;
  views: number | null;
}

export interface CartItem extends Product {
  amount: number;
}

export interface Articles {
  id: number; 
  title: string; 
  author_id: number; 
  content: string; 
  summary: string | null; 
  published_date: Date | null;
  last_modified_date: Date | null; 
  category: string | null; 
  status: string; 
  tags: string[]; 
  images: string[]; 
  views: number; 
};

export interface Article {
  id: number; 
  title: string; 
  author_id: number| null; 
  content: string; 
  summary: string | null; 
  published_date: Date | null;
  last_modified_date: Date | null; 
  category: string | null; 
  status: string; 
  tags: string[]; 
  images: string[]; 
  views: number; 
};