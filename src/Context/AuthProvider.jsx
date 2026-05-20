import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../Firebase/firebase.config';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    //?register/createAccount;
    const registerUsers = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const usersInfo = {
       registerUsers
    }
    return (
        <AuthContext value={usersInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;