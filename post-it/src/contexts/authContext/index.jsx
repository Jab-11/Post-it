import React, { useState, useEffect, useContext } from "react";
import { auth } from "../../authFirebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    const [isEmailUser, setIsEmailUser] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, [])

    async function initializeUser(user) {
        if (user) {
            setCurrentUser({ ...user });
            const isEmail = user.providerData.some(
                (provider) => provider.providerId === "password"
              );
            setIsEmailUser(isEmail);
            // console.log("AUTH CHANGE");
            // console.log(user);
            setUserLoggedIn(true);
            // if(!user.additionalUserInfo.isNewUser){
            // } 
        } else {
            
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }

    const value = {
        userLoggedIn,
        isEmailUser,
        currentUser,
        loading
      };

    return (
        <AuthContext.Provider value={value} >
            {!loading && children}
        </AuthContext.Provider >
    )
}