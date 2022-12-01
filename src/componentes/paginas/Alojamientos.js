import {Routes, Route} from 'react-router-dom';



import '../../stylesheets/Alojamientos.css';

import Apartamentos from '../paginas/Apartamentos';
import Casas from '../paginas/Casas';
import Posadas from '../paginas/Posadas';

const Alojamientos = () => {




	return (
		<div className="contenidoPresentacion">
			<Routes>
	          <Route path="/posadas" element={<Posadas />}  />
              <Route path="/casas" element={<Casas />} />
              <Route path="/apartamentos" element={<Apartamentos />} />			
			</Routes>
		</div>
		)
}

export default Alojamientos;