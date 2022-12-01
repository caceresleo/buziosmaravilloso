import {Routes, Route} from 'react-router-dom';



const Playas = () => {
	return (
		<div>
			<h1> esta es la pagina de Playas </h1>
			<Routes>
			  <Route path='/pl1' element={ <p>Info de PLAYA1 </p>} />
	          <Route path="/pl2" element={ <p>Info de PLAYA2 </p>} />
	          <Route path="/pl3" element={ <p>Info de PLAYA3 </p>} />
	          <Route path="/pl4" element={ <p>Info de PLAYA4 </p>} />				
			</Routes>
		</div>
		)
}

export default Playas;