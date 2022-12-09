import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


//...... MUSICA..................................
import useSound from 'use-sound';

import Posadas from '../../musica/posadas.mp3';
import Casas from '../../musica/casas.mp3';
import Apartamentos from '../../musica/apartamentos.mp3';

//.................................................

import { Link } from 'react-router-dom';

import Logo from '../Logo';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';




function NavegacionPpal() {

  const seleccion = (lugar) =>{
    pararMusica();
    return lugar;
};

const temasMusicales = [
  {lugar: 'posadas' , musica: useSound(Posadas)},
  {lugar: 'casas' , musica: useSound(Casas)},
  {lugar: 'apartamentos' , musica: useSound(Apartamentos)}
];


const rocola = val => {
         pararMusica();
         temasMusicales.map((tema, index) => {
            if (val === tema.lugar) {
              const [playSound, {stop}] = tema.musica;
              playSound();  
                };
         });
     }; 

const pararMusica = () => {
         temasMusicales.map((tema, index) => {
         const [playSound, {stop}] = tema.musica;
         stop();                
         });
     };      



/*
         temasMusicales.map((tema, index) => {
            console.log("index: ", index);
            console.log("lugar: ", tema.lugar);
            console.log("musica: ", tema.musica);
         });
         */

  return (
    <Navbar  className="navBg" variant="dark" expand="lg">
      <Container id="contenedorMenu">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} onClick={()=>seleccion("regular")} bsPrefix="itemsmenu" to="/presentacion">Presentación</Nav.Link>
            <NavDropdown  title="Alojamientos " bsPrefix="itemsmenu" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} onClick={()=>rocola("posadas")}  to="/alojamientos/posadas">Posadas</NavDropdown.Item>
              <NavDropdown.Divider />              
              <NavDropdown.Item as={Link} onClick={()=>rocola("casas")}  to="/alojamientos/casas">Casas</NavDropdown.Item>
              <NavDropdown.Divider />              
              <NavDropdown.Item as={Link} onClick={()=>rocola("apartamentos")}  to="/alojamientos/apartamentos">Apartamentos</NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Traslados" bsPrefix="itemsmenu" id="traslados-nav-dropdown">
              <NavDropdown.Item as={Link} onClick={()=>seleccion("regular")} to="/traslados/regular">Regular</NavDropdown.Item>
              <NavDropdown.Divider />              
              <NavDropdown.Item as={Link} onClick={()=>seleccion("privado")} to="/traslados/privado">Privado</NavDropdown.Item>
            </NavDropdown>  
            <NavDropdown title="Excrusiones" bsPrefix="itemsmenu" id="excursiones-nav-dropdown">
              <NavDropdown.Item as={Link} onClick={()=>seleccion("rio")} to="/excursiones/rio">Rio de Janeiro</NavDropdown.Item>
              <NavDropdown.Divider />              
              <NavDropdown.Item as={Link} onClick={()=>seleccion("arraial")} to="/excursiones/arraial">Arraial do Cabo</NavDropdown.Item>
              <NavDropdown.Divider />              
              <NavDropdown.Item as={Link} onClick={()=>seleccion("barco")} to="/excursiones/barco">Barco</NavDropdown.Item>   
              <NavDropdown.Divider />              
              <NavDropdown.Item as={Link} onClick={()=>seleccion("buggy")} to="/excursiones/buggy">Buggy</NavDropdown.Item>                         
            </NavDropdown> 
            <NavDropdown title="Actividades" bsPrefix="itemsmenu" id="actividades-nav-dropdown">
              <NavDropdown.Item as={Link} onClick={()=>seleccion("buceo")} to="/actividades/buceo">Buceo</NavDropdown.Item>
              <NavDropdown.Divider />              
              <NavDropdown.Item as={Link} onClick={()=>seleccion("kayak")} to="/actividades/kayak">kayak</NavDropdown.Item>
              <NavDropdown.Divider />  
              <NavDropdown.Item as={Link} onClick={()=>seleccion("moto")} to="/actividades/moto">Moto</NavDropdown.Item>
              <NavDropdown.Divider />                            
              <NavDropdown.Item as={Link} onClick={()=>seleccion("canoa")} to="/actividades/canoa">Canoa Hawaiana</NavDropdown.Item>                         
            </NavDropdown> 
            <NavDropdown title="Alquiler de Vehículos" bsPrefix="itemsmenu" id="alquiler-nav-dropdown">
              <NavDropdown.Item as={Link} onClick={()=>seleccion("alqauto")} to="/alquiler/alqauto">Auto</NavDropdown.Item>
              <NavDropdown.Divider />              
              <NavDropdown.Item as={Link} onClick={()=>seleccion("alqbuggy")} to="/alquiler/alqbuggy">Buggy</NavDropdown.Item>
            </NavDropdown>  
            <NavDropdown title="Playas" bsPrefix="itemsmenu" id="playas-nav-dropdown">
              <NavDropdown.Item as={Link} onClick={()=>seleccion("play1")} to="/playas/pl1">Playa1</NavDropdown.Item>
              <NavDropdown.Divider />              
              <NavDropdown.Item as={Link} onClick={()=>seleccion("play2")} to="/playas/pl2">Playa2</NavDropdown.Item>
              <NavDropdown.Divider />              
              <NavDropdown.Item as={Link} onClick={()=>seleccion("play3")} to="/playas/pl3">Playa3</NavDropdown.Item>   
              <NavDropdown.Divider />              
              <NavDropdown.Item as={Link} onClick={()=>seleccion("play4")} to="/playas/pl4">Playa4</NavDropdown.Item>                         
            </NavDropdown>              

            <Nav.Link as={Link}  onClick={()=>seleccion("opiniones")} bsPrefix="itemsmenu" to="/opiniones">Opiniones</Nav.Link>
          </Nav>
        </Navbar.Collapse>  
        </Container>
    </Navbar>

   
  );
}

