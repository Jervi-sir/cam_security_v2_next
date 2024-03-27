export interface Products {
  id: number;
  title: string;
  price: number;
  stock_quantity: number;
  images: string[];
  description: string;
  characteristics: string[];
  brand_name: string;
  category_name: string;
  maintenance_cost: number;
  installation_cost: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  stock_quantity: number;
  images: string[];
  description: string;
  characteristics: string[];
  brand_name: string;
  category_name: string;
  maintenance_cost: number;
  installation_cost: number;
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
  published_date: Date;
  last_modified_date: Date; 
  category: string | null; 
  status: string; 
  tags: string[]; 
  image_url: string[]; 
  views: number; 
};

export interface Article {
  id: number; 
  title: string; 
  author_id: number; 
  content: string; 
  summary: string | null; 
  published_date: Date;
  last_modified_date: Date; 
  category: string | null; 
  status: string; 
  tags: string[]; 
  image_url: string[]; 
  views: number; 
};