import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.Config";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);
// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, SetUser] = useState([]);
  const [loading, SetLoading] = useState(true);

  console.log(auth.currentUser);
  // sign up with email and password
  const SignUpWithEmail = (email, password) => {
    SetLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email and password
  const LogInWithEmail = (email, password) => {
    SetLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // add name and photo (photoURL)
  const addNameAndPhoto = (name, photoURL) => {
    // here we should use auth.currentUser instead of user because it takes time to update the user and so here found a null user and can't be updated.
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  // sign out
  const LogOut = () => {
    SetLoading(true);
    return signOut(auth);
  };

  //google sign in
  const GoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // catching user when refreshing
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      SetUser(currentUser);
      // get and set token to local storage
      if (currentUser) {
        axios
          .post("https://bistro-boss-server-gray-nu.vercel.app/jwt", {
            email: currentUser.email,
          })
          .then((data) => {
            // console.log("data token : ", data);
            localStorage.setItem("jwt-access-token", data.data.token);
            SetLoading(false);
          });
      } else {
        localStorage.removeItem("jwt-access-token");
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    SignUpWithEmail,
    LogInWithEmail,
    user,
    loading,
    LogOut,
    addNameAndPhoto,
    GoogleSignIn,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
