import React, { createContext, useState, useContext, useEffect } from 'react';

const EstimationContext = createContext(null);

export const useEstimation = () => useContext(EstimationContext);

export const EstimationProvider = ({ children }) => {
  const [property, setProperty] = useState(null);
  const [workOption, setWorkOption] = useState(null);
  const [sizeHouse, setSizeHouse] = useState(null);

  const [nbDoors, setNbDoors] = useState(null);
  const [nbChambreAppartment, setnbChambreAppartment] = useState(null);

  const [additional, setAdditional] = useState(null);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [businessType, setBusinessType] = useState(null);

  const [HowManyBusinesses, setHowManyBusinesses] = useState(null);
  
  const [totalEstimation, setTotalEstimation] = useState(0);
  const calculateTotalEstimation = () => {
    let total = 0;
    
    if (property === 'Maison') { total += 100; } 
    else if (property === 'Appartement') { total += 75; } 
    else if (property === 'Entreprise') { total += 50; }

    if (workOption === 'Self Installation') { total += 100; } 
    else if (workOption === 'Pro Installation') { total += 100; } 

    if (sizeHouse === 'Small') { total += 100; } 
    else if (sizeHouse === 'Moyen') { total += 100; } 
    else if (sizeHouse === 'Large') { total += 100; } 
    else if (sizeHouse === 'Extra Large') { total += 100; } 

    if (nbDoors !== null) { total = total * Number(nbDoors);}
    if (nbChambreAppartment !== null) { total = total * Number(nbChambreAppartment);}
  
    
    // Continue with other options affectings the estimation
    
    setTotalEstimation(total);
  };

  useEffect(() => {
    calculateTotalEstimation();
  }, [
    property, workOption, sizeHouse, nbDoors, additional,
    email, fullName, phoneNumber, businessType, nbChambreAppartment, 
    HowManyBusinesses, totalEstimation
  ])

  const value = {
      property, workOption, sizeHouse, nbDoors, additional,
      email, fullName, phoneNumber, businessType, nbChambreAppartment, 
      HowManyBusinesses, totalEstimation, 
      setProperty, setWorkOption, setSizeHouse, setNbDoors, setAdditional, 
      setEmail, setFullName, setPhoneNumber, setBusinessType, setnbChambreAppartment,
      setHowManyBusinesses
  }

  return (
    <EstimationContext.Provider value={value}>
      {children}
    </EstimationContext.Provider>
  );
};
