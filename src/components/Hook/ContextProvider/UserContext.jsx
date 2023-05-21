import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from "../../../firebase/firebase.config";
// import { ColorRing } from "react-loader-spinner";

const auth = getAuth(app);
export const UserProvider = createContext(null);
const googleProvider = new GoogleAuthProvider()
const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [spinner, setSpinner] = useState(true);

    // if (spinner) {
    //     <ColorRing
    //         visible={true}
    //         height="80"
    //         width="80"
    //         ariaLabel="blocks-loading"
    //         wrapperStyle={{}}
    //         wrapperClass="blocks-wrapper"
    //         colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    //     />
    // }

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

    const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }

    const userUpdate = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

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
        // setSpinner,
        googleLogin,
        createUserByEmail,
        loginUserByEmail,
        userUpdate,
        resetPassword,
        logOut
    }
    return (
        <UserProvider.Provider value={userInfo}>
            {children}
        </UserProvider.Provider>
    );
};

export default UserContext;