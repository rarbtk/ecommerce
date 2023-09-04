import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


export const authContext = createContext();

export const useAuth = () => {
const context = useContext(authContext);
if(!context) throw new Error ("There is no context");

return context;
}



export function AuthProvider({children}){
 


    const signUp = async(email, password,name,lastName) => {

        try{
            await createUserWithEmailAndPassword(auth,email, password,name,lastName)

        }catch(err){
            if(err == `FirebaseError: Firebase: Error (auth/email-already-in-use).`){
                alert("Email already in use")
            }else{
                console.log(err) 
            }
        }

    };

    const  signIn = async (auth, email, password) => {

        try {
            await signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user)
                }).catch((error) => {
    
                    if(error.message == 'Firebase: Error (auth/user-not-found).'){
                        alert("Usuario no encontrado.");
                    }else if(error.message == 'Firebase: Error (auth/wrong-password).'){
                        alert("Contraseña o email incorrectos.");
                    }
                   
                });
    
            }  catch (error) {
    
            }
        };

return (
    <authContext.Provider value={{signUp, signIn}}>{children}</authContext.Provider>
)
}