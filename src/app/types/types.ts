export interface Category {
  id: number;          
  name: string;
  description?: string | null;

}

export interface Restaurant {
  id: string;          
  name: string;
  description: string;
  rating: number;
  ratingCount: number;
  categoryId: number | null; 
  city: string;
  priceRange: string;
  images: string[];
  featured?: any;
  isFavorite: boolean;
}