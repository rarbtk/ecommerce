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
        }   catch (error) {
            console.log(error);
        }
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
                        <button className="button-43" role="button">Login</button>
                    </li>
                </ul>
            </form>

        </div>

    )
}