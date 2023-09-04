import { ifError } from "assert";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();

export async function SignIn (auth, email, password){

    try {
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
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
