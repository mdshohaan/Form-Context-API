import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { loading, setLoading } = useState(true);
  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    setLoading(true);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    setLoading(true);
  };
  const signOutUser = () => {
    return signOut(auth);
  };
const signInGoogle = ()=>{
 return signInWithPopup(auth,provider)

}

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const info = {
    signInGoogle,
    loading,
    signOutUser,
    user,
    signInUser,
    createUser,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
