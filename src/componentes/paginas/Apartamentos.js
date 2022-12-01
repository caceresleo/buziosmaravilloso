import ImageSlider from '../plantillas/ImageSlider';


const Apartamentos = () => {

	const slides = [
	   {url: 'http://localhost:3000/imagenes/apartamento/Image.jpeg', title: 'apart1'},
	   {url: 'http://localhost:3000/imagenes/apartamento/Image_1.jpeg', title: 'apart2'},
	   {url: 'http://localhost:3000/imagenes/apartamento/Image_2.jpeg', title: 'apart3'}

	];	

	return (
		<div className='contenido'>
		   <h1>APARTAMENTOS</h1>
		   <div className="contenedorGaleria">
			<ImageSlider slides={slides} />
		   </div>

		   <div className='mensajes'>Tenemos variedad de Apartamentos totalmente equipados, con 
		   capacidad de hasta cinco personas, y en la proximidad de alguna de las playas más famosas. 
		   La elección de los mismos será en función de tu preferencia, y para facilitar la tarea, 
		   te asesoraré en todos los detalles que quieras conocer.</div>
	
		</div>
		)
}

export default Apartamentos;