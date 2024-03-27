'use client'
import { CartItem } from '@/utils/types';
import React, { createContext, useState, useContext } from 'react';

const CheckoutContext = createContext(null);

export const useCheckout = () => useContext(CheckoutContext);

export const CheckoutProvider = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [address, setAddress] = useState(null);
  const [wilaya, setWilaya] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [orders, setOrders] = useState<CartItem[]>([]);

  const clearCheckout = () => {
    setPhoneNumber(null);
    setFullName(null);
    setAddress(null);
    setWilaya(null);
    setPaymentMethod(null);
    setOrders([]);
  };

  const value = {
    phoneNumber, setPhoneNumber,
    fullName, setFullName,
    address, setAddress,
    wilaya, setWilaya,
    paymentMethod, setPaymentMethod,
    orders, setOrders,
    clearCheckout
  }

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};
