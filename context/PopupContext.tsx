import React, { createContext, useState, useContext } from 'react';

const PopupContext = createContext(null);

export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <PopupContext.Provider value={{ showPopup, togglePopup }}>
      {children}
    </PopupContext.Provider>
  );
};
