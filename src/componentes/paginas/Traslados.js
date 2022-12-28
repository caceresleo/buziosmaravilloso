import {Routes, Route} from 'react-router-dom';

import vehiculo from "../../imagenes/traslados/vehiculos.jpg";

import '../../stylesheets/traslados.css';



const Traslados = () => {
	return (
		<section className="seccionActividades container">
			<h1> TRASLADOS </h1>

			<article>

			<p>Vehículos que te llevaran (ida y vuelta) desde el aeropuerto u 
			hotelería de Rio de Janeiro hasta Buzios .</p>

			<div className="contVehiculo">
				<img className="imgVehi" src={vehiculo} alt="vehiculos" />	

				<h2>REGULARES</h2>	

				<p>Horarios de transporte pre establecidos</p>

				<h2>PRIVADO</h2>	

				<p>Horario a combinar con el pasajero. Sin demoras, ni esperas. </p>
				
			</div>


			</article>
		</section>
		)
}

export default Traslados;