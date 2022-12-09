import '../../stylesheets/Actividades.css';
import '../../stylesheets/Canoa.css';

import canoa1 from "../../imagenes/actividades/canoa1.jpg";
import canoa2 from "../../imagenes/actividades/canoa2.jpg";

const Canoa = () => {
	return (
		<section className="seccionActividades container">
					<h1> Canoa Hawaiana </h1>

			<article>
				<img className="imgCanoa1" src={canoa1} alt="canoa1" />	
				<p>Actividad grupal con la que podrás remar recorriendo distintas playas y disfrutar de un chapuzón en agua cálida y cristalina. <br/>
				Sacaras las mejores fotos y disfrutaras de una hora de ejercicio distinto, divertido e inolvidable.</p>
				<img className="imgCanoa2" src={canoa2} alt="canoa2" />	

				<div className="final"></div>

			</article>
		</section>
		)
}

export default Canoa;




