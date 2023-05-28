import {useState} from 'react';

export default function MainBody() {

    const [nombre, setNombre] = useState(''); // estados de input nombre
    const [apellido, setApellido] = useState(''); // estados de input apellido

    const handleSubit  = event => {
        event.preventDefault(); //evita que la pagina se reinicie 

      };


    return (
        <div>
     <form onSubmit={handleSubit} method="">
 <ul>
  <li>
    <label for="name">Nombre:</label>
    <input type="text" id="nombre" name="nombre"
     onChange={event => setNombre(event.target.value)} //se pone el valor del nombre
     value={nombre}/>
  </li>
  <li>
    <label for="apellido">Correo electrónico:</label>
    <input
     type="text"
     id="apellido"
     name="apellido"
     onChange={event => setApellido(event.target.value)}//se pone el valor del apellido
     value={apellido}
     />

  </li>
  <li class="button">
  <button type="">Envíe su mensaje</button >
</li>
 </ul>
</form>
        </div>
   
    )
}