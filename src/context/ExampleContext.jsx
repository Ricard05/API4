import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const ExampleContext = createContext({});

export default function ExampleContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <ExampleContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </ExampleContext.Provider>
  );
}
