import {  createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

export const AuthContext = createContext();

const AuthProvider =  ({chlidren}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        if(loading) {
            return 'Loading';
        }

    }, []);
    
    return <AuthContext.Provider value={user}>{chlidren}</AuthContext.Provider>
}

export default AuthProvider;