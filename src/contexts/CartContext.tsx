import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "sonner";

export interface Size {
  id: number;
  name: string;
  price: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  sizes?: Size[];
  price: number;
  popular?: boolean;
}

export interface CartItem {
  id: string; // Composite ID including product ID and size (if applicable)
  productId: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, size?: Size) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  toggleCart: () => void;
  closeCart: () => void;
  openCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Calculate total items and price
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart from localStorage', e);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product, size?: Size) => {
    setItems(prevItems => {
      // Create a unique ID for the cart item
      const cartItemId = size 
        ? `${product.id}-${size.id}`
        : `${product.id}`;
      
      // Check if this item is already in the cart
      const existingItemIndex = prevItems.findIndex(item => item.id === cartItemId);
      
      if (existingItemIndex !== -1) {
        // If the item exists, update its quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        
        toast.success(`Добавлен еще один ${product.name}${size ? ` (${size.name})` : ''}`);
        return updatedItems;
      } else {
        // Otherwise, add a new item to the cart
        const newItem: CartItem = {
          id: cartItemId,
          productId: product.id,
          name: product.name,
          price: size ? size.price : product.price,
          quantity: 1,
          image: product.image,
          size: size?.name
        };
        
        toast.success(`${product.name}${size ? ` (${size.name})` : ''} добавлен в корзину`);
        return [...prevItems, newItem];
      }
    });
  };

  const removeFromCart = (cartItemId: string) => {
    setItems(prevItems => {
      const itemToRemove = prevItems.find(item => item.id === cartItemId);
      if (itemToRemove) {
        toast.info(`${itemToRemove.name} удален из корзины`);
      }
      return prevItems.filter(item => item.id !== cartItemId);
    });
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(cartItemId);
      return;
    }
    
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === cartItemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast.info('Корзина очищена');
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const closeCart = () => setIsCartOpen(false);
  const openCart = () => setIsCartOpen(true);

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
      isCartOpen,
      toggleCart,
      closeCart,
      openCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
