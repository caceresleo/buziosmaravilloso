import '../../stylesheets/Actividades.css';
import '../../stylesheets/Rio.css';

import rio1 from "../../imagenes/excursiones/rio.jpg";


const Rio = () => {
	return (
		<section className="seccionActividades container-lg">
					<h1> Paseo Rio de Janeiro </h1>

			<article>
				<p>Saldrás desde tu alojamiento en Buzios a las 7hs , recorrerás 180 km para llegar al primer 
				 destino, el mítico estadio Maracaná. Luego conocerás el ¨Sambodromo¨ donde se realizan los 
				 desfiles de las ¨escolas do samba¨ en el carnaval. El tercer destino será la ¨Catedral 
				 metropolitana¨ con capacidad para 20000 personas de pie, inspirada en las pirámides Mayas. 
				 Luego conocerás el morro del corcovado donde está la famosa estatua del ¨Cristo Redentor¨.</p>
				<img className="imgRio1" src={rio1} alt="rio1" />		
	  		    <p>La próxima parada será para almorzar con un variado buffet. Continuarás con un paseo panorámico 
	  		    por las famosas y bellas playas de Rio de Janeiro. Para luego retornar a Buzios a las 21 hs
	  		     aproximadamente.</p>	


				<div className="final"></div>


			</article>
		</section>
		)
}

export default Rio;

