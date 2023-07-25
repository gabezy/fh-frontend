import React, { ReactNode } from "react";

type UserContextProps = {
  id: string;
  username: string;
  setId: (id: string) => void;
  setUsername: (username: string) => void;
};

export const UserContext = React.createContext({} as UserContextProps);

type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [id, setId] = React.useState("");
  const [username, setUsername] = React.useState("");

  return (
    <UserContext.Provider
      value={{
        id,
        username,
        setId,
        setUsername,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
