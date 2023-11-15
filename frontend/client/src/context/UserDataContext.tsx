import { createContext, useState, useCallback, ReactNode } from 'react';

type User = {
  id: number;
  last_login: Date;
  email: string;
  name: string;
  surname: string;
  birthday: Date;
  created_at: Date;
  is_active: boolean;
};

export type UserContextType = {
  user: User | null;
  sigIn: (data: User) => void;
  logOut: () => void;
};

export const UserAuth = createContext<UserContextType>({
  user: null,
  sigIn: (data: User) => {},
  logOut: () => {},
});

interface UserDataContextProps {
  children: ReactNode;
}

export function UserDataContextProvider({ children }: UserDataContextProps) {
  const [userData, setUserData] = useState<User | null>(null);

  const sigIn = useCallback( (data: User) => {
    setUserData(data);
  },[]);

  const logOut = useCallback(() => {
    setUserData(null);
  }, []);

  const context = {
    user: userData,
    sigIn: sigIn,
    logOut: logOut,
  };

  return (
    <UserAuth.Provider value={context}>
      {children}
    </UserAuth.Provider>
  );
}