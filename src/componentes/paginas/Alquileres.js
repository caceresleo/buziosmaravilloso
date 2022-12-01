import {Routes, Route} from 'react-router-dom';

import AlqAuto from '../paginas/AlqAuto';
import AlqBuggy from '../paginas/AlqBuggy';

const Alquileres = () => {
	return (
		<div>
			<h1> esta es la pagina de Alquileres </h1>
			<Routes>
			  <Route path='/alqauto' element={<AlqAuto />} />
	          <Route path="/alqbuggy" element={<AlqBuggy />} />
		
			</Routes>
		</div>
		)
}

export default Alquileres;