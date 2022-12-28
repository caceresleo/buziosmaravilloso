import '../../stylesheets/Actividades.css';
import '../../stylesheets/Moto.css';

import moto1 from "../../imagenes/actividades/moto1.jpg";
import moto2 from "../../imagenes/actividades/moto2.jpg";


const Moto = () => {
	return (
		<section className="seccionActividades container-lg">
					<h1> Paseo en Moto Eléctrica </h1>

			<article>
				<img className="imgMoto2" src={moto2} alt="moto2" />			
				<p>Viví la experiencia de un paseo grupal en scooters eléctricas, fáciles de conducir y muy silenciosas. <br/>
				Recorrerás la península buziana disfrutando del aire cálido en tu rostro, conociendo hermosas playas, haciendo 
				paradas en lugares de abundante belleza, ideales para sacar fotos. <br/> Este paseo, fuera de lo convencional, 
				de 2hs y 1/2 duración, será sin dudas unos de tu mejores recuerdos.</p>
				<img className="imgMoto1" src={moto1} alt="moto1" />			

				<div className="final"></div>

			</article>
		</section>
		)
}

export default Moto;