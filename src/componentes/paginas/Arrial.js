import '../../stylesheets/Actividades.css';
import '../../stylesheets/Arrial.css';

import arial1 from "../../imagenes/excursiones/arrial.jpg";

const Arrial = () => {
	return (

		<section className="seccionActividades container-lg">
					<h1> Paseo en ARRIAL DO CABO </h1>

			<article>
				<p>Saldrás de Buzios de  mañana, y te trasladaras por vía terrestre  hasta Arraial  (40km) , 
					donde embarcaras en una escuna con  música ambiente muy alegre y animación permanente.</p>
				<img className="imgArrial1" src={arial1} alt="arial1" />		
	  		    <p>Ya embarcado, harás dos paradas de 40 minutos cada una, en las playas más hermosas del lugar, 
					conocido como el caribe brasilero justamente por lo trasparente del agua y lo blanco de la arena. </p>	
        <p>Finalizado el paseo se retorna a Arrail donde almorzarás durante 1 hora para luego volver a Buzios.</p> 
        <p>La duración total del paseo es de 9hs , en las que sin dudas pasarás una experiencia inolvidable y muy recomendable.</p> 
				<div className="final"></div>
			</article>
		</section>

		)
}

export default Arrial;



