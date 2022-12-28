import '../../stylesheets/Presentacion.css';

import imagen from '../../imagenes/presentacion/fotomail.jpeg';

const Presentacion = () => {
	return (
		<div className="contenidoPresentacion">

		  <section className="container-lg">
		    <article>

				<img className="fotoPresentacion" src={imagen} alt="foto presentacion" />
				<br />
				<p>Me llamo Verónica, y quiero ayudarte en la preparación de tu viaje a <strong>Buzios</strong>, asesorarte antes y durante tu estadía, 
				con el objetivo de lograr que tus vacaciones sean únicas e inolvidables.</p>
				
				<p>Luego de más de 20 años viajando como turista a <strong>Buzios</strong>. Finalmente me radiqué en este maravilloso lugar. 
				Un verdadero <strong>PARAÍSO NATURAL </strong> con sol y playa todo el año, que combina su belleza única con seguridad y tranquilidad. </p>
				<p>Te ofrezco mi conocimiento del lugar, para que puedas encontrar el hospedaje apropiado para vos, dentro de una gran variedad, de excelente calidad y ubicación 
				privilegiada según el gusto de cada turista.</p>
				<p>Además te ayudo en la coordinación de traslados y las mejores excursiones, con las que podrás conocer lugares de ensueño.</p>
				<p>Amo este trabajo, por eso lo hago con seriedad y pasión. Asi lo expresan los comentarios de las personas que viajaron con mi asesoramiento, 
				y que puedes leer en las redes.</p>
				<p>Me gustaría que vos también viajes con mi ayuda, disfrutes, y te enamores de <strong>Buzios</strong>, me vuelvas a contactar para tu próximo viaje, y nunca pares de hacerlo. 
				Por que recordá que:</p>

				<p className="text-center"><cite className="text-center">¨Hay personas que SUEÑAN CON VIAJAR, y otras que viajan PARA Cumplir SU SUEÑO¨</cite></p>
				
				<p className="text-center">Te espero en el paraíso</p>
				
				<p className="text-center  firma"><strong>¨Buzios maravilloso¨</strong></p>

				<br />

				<div className="finArticle "></div>
				
		     </article> 	

		   </section>
		</div>
		)
};

export default Presentacion;