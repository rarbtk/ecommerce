import { useState } from 'react';
import HeaderOnlineStore from './HeaderOnlineStore';
import '../public/styles/createUser.css'
import { useAuth } from '../context/authContext';



export default function CreateUser() {

  const [email, setEmail] = useState('');
  const [password, setContrasena] = useState('');
  const [dni, setDni] = useState('');
  const [name, setName] = useState('');
  const [lastName, setlastName] = useState('');

  const { signUp } = useAuth();




  const handleSubit = async (event) => {

    event.preventDefault();
    signUp(email, password,name,lastName,dni);
    console.log(email, password, name,lastName,dni)
  };


  return (
    <div>
      <HeaderOnlineStore />
    <div className='signInContainer'> 
      <form onSubmit={handleSubit} method="" className='signInForm'>
        <ul>
          <li>
            <label htmlFor="Name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={event => setName(event.target.value)}//se pone el valor de email
              value={name}
            />
          </li>
          <li>
            <label htmlFor="Last Name">Apellido:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              onChange={event => setlastName(event.target.value)}//se pone el valor de email
              value={lastName}
            />
          </li>

          <li>
            <label htmlFor="dni">Dni:</label>
            <input
              type="text"
              id="dni"
              name="dni"
              onChange={event => setDni(event.target.value)}//se pone el valor de email
              value={dni}
            />
          </li>

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
    </div>

  )
}