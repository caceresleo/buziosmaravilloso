import '../../stylesheets/Actividades.css';
import '../../stylesheets/Barco.css';

import barco1 from "../../imagenes/excursiones/barco.jpg";


const Barco = () => {
	return (
		<section className="seccionActividades container-lg">
					<h1> Paseo en BARCO </h1>

			<article>
				<p>Harás un recorrido por 12 playas y tres islas, haciendo tres paradas de 30 minutos cada una. donde 
					podrás tirarte al agua y sacar las mejores fotos.</p>
				<img className="imgBarco1" src={barco1} alt="barco1" />		
	  		    <p>El barco (escuna)tiene música ambiente muy alegre , bar con bebidas y picadas. baños y todos los 
					elementos de seguridad.</p>	
				<p>La duración del paseo es de dos horas y media de contacto con la naturaleza y mucha diversión.</p>


				<div className="final"></div>


			</article>
		</section>
		)
}

export default Barco;


