import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/Firebase";

export const Authcontext = createContext();
const auth = getAuth(app);

const Authprovider = ({ children }) => {
  const [user, setuser] = useState(null);

  const signwithregister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signwithlogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };
  const signwithgoogle = (provider) => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("auth state changed", currentuser);
      setuser(currentuser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authinfo = {
    user,
    signwithregister,
    signwithlogin,
    logout,
    signwithgoogle,
  };
  return (
    <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
  );
};

export default Authprovider;
