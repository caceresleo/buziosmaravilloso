import '../../stylesheets/Actividades.css';
import '../../stylesheets/AlqAuto.css';

import auto1 from "../../imagenes/alquiler/auto1.jpg";
import auto2 from "../../imagenes/alquiler/auto2.jpg";

const AlqAuto = () => {
	return (
		<section className="seccionActividades container">
					<h1> Alquiler de Autos </h1>

			<article>
				<img className="imgAuto1" src={auto1} alt="auto1" />			
				<p>Ideal para recorrer los 8km de extensión que tiene la península, y además para salir 
				y conocer los alrededores de la misma. Por ser vehículos con patente de Buzios no pagan 
				estacionamiento, como si lo hacen el resto de los vehículos. Te puedo asesoran en los 
				requisitos que demanda el alquiler.</p>
				<img className="imgAuto2" src={auto2} alt="auto2" />			

				<div className="final"></div>

			</article>
		</section>
		)
}

export default AlqAuto;