export default NavegacionPpal;


/*

    <Navbar  className="navBg" variant="dark" expand="lg">
      <Container id="contenedorMenu">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} bsPrefix="itemsmenu" to="/presentacion">Presentación</Nav.Link>
            <NavDropdown  title="Alojamientos " bsPrefix="itemsmenu" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} onClick={()=>rocola("posadas")}  to="/alojamientos/posadas">Posadas</NavDropdown.Item>
              <NavDropdown.Divider />              
              <NavDropdown.Item as={Link} onClick={()=>rocola("casas")}  to="/alojamientos/casas">Casas</NavDropdown.Item>
              <NavDropdown.Divider />              
              <NavDropdown.Item as={Link} onClick={()=>rocola("apartamentos")}  to="/alojamientos/apartamentos">Apartamentos</NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Traslados" bsPrefix="itemsmenu" id="traslados-nav-dropdown">
              <NavDropdown.Item as={Link} onClick={()=>seleccion("regular")} to="/traslados/regular">Regular</NavDropdown.Item>
              <NavDropdown.Divider />              
              <NavDropdown.Item as={Link} onClick={()=>seleccion("privado")} to="/traslados/privado">Privado</NavDropdown.Item>
            </NavDropdown>  
            <NavDropdown title="Excrusiones" bsPrefix="itemsmenu" id="excursiones-nav-dropdown">
              <NavDropdown.Item as={Link} onClick={()=>seleccion("rio")} to="/excursiones/rio">Rio de Janeiro</NavDropdown.Item>
              <NavDropdown.Divider />              
              <NavDropdown.Item as={Link} onClick={()=>seleccion("arraial")} to="/excursiones/arraial">Arraial do Cabo</NavDropdown.Item>
              <NavDropdown.Divider />              
              <NavDropdown.Item as={Link} onClick={()=>seleccion("barco")} to="/excursiones/barco">Barco</NavDropdown.Item>   
              <NavDropdown.Divider />              
              <NavDropdown.Item as={Link} onClick={()=>seleccion("buggy")} to="/excursiones/buggy">Buggy</NavDropdown.Item>                         
            </NavDropdown> 
            <NavDropdown title="Actividades" bsPrefix="itemsmenu" id="actividades-nav-dropdown">
              <NavDropdown.Item as={Link} onClick={()=>seleccion("buceo")} to="/actividades/buceo">Buceo</NavDropdown.Item>
              <NavDropdown.Divider />              
              <NavDropdown.Item as={Link} onClick={()=>seleccion("kayak")} to="/actividades/kayak">kayak</NavDropdown.Item>
              <NavDropdown.Divider />              
              <NavDropdown.Item as={Link} onClick={()=>seleccion("snorkel")} to="/actividades/snorkel">Snorkel</NavDropdown.Item>   
              <NavDropdown.Divider />              
              <NavDropdown.Item as={Link} onClick={()=>seleccion("canoa")} to="/actividades/canoa">Canoa Hawaiana</NavDropdown.Item>                         
            </NavDropdown> 
            <NavDropdown title="Alquiler de Vehículos" bsPrefix="itemsmenu" id="alquiler-nav-dropdown">
              <NavDropdown.Item as={Link} onClick={()=>seleccion("alqauto")} to="/alquiler/alqauto">Auto</NavDropdown.Item>
              <NavDropdown.Divider />              
              <NavDropdown.Item as={Link} onClick={()=>seleccion("alqbuggy")} to="/alquiler/alqbuggy">Buggy</NavDropdown.Item>
            </NavDropdown>  
            <NavDropdown title="Playas" bsPrefix="itemsmenu" id="playas-nav-dropdown">
              <NavDropdown.Item as={Link} onClick={()=>seleccion("play1")} to="/playas/pl1">Playa1</NavDropdown.Item>
              <NavDropdown.Divider />              
              <NavDropdown.Item as={Link} onClick={()=>seleccion("play2")} to="/playas/pl2">Playa2</NavDropdown.Item>
              <NavDropdown.Divider />              
              <NavDropdown.Item as={Link} onClick={()=>seleccion("play3")} to="/playas/pl3">Playa3</NavDropdown.Item>   
              <NavDropdown.Divider />              
              <NavDropdown.Item as={Link} onClick={()=>seleccion("play4")} to="/playas/pl4">Playa4</NavDropdown.Item>                         
            </NavDropdown>              

            <Nav.Link as={Link}  onClick={()=>seleccion("opiniones")} bsPrefix="itemsmenu" to="/opiniones">Opiniones</Nav.Link>
          </Nav>
        </Navbar.Collapse>  
        </Container>
    </Navbar>
       

*/

