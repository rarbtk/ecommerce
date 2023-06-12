import { useState } from 'react';
import HeaderOnlineStore from './HeaderOnlineStore';
import '../public/styles/login.css'
import 'firebase/auth';

export default function Login() {

  const [nombre, setNombre] = useState(''); // estados de input nombre
  const [apellido, setApellido] = useState(''); // estados de input apellido
  const [email, setEmail] = useState(''); 
  const [contrasena, setContrasena] = useState('');
  const [contrasena2,setContrasena2] = useState('');



  const handleSubit = event => {
    event.preventDefault(); //evita que la pagina se reinicie 

  };


  return (
    <div> <HeaderOnlineStore />


<form onSubmit={handleSubit} method="" className='LoginContainer'>
        <ul>
          <li>
            <label for="name">Nombre:</label>
            <input type="text" id="nombre" name="nombre"
              onChange={event => setNombre(event.target.value)} //se pone el valor del nombre
              value={nombre} />
          </li>
          <li>
            <label for="apellido">Apellido:</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              onChange={event => setApellido(event.target.value)}//se pone el valor del apellido
              value={apellido}
            />

          </li>
          <li>
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={event => setEmail(event.target.value)}//se pone el valor del apellido
              value={email}
            />

          </li>
          <li>
            <label for="contrasena">Contrasena:</label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              onChange={event => setContrasena(event.target.value)}//se pone el valor del apellido
              value={contrasena}
            />

          </li>
          <li class="button">
          <button class="button-43" role="button">Log-in</button>

          </li>
        </ul>
      </form>
      
    </div>

  )
}