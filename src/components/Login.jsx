import { useState } from 'react';
import HeaderOnlineStore from './HeaderOnlineStore';
import {useNavigate} from "react-router-dom"

import '../public/styles/login.css'
import { useAuth } from '../context/authContext';
import { getAuth} from "firebase/auth";

export default function CreateUser() {

    const [email, setEmail] = useState('');
    const [password, setContrasena] = useState('');
    const navigate = useNavigate ();
    const auth = getAuth();
    const {signIn} = useAuth();

    const handleSubit = async (event) => {
        event.preventDefault();

        try {
            await signIn(auth, email, password);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }


    const user = auth.currentUser;
    if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;

        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        const uid = user.uid;
    }

    return (
        <div>
            <HeaderOnlineStore />


            <form onSubmit={handleSubit} method="" className='LoginContainer'>
                <ul>

                    <li>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={event => setEmail(event.target.value)}//se pone el valor de email
                            value={email}
                        />
                    </li>

                    <li>
                        <label htmlFor="contrasena">Contrasena:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={event => setContrasena(event.target.value)}//se pone el valor del apellido
                            value={password}
                        />

                    </li>
                    <li className="button">
                        <button className="button-43" role="button">Register</button>
                    </li>
                </ul>
            </form>

        </div>

    )
}