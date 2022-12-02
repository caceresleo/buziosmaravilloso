import '../../stylesheets/Alojamientos.css';

import ImageSlider from '../plantillas/ImageSlider';

import posada1 from "../../imagenes/posadas/Image.jpeg";
import posada2 from "../../imagenes/posadas/Image_1.jpeg";
import posada3 from "../../imagenes/posadas/Image_2.jpeg";
import posada4 from "../../imagenes/posadas/Image_3.jpeg";

const Posadas = () => {

	const slides = [
	   {url: `${posada1}`, title: 'posada1'},
	   {url: `${posada2}`, title: 'posada2'},
	   {url: `${posada3}`, title: 'posada3'},
	   {url: `${posada4}`, title: 'posada4'}
	];


	return (
		<div className='contenido'>
		   <h1>POSADAS</h1>
		   <div className="contenedorGaleria">
			<ImageSlider slides={slides} />
		   </div>

		   <div className='mensajes'><p>Tenemos variedad de posadas que cuentan en su totalidad con excelente atención, 
			desayuno brasilero, están ubicadas cerca de la famosa "Rua das Pedras" y en la 
			proximidad de alguna de las playas más famosas. </p>
			<p>Además, algunas cuentan con sala de juegos, piscina, sauna y vista al mar. La 
			elección la misma será en función tu preferencia y para facilitar la tarea, te 
			asesoraré en todos los detalles que quieras conocer. </p></div>	
		</div>
		)
}

export default Posadas;

