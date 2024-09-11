import React, { useEffect }  from "react";
import { useState } from "react";
import { AuthContext } from "./auth.context";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log(currentUser);
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
