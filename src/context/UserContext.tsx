import React, { ReactNode } from "react";
import { usePersistedState } from "../hooks/usePersistedState";

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
  const userId = localStorage.getItem("userId") ?? "";
  const [id, setId] = usePersistedState<string>("userId", userId);
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
