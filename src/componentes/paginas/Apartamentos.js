import ImageSlider from '../plantillas/ImageSlider';

import apartamento1 from "../../imagenes/apartamento/Image.jpeg";
import apartamento2 from "../../imagenes/apartamento/Image_1.jpeg";
import apartamento3 from "../../imagenes/apartamento/Image_2.jpeg";


const Apartamentos = () => {

	const slides = [
	   {url: `${apartamento1}`, title: 'apart1'},
	   {url: `${apartamento2}`, title: 'apart2'},
	   {url: `${apartamento3}`, title: 'apart3'},

	];	

	return (
		<div className='contenido'>
		   <h1>APARTAMENTOS</h1>
		   <div className="contenedorGaleria">
			<ImageSlider slides={slides} />
		   </div>

		   <div className='mensajes'>Hay apartamentos totalmente equipados, con 
		   capacidad de hasta cinco personas, y en la proximidad de alguna de las playas más famosas. 
		   La elección de los mismos será en función de tu preferencia, y para facilitar la tarea, 
		   te ayudaré, contándote todas las características y detalles que necesites.</div>
	
		</div>
		)
}

export default Apartamentos;