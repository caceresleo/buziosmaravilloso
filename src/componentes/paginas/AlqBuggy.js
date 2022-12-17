
import '../../stylesheets/Actividades.css';
import '../../stylesheets/AlqBuggy.css';

import buggy1 from "../../imagenes/alquiler/buggy1.jpg";
import buggy2 from "../../imagenes/alquiler/buggy2.jpg";


const AlqBuggy = () => {
	return (
		<section className="seccionActividades container">
					<h1> Alquiler de Autos </h1>

			<article>
				<img className="imgBuggy1" src={buggy1} alt="buggy1" />			
				<p>Vehículos descapotables ideales para estar en contacto con la naturaleza y 
				disfrutar del aire cálido en el rostro. De uso exclusivo en el interior de Buzios, 
				por lo cual no pagarás estacionamiento. Se pueden alquilar por uno o más días, o 
				combinar con el alquiler de auto.</p>
				<img className="imgBuggy2" src={buggy2} alt="buggy2" />			

				<div className="final"></div>

			</article>
		</section>
		)
}

export default AlqBuggy;


