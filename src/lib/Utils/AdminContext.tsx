import { createContext, useState } from 'react';

export const UserContext = createContext<any | null>(null);
export const UserProvider = ({ children }: { children: any }) => {
  const [admin, setAdmin] = useState();
  return (
    <UserContext.Provider value={{ admin, setAdmin }}>
      {children}
    </UserContext.Provider>
  );
};
