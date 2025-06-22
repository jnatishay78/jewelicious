export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  image: string;
  images?: string[];
  inStock: boolean;
  featured: boolean;
  newArrival: boolean;
  discount?: number;
  rating: number;
  reviews: number;
  specifications: Record<string, string>;
}

export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  address?: Address;
  isAdmin: boolean;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  shippingAddress: Address;
  paymentMethod: string;
}

export interface Discount {
  id: string;
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  minAmount?: number;
  expiresAt: string;
  isActive: boolean;
  usageLimit?: number;
  usedCount: number;
}