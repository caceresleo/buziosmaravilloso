import '../../stylesheets/Actividades.css';
import '../../stylesheets/Buceo.css';

import buceo1 from "../../imagenes/actividades/buceo1.jpg";
import buceo2 from "../../imagenes/actividades/buceo2.jpg";


const Buceo = () => {
	return (
		<section className="seccionActividades container">
					<h1> Bautismos de Buceo </h1>

			<article>
				<img className="imgBuceo2" src={buceo2} alt="buceo2" />			
				<p>La sensación de volar, se puede sentir también bajo el agua. <br/>Experimentá la maravillosa experiencia del Buceo. <br/> 
				Consiste en una clase teórica de aproximadamente 15 minutos, luego ya con los equipos puestos, harás una práctica 
				o adaptación y luego una inmersión de 40 minutos, acompañado de un instructor certificado PADI. En un área totalmente 
				segura y preservada para actividades acuáticas, donde podrás observar peces, corales y abundante belleza natural.</p>
				<img className="imgBuceo1" src={buceo1} alt="buceo1" />			

				<div className="final"></div>

			</article>
		</section>
		)
}

export default Buceo;






