import { createContext, useState } from 'react';

export const UserContext = createContext<any | null>(null);
export const UserProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
