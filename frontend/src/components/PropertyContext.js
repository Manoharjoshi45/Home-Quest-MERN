// PropertyContext.js
import React, { createContext, useReducer } from 'react';
import { propertyReducer, initialState } from './PropertyReducer';

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(propertyReducer, initialState);

  return (
    <PropertyContext.Provider value={{ state, dispatch }}>
      {children}
    </PropertyContext.Provider>
  );
};
