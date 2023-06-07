
import './App.css';
import freecodecamplogo from '../src/imagenes/escudo_sin_fondo.png'
import Contador from './componentes/contador.js';
import Boton from './componentes/Boton.js'
import { useState } from 'react';

function App() {
 
  const[numClics,setNumClics]=useState(0);
  const manejarClic=()=>{
  setNumClics(numClics+1);
  
 }
 
 const reiniciarContador=()=>{
  setNumClics(0);
 }
 
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
        className='freecodecamp-logo' 
        src={freecodecamplogo}
        alt='logo de free code camp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
        texto='Crear'
        esBotonDeClic={true}
        manejarClic={manejarClic} />
        <Boton
        texto='Eliminar' 
        esBotonDeClic={false}
        manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;