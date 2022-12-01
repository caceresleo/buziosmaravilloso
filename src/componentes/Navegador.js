import React from 'react';

import {Link} from 'react-router-dom';

function Navegador(){
	return(
		<div className='contenedor-navegador'>
			<div className='menu-superior-navegador'>
			   <div className='logo-navegador'>
			   	   BUZIOS MARAVILLOSO
			   </div>
			</div>
			<div className='menu-navegador'>
				<ul className="nav nav-pills  mx-auto">
				  <li className="nav-item">
				    <Link className="nav-link active" to="/presentacion">Presentación</Link>
				  </li>
				  <li className="nav-item dropdown">
				    <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="/" role="button" aria-expanded="false">Alojamientos</Link>
				    <ul className="dropdown-menu">
				      <li><Link className="dropdown-item" to="/posadas">Posadas</Link></li>
				      <li><Link className="dropdown-item" to="/casas">Casas</Link></li>
				      <li><Link className="dropdown-item" to="#">Apartamentos</Link></li>
				    </ul>
				  </li>			  
				  <li className="nav-item dropdown">
				    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Traslados</a>
				    <ul className="dropdown-menu">
				      <li><Link className="dropdown-item" to="#">Regular</Link></li>
				      <li><Link className="dropdown-item" to="#">Privado</Link></li>
				    </ul>
				  </li>		
				  <li className="nav-item dropdown">
				    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Excrusiones</a>
				    <ul className="dropdown-menu">
				      <li><Link className="dropdown-item" to="#">Rio de Janeiro</Link></li>
				      <li><Link className="dropdown-item" to="#">Arraial do Cabo</Link></li>
				      <li><Link className="dropdown-item" to="#">Barco</Link></li>
				      <li><Link className="dropdown-item" to="#">Buggy</Link></li>			      
				    </ul>				 
				  </li>	
				  <li className="nav-item dropdown">
				    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Actividades</a>
				    <ul className="dropdown-menu">
				      <li><Link className="dropdown-item" to="#">Buceo</Link></li>
				      <li><Link className="dropdown-item" to="#">Kayak</Link></li>
				      <li><Link className="dropdown-item" to="#">Snorkel</Link></li>
				      <li><Link className="dropdown-item" to="#">Canoa Hawaiana</Link></li>			      
				    </ul>
				  </li>	
				  <li className="nav-item dropdown">
				    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Alquiler de Vehiculos</a>
				    <ul className="dropdown-menu">
				      <li><Link className="dropdown-item" to="#">Auto</Link></li>
				      <li><Link className="dropdown-item" to="#">Buggy</Link></li>
				    </ul>
				  </li>		
				  <li className="nav-item dropdown">
				    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Playas</a>
				    <ul className="dropdown-menu">
				      <li><Link className="dropdown-item" to="#">Playa1</Link></li>
				      <li><Link className="dropdown-item" to="#">Playa2</Link></li>
				      <li><Link className="dropdown-item" to="#">Playa3</Link></li>
				      <li><Link className="dropdown-item" to="#">Playa4</Link></li>			      
				    </ul>
				  </li>				  		  			  		  	  
				  <li className="nav-item">
				    <Link className="nav-link" to="#">Opiniones</Link>
				  </li>

				</ul>
			  </div>
			</div>		

		);
} 


export default Navegador;

