import '../../stylesheets/Inicio.css';

import imagen from '../../imagenes/portada.jpeg';


const Inicio = () => {
	return (
		<div  className="paginaInicio">

			<img className="imagenPortada" src={imagen} alt="portada" />

		</div>
		)
}

export default Inicio