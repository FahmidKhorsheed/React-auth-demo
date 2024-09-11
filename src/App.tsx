import React, { useContext } from "react";
import "./styles/app.css";
import { AuthContext } from "./state/auth.context";
import { signOut } from "firebase/auth";
import { auth } from "./config/firebase";

function App() {
  const {user} = useContext(AuthContext)

  const logout = async () => {
    try {
      await signOut(auth)
    } catch(e) {
      console.log(e);
    }
  }

  return <div className="main">Hello {user?.email ?? ""}
   {user && <button onClick={logout}>Logout</button>}
  </div>;
}

export default App;
