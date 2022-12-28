import './App.css';
import './stylesheets/Footer.css';


import 'bootstrap/dist/css/bootstrap.min.css';




import Logo from './componentes/Logo';



import NavegacionPpal from './componentes/plantillas/Navbar';

import Footer from './componentes/plantillas/Footer';


import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import Boton from './componentes/Boton';

//import useSound from 'use-sound';
//import mySound from './musica/brasilmusica.mp3';

import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';

import Inicio from "./componentes/paginas/Inicio";

import Presentacion from "./componentes/paginas/Presentacion";
import Posadas from "./componentes/paginas/Posadas";
import Casas from "./componentes/paginas/Casas";
import Apartamentos from "./componentes/paginas/Apartamentos";
import Buceo from "./componentes/paginas/Buceo";
import Kayak from "./componentes/paginas/Kayak";
import Canoa from "./componentes/paginas/Canoa";
import Moto from "./componentes/paginas/Moto";
import AlqAuto from "./componentes/paginas/AlqAuto";
import AlqBuggy from "./componentes/paginas/AlqBuggy";
import Traslados from "./componentes/paginas/Traslados";

import Rio from "./componentes/paginas/Rio";
import Arrial from "./componentes/paginas/Arrial";
import Barco from "./componentes/paginas/Barco";
import Buggy from "./componentes/paginas/Buggy";


function App() {

 // let sound = new Audio('./musica/brasilmusica.mp3');
//const [playSound] = useSound(mySound);
//playSound();

  return (

  <BrowserRouter>

    <div className="App">


            <div className="Cabecera">
                   <Link className="cabeceraLogo" to="/paginas/Inicio" ><Logo /></Link>
                   <div  className="barraNavegador">
                      <NavegacionPpal />
                   </div>   
                   <div className="redesSociales">
                       <a href="https://instagram.com/buziosmaravilloso?igshid=YmMyMTA2M2Y=" target="_blank"><InstagramIcon sx={{ color: "#fff" }} /></a>
                       <a href="https://www.facebook.com/buzioshospedaje" target="_blank"><FacebookIcon sx={{ color: "#fff" }} /></a>     
                   </div>
            </div>   
            <div className="ContenidosPaginas">


                      <Routes>
                        <Route path="/buziosmaravilloso" element={<Inicio />} />                      
                        <Route path="/paginas/Inicio" element={<Inicio />} />
                        <Route path="/presentacion" element={<Presentacion />} />

                        <Route path="/alojamientos/posadas" element={<Posadas />} />      
                        <Route path="/alojamientos/casas" element={<Casas />} />          
                        <Route path="/alojamientos/apartamentos" element={<Apartamentos />} />    

                        <Route path="/traslados" element={<Traslados />} />    

                        <Route path="/excursiones/rio" element={<Rio />} />
                        <Route path="/excursiones/arrial" element={<Arrial />} />      
                        <Route path="/excursiones/barco" element={<Barco />} /> 
                        <Route path="/excursiones/moto" element={<Moto />} />                  
                        <Route path="/excursiones/buggy" element={<Buggy />} />                  


                        <Route path="/actividades/buceo" element={<Buceo />} />
                        <Route path="/actividades/kayak" element={<Kayak />} />      
                        <Route path="/actividades/canoa" element={<Canoa />} /> 
                        <Route path="/actividades/moto" element={<Moto />} /> 

                        <Route path="/alquiler/alqauto" element={<AlqAuto />} /> 
                        <Route path="/alquiler/alqbuggy" element={<AlqBuggy />} />                        

                      </Routes>  
            </div>   


                    <div >

                        <Footer />


                    </div>
    </div>


  </BrowserRouter>      
       


         
  );
}



export default App;

/*



            <div className="contenidoMenu">
                      <Routes>
                        <Route path="/presentacion" element={<Presentacion />} />

                        <Route path="/alojamientos/posadas" element={<Posadas />} />      
                        <Route path="/alojamientos/casas" element={<Casas />} />          
                        <Route path="/alojamientos/apartamentos" element={<Apartamentos />} />          


                      </Routes>  
            </div>


            <div className="footer">
                       <div className="redesSocialesPie">
                       <a href="https://instagram.com/buziosmaravilloso?igshid=YmMyMTA2M2Y=" ><InstagramIcon sx={{ color: "#fff" }} /></a>
                       <a href="https://www.facebook.com/buzioshospedaje"><FacebookIcon sx={{ color: "#fff" }} /></a>           
                       </div>   

            </div>     
*/
