import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../Firebase/firebase.config';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    //?register/createAccount;
    const registerUsers = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //?Login/signIn;
    const logInUsers = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const usersInfo = {
       registerUsers,
       logInUsers
    }
    return (
        <AuthContext value={usersInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;