import ImageSlider from '../plantillas/ImageSlider';

import casa1 from "../../imagenes/casas/Image.jpeg";
import casa2 from "../../imagenes/casas/Image_1.jpeg";
import casa3 from "../../imagenes/casas/Image_2.jpeg";
import casa4 from "../../imagenes/casas/Image_3.jpeg";
import casa5 from "../../imagenes/casas/Image_4.jpeg";

const Casas = () => {

	const slides = [
	   {url: `${casa1}`, title: 'casa1'},
	   {url: `${casa2}`, title: 'casa2'},
	   {url: `${casa3}`, title: 'casa3'},
	   {url: `${casa4}`, title: 'casa4'},
	   {url: `${casa5}`, title: 'casa5'}

	];	
	return (
		<div className='contenido'>
		   <h1>CASAS</h1>
		   <div className="contenedorGaleria">
			<ImageSlider slides={slides} />
		   </div>

		   <div className='mensajes'>Hay una gran variedad de casas totalmente equipadas, con capacidad de hasta 
		   doce personas, y en la proximidad de alguna de las playas más bonitas. Podrás elegir las mismas según tu preferencia
		   y presupuesto. Te puedo ayudar en la búsqueda, asesorándote en todo lo que necesites. </div>
	
		</div>
		)
}

export default Casas;



