import React from 'react';

import '../stylesheets/Boton.css'

function Boton({texto, esBotonDeClic, manejarClic}){
	return(
		<button
		    className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
            onClick={manejarClic}>
			
			{texto}
		</button>

		);
}

export default Boton;

/*

lo que debemos poner en el archivo de origen


      <div>

           <Boton 
              texto="Click"
              esBotonDeClic={true}
              manejarClic={manejoClic} /> 
           <Boton 
              texto="Reiniciar"
              esBotonDeClic={false}
              manejarClic={manejoReiniciar} />         
      </div>


        const manejoClic = () => {
    console.log('clic');

  }
  const manejoReiniciar = () => {
    console.log('Reiniciar');
    
  }  

*/