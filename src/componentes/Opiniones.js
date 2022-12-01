import React from 'react';
import '../stylesheets/Opiniones.css';

function Opinion(props){
	return(
		<div className='contenedor-opinion'>
		  <img className='imagen-opinon' 
		  src={require(`../imagenes/${props.imagen}.jpg`)} 
		  alt="foto de Posada" />

		  <div className='contenedor-texto-opinion'>
		      <p className='nombre-opinion'> {props.nombre} en {props.pais} </p>
		      <p className='texto-opinion'> {props.opinion} </p>

		  </div>
			
		</div>
		);
} 

export default Opinion;


/*

  let tituloOpiniones = `Esto es lo que nuestros clientes dicen sobre su experiencia con \n BUZIOS MARAVILLOSO`;



      <div className='contenedor-principal'>
           <div className='nuevaLinea'>{tituloOpiniones}
          </div>

          <Opiniones 
            imagen='fotoOpinon2'
            nombre='Elvis Caceres'
            pais='Argentina'
            opinion='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          />
          <Opiniones 
            imagen='fotoOpinion'
            nombre='Sergio Caceres'
            pais='Argentina'
            opinion='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          />          
       </div>


.contenedor-principal{
  min-height: 600px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.nuevaLinea{
  white-space: pre-line;
    max-width: 940px;
  font-size: 2.5em;
  font-weight: 700;
  line-height: 1.5;
  margin: 40px 0;
}
  

*/