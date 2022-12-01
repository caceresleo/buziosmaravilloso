import {Routes, Route} from 'react-router-dom';

import TrasRegular from '../paginas/TrasRegular';
import TrasPrivado from '../paginas/TrasPrivado';

const Traslados = () => {
	return (
		<div>
			<h1> esta es la pagina de Traslados </h1>
			<Routes>
			  <Route path='/regular' element={<TrasRegular />} />
	          <Route path="/privado" element={<TrasPrivado />} />
		
			</Routes>
		</div>
		)
}

export default Traslados;