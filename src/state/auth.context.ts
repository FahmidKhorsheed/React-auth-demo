import { createContext } from "react";

export interface UserProps {
  user: any | null;
  setUser: (user: any | null) => void;
}

export const AuthContext = createContext<UserProps>({
  user: null,
  setUser: () => undefined,
});
