import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    //?register/createAccount;
    const registerUsers = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    //?Login/signIn;
    const logInUsers = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    //?Social login;
    const googleLogIn = ()=>{
        return signInWithPopup(auth,googleProvider)
    }
    //?LogOut;
    const logOutUsers = ()=>{
        return signOut(auth)
    }
    //!update profile;
    const updateUserProfile = (profile)=>{
        return updateProfile(auth.currentUser,profile)
    }
    //?OnAuthStateChange;
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const usersInfo = {
        registerUsers,
        logInUsers,
        googleLogIn,
        logOutUsers,
        user,
        loading,
        updateUserProfile
    }
    return (
        <AuthContext value={usersInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;