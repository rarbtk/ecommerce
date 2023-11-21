import { createContext, useContext, useEffect } from "react";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

export const authContext = createContext();
export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error("There is no context");

    return context;
}



export function AuthProvider({ children }) {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();
    const signUp = async (email, password, name, lastName) => {

        try {
            await createUserWithEmailAndPassword(auth, email, password, name, lastName)

        } catch (err) {
            if (err == `FirebaseError: Firebase: Error (auth/email-already-in-use).`) {
                alert("Email already in use")
            } else {
                console.log(err)
            }
        }

    };

    const signIn = async (auth, email, password) => {

        try {
            await signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                }).catch((error) => {

                    if (error.message == 'Firebase: Error (auth/user-not-found).') {
                        alert("Usuario no encontrado.");
                    } else if (error.message == 'Firebase: Error (auth/wrong-password).') {
                        alert("Contraseña o email incorrectos.");
                    }
                });

        } catch (error) {
            console.log(error)
        }
    };

    const logOut = () => {
        signOut(auth);
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log(user);

            }

        });
    }, []);

    return (
        <authContext.Provider value={{ signUp, signIn, logOut }}>{children}</authContext.Provider>
    )
}