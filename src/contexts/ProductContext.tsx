import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, Discount } from '../types';

interface ProductContextType {
  products: Product[];
  discounts: Discount[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  addDiscount: (discount: Omit<Discount, 'id' | 'usedCount'>) => void;
  updateDiscount: (id: string, discount: Partial<Discount>) => void;
  deleteDiscount: (id: string) => void;
  applyDiscount: (code: string, amount: number) => number;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const defaultProducts: Product[] = [
  {
    id: '1',
    name: 'Diamond Solitaire Ring',
    price: 2999,
    originalPrice: 3499,
    description: 'Stunning 1-carat diamond solitaire ring in 18k white gold setting.',
    category: 'Rings',
    image: 'https://images.pexels.com/photos/1927449/pexels-photo-1927449.jpeg',
    inStock: true,
    featured: true,
    newArrival: true,
    discount: 15,
    rating: 4.8,
    reviews: 124,
    specifications: {
      'Metal': '18k White Gold',
      'Diamond': '1 Carat',
      'Clarity': 'VS1',
      'Color': 'F'
    }
  },
  {
    id: '2',
    name: 'Pearl Drop Earrings',
    price: 599,
    description: 'Elegant freshwater pearl drop earrings with gold accents.',
    category: 'Earrings',
    image: 'https://images.pexels.com/photos/1927428/pexels-photo-1927428.jpeg',
    inStock: true,
    featured: true,
    newArrival: false,
    rating: 4.6,
    reviews: 89,
    specifications: {
      'Metal': '14k Yellow Gold',
      'Pearl': 'Freshwater',
      'Size': '8-9mm'
    }
  },
  {
    id: '3',
    name: 'Tennis Bracelet',
    price: 1299,
    originalPrice: 1499,
    description: 'Classic diamond tennis bracelet with brilliant-cut diamonds.',
    category: 'Bracelets',
    image: 'https://images.pexels.com/photos/1927435/pexels-photo-1927435.jpeg',
    inStock: true,
    featured: false,
    newArrival: true,
    discount: 13,
    rating: 4.9,
    reviews: 156,
    specifications: {
      'Metal': '18k White Gold',
      'Diamonds': '2.5 Total Carats',
      'Length': '7 inches'
    }
  },
  {
    id: '4',
    name: 'Sapphire Pendant Necklace',
    price: 899,
    description: 'Beautiful blue sapphire pendant on delicate gold chain.',
    category: 'Necklaces',
    image: 'https://images.pexels.com/photos/1927440/pexels-photo-1927440.jpeg',
    inStock: true,
    featured: true,
    newArrival: false,
    rating: 4.7,
    reviews: 73,
    specifications: {
      'Metal': '14k Yellow Gold',
      'Gemstone': 'Blue Sapphire',
      'Chain Length': '18 inches'
    }
  },
  {
    id: '5',
    name: 'Rose Gold Wedding Band',
    price: 799,
    description: 'Elegant rose gold wedding band with subtle texture.',
    category: 'Rings',
    image: 'https://images.pexels.com/photos/1927451/pexels-photo-1927451.jpeg',
    inStock: true,
    featured: false,
    newArrival: true,
    rating: 4.5,
    reviews: 92,
    specifications: {
      'Metal': '14k Rose Gold',
      'Width': '4mm',
      'Finish': 'Brushed'
    }
  },
  {
    id: '6',
    name: 'Emerald Stud Earrings',
    price: 1199,
    description: 'Vibrant emerald stud earrings in platinum setting.',
    category: 'Earrings',
    image: 'https://images.pexels.com/photos/1927430/pexels-photo-1927430.jpeg',
    inStock: true,
    featured: true,
    newArrival: false,
    rating: 4.8,
    reviews: 67,
    specifications: {
      'Metal': 'Platinum',
      'Gemstone': 'Natural Emerald',
      'Size': '6mm'
    }
  }
];

const defaultDiscounts: Discount[] = [
  {
    id: '1',
    code: 'WELCOME10',
    type: 'percentage',
    value: 10,
    minAmount: 500,
    expiresAt: '2024-12-31',
    isActive: true,
    usageLimit: 100,
    usedCount: 23
  },
  {
    id: '2',
    code: 'SAVE50',
    type: 'fixed',
    value: 50,
    minAmount: 300,
    expiresAt: '2024-06-30',
    isActive: true,
    usageLimit: 50,
    usedCount: 12
  }
];

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [discounts, setDiscounts] = useState<Discount[]>([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    const savedDiscounts = localStorage.getItem('discounts');
    
    setProducts(savedProducts ? JSON.parse(savedProducts) : defaultProducts);
    setDiscounts(savedDiscounts ? JSON.parse(savedDiscounts) : defaultDiscounts);
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('discounts', JSON.stringify(discounts));
  }, [discounts]);

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...product,
      id: Date.now().toString(),
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const updateProduct = (id: string, productUpdate: Partial<Product>) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...productUpdate } : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const addDiscount = (discount: Omit<Discount, 'id' | 'usedCount'>) => {
    const newDiscount: Discount = {
      ...discount,
      id: Date.now().toString(),
      usedCount: 0,
    };
    setDiscounts(prev => [...prev, newDiscount]);
  };

  const updateDiscount = (id: string, discountUpdate: Partial<Discount>) => {
    setDiscounts(prev => prev.map(d => d.id === id ? { ...d, ...discountUpdate } : d));
  };

  const deleteDiscount = (id: string) => {
    setDiscounts(prev => prev.filter(d => d.id !== id));
  };

  const applyDiscount = (code: string, amount: number): number => {
    const discount = discounts.find(d => 
      d.code === code && 
      d.isActive && 
      new Date(d.expiresAt) > new Date() &&
      (!d.usageLimit || d.usedCount < d.usageLimit) &&
      (!d.minAmount || amount >= d.minAmount)
    );

    if (!discount) return amount;

    if (discount.type === 'percentage') {
      return amount - (amount * discount.value / 100);
    } else {
      return Math.max(0, amount - discount.value);
    }
  };

  return (
    <ProductContext.Provider value={{
      products,
      discounts,
      addProduct,
      updateProduct,
      deleteProduct,
      addDiscount,
      updateDiscount,
      deleteDiscount,
      applyDiscount
    }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}