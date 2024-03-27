'use client'
import { CartItem } from '@/utils/types';
import React, { createContext, useContext, useEffect, useState } from 'react';

// Define the context
const CartContext = createContext(null);

export const useCart = () => useContext(CartContext);

// Create a provider component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>(() => {
        // Check if we're running in the browser and localStorage is available
        if (typeof window !== 'undefined') {
            const localCart = localStorage.getItem('cart');
            return localCart ? JSON.parse(localCart) : [];
        }
        return [];
    });

    useEffect(() => {
        // Check if we're running in the browser before trying to access localStorage
        if (typeof window !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    const addToCart = (product, quantityToAdd = 1) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            setCart(cart.map(item =>
                item.id === product.id ? { ...item, amount: item.amount + quantityToAdd } : item
            ));
        } else {
            setCart([...cart, { ...product, amount: quantityToAdd }]);
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, amount) => {
        setCart(cart.map(item =>
            item.id === productId ? { ...item, amount } : item
        ));
    };

    const increaseQuantity = (productId) => {
      setCart(cart.map(item =>
          item.id === productId && item.amount < 100 ? { ...item, amount: item.amount + 1 } : item
      ));
    };

    const decreaseQuantity = (productId) => {
      setCart(cart.map(item =>
          item.id === productId && item.amount > 1 ? { ...item, amount: item.amount - 1 } : item
      ));
    };
    
    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    // Calculate total amount for equipment
    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.amount, 0);

    // Calculate total estimated maintenance
    const totalInstallation = cart.reduce((acc, item) => acc + (item.installation_cost || 0) * item.amount, 0);

    return (
      <CartContext.Provider value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalAmount,
        totalInstallation
      }}>
          {children}
      </CartContext.Provider>
  );
};
