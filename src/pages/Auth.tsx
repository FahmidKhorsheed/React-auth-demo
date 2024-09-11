import React, { useState, useContext } from "react";
import "../styles/auth.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate()

  const handleMethodChange = () => {
    setIsSignup(!isSignup);
  };

  const handleSignup = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/")
      })
      .catch((err) => {
        console.log(err);

        setError(err.message);
      });
  };

  const handleSignin = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/")
      })  
      .catch((error) => {
        const errorMessage = error.message;

        setError(errorMessage);
      });
  };

  return (
    <div className="main">
      <div className="form">
        <h2>{isSignup ? "Sign up" : "Sign in"}</h2>
        <h4>Email</h4>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h4>Password</h4>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <h5 className="error">{error}</h5>}
        {isSignup ? (
          <button onClick={handleSignup}>Sign up</button>
        ) : (
          <button onClick={handleSignin}>Login</button>
        )}
        {isSignup ? (
          <a onClick={handleMethodChange}>Login</a>
        ) : (
          <a onClick={handleMethodChange}>Sign up</a>
        )}
      </div>
    </div>
  );
};

export default Auth;
