import ImageSlider from '../plantillas/ImageSlider';

const Casas = () => {

	const slides = [
	   {url: 'http://localhost:3000/imagenes/casas/Image.jpeg', title: 'casa1'},
	   {url: 'http://localhost:3000/imagenes/casas/Image_1.jpeg', title: 'casa2'},
	   {url: 'http://localhost:3000/imagenes/casas/Image_2.jpeg', title: 'casa3'},
	   {url: 'http://localhost:3000/imagenes/casas/Image_3.jpeg', title: 'casa4'},
	   {url: 'http://localhost:3000/imagenes/casas/Image_4.jpeg', title: 'casa5'}

	];	
	return (
		<div className='contenido'>
		   <h1>CASAS</h1>
		   <div className="contenedorGaleria">
			<ImageSlider slides={slides} />
		   </div>

		   <div className='mensajes'>Tenemos variedad de casas totalmente equipadas, con capacidad de hasta 
		   doce personas, y en la proximidad de alguna de las playas más famosas. La elección de los mismos será 
		   en función tu preferencia, y para facilitar la tarea, te asesoraré en todos los detalles 
		   que quieras conocer. </div>
	
		</div>
		)
}

export default Casas;



