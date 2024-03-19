import React, { createContext, useState, useContext } from 'react';

const EstimationContext = createContext(null);

export const useEstimation = () => useContext(EstimationContext);

export const EstimationProvider = ({ children }) => {
  const [property, setProperty] = useState(null);
  const [workOption, setWorkOption] = useState(null);
  const [sizeHouse, setSizeHouse] = useState(null);
  const [nbDoors, setNbDoors] = useState(null);
  const [additional, setAdditional] = useState(null);

  const value = {
    property, setProperty,
    workOption, setWorkOption,
    sizeHouse, setSizeHouse,
    nbDoors, setNbDoors,
    additional, setAdditional,
    
  }

  return (
    <EstimationContext.Provider value={value}>
      {children}
    </EstimationContext.Provider>
  );
};
