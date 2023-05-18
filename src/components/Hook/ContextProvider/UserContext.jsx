import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from "../../../firebase/firebase.config";

const auth = getAuth(app);
export const UserProvider = createContext(null);
const googleProvider = new GoogleAuthProvider()
const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const createUserByEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUserByEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, []);

    const userInfo = {
        user,
        loading,
        googleLogin,
        createUserByEmail,
        loginUserByEmail,
        logOut
    }
    return (
        <UserProvider.Provider value={userInfo}>
            {children}
        </UserProvider.Provider>
    );
};

export default UserContext;