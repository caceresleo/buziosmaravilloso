import {Routes, Route} from 'react-router-dom';

import Buceo from '../paginas/Buceo';
import Kayak from '../paginas/Kayak';
import Snorkel from '../paginas/Snorkel';
import Canoa from '../paginas/Canoa';

const Actividades = () => {
	return (
		<div>
			<h1> esta es la pagina de Actividades </h1>
			<Routes>
			  <Route path='/buceo' element={<Buceo />} />
	          <Route path="/kayak" element={<Kayak />} />
	          <Route path="/snorkel" element={<Snorkel />} />
	          <Route path="/canoa" element={<Canoa />} />				
			</Routes>
		</div>
		)
}

export default Actividades;