import '../../stylesheets/Alojamientos.css';

import ImageSlider from '../plantillas/ImageSlider';

const Posadas = () => {

	const slides = [
	   {url: 'http://localhost:3000/imagenes/posadas/Image.jpeg', title: 'posada1'},
	   {url: 'http://localhost:3000/imagenes/posadas/Image_1.jpeg', title: 'posada2'},
	   {url: 'http://localhost:3000/imagenes/posadas/Image_2.jpeg', title: 'posada3'},
	   {url: 'http://localhost:3000/imagenes/posadas/Image_3.jpeg', title: 'posada4'}
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

