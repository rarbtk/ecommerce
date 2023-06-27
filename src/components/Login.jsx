import { useState } from 'react';
import HeaderOnlineStore from './HeaderOnlineStore';
import '../public/styles/login.css'
import { useAuth } from '../context/authContext';
import { db } from '../firebase';



export default function Login() {

  const [email, setEmail] = useState(''); 
  const [password, setContrasena] = useState('');
  const {signUp} = useAuth();




  const handleSubit =async( event) => {

    event.preventDefault(); 
   /* signUp(email,password);

    const products = await db.collection('products').doc('ciUwrBpUkc7FgV81BqVg').collection('allProducts').get();
    const allproducts = products.docs.map(ele => ele.data());
    console.log(allproducts); */

  };


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
              onChange={event => setEmail(event.target.value)}//se pone el valor del apellido
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
          <button className="button-43" role="button">Log-in</button>

          </li>
        </ul>
      </form>
      
    </div>

  )
}