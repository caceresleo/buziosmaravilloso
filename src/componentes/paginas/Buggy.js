import '../../stylesheets/Actividades.css';
import '../../stylesheets/Buggy.css';

import buggy1 from "../../imagenes/excursiones/buggy1.png";
import buggy2 from "../../imagenes/excursiones/buggy2.png";


const Buggy = () => {
	return (
		<section className="seccionActividades container-lg">
					<h1> Paseo en BUGGY </h1>

			<article>
				<p>Un conductor te buscará en tu hospedaje y te dará una recorrida por la península, hará paradas en los mirantes,
					 para que puedas sacar las mejores fotos, además también podrás visitar playas de increíble belleza. El clima 
					 cálido del lugar y el hermoso paisaje combinados hacen que este paseo se disfrute desde el comienzo hasta el fin, 
					 en todo su recorrido. Ideal para hacerlo en familia o con grupo de amigos.</p>
				<div className="imagenesBuggy d-flex justify-content-center align-items-center">
				<img className="imgBuggy1 img-fluid" src={buggy1} alt="buggy1" />		
				<img className="imgBuggy2 img-fluid" src={buggy2} alt="buggy2" />	
	
				</div>	
			</article>
		</section>
		)
}

export default Buggy;


