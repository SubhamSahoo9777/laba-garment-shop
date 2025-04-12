import { createContext, useContext, useState } from "react";

// Create context
const GlobalContext = createContext();

// Custom hook for using context
export const useGlobalContext = () => useContext(GlobalContext);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <GlobalContext.Provider value={{ user, login, logout }}>
      {children}
    </GlobalContext.Provider>
  );
};
