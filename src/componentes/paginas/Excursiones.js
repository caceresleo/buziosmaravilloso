import {Routes, Route} from 'react-router-dom';

import Rio from '../paginas/Rio';
import Arrial from '../paginas/Arrial';
import Barco from '../paginas/Barco';
import Buggy from '../paginas/Buggy';

const Excursiones = () => {
	return (
		<div>
			<h1> esta es la pagina de Excursiones </h1>
			<Routes>
			  <Route path='/rio' element={<Rio />} />
	          <Route path="/arraial" element={<Arrial />} />
	          <Route path="/barco" element={<Barco />} />
	          <Route path="/buggy" element={<Buggy />} />				
			</Routes>
		</div>
		)
}

export default Excursiones;