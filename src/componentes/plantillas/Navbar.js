import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useState } from 'react';


//...... MUSICA..................................
import useSound from 'use-sound';

import Posadas from '../../musica/posadas.mp3';
import Casas from '../../musica/casas.mp3';
import Apartamentos from '../../musica/apartamentos.mp3';

import Excursiones from '../../musica/MaisQueNada.mp3';

//.................................................

import { Link } from 'react-router-dom';

import Logo from '../Logo';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';




function NavegacionPpal() {

  const [reproduciendoExc, setReproduciendoExc ]= useState(false);

  const seleccion = (lugar) =>{
    pararMusica();
    setReproduciendoExc(false);
    return lugar;
};

const temasMusicales = [
  {lugar: 'posadas' , musica: useSound(Posadas)},
  {lugar: 'casas' , musica: useSound(Casas)},
  {lugar: 'apartamentos' , musica: useSound(Apartamentos)},
  {lugar: 'excursiones' , musica: useSound(Excursiones)},
 
];


const rocola = val => {
        if(val !== "excursiones"){
          pararMusica(); 
          setReproduciendoExc(false);         
        }

        console.log("valor de reproduciendoExc: ",reproduciendoExc );


         temasMusicales.map((tema, index) => {
            if (val === tema.lugar) {
              if (val === "excursiones" && !reproduciendoExc) {
                pararMusica(); 
                const [playSound, {stop}] = tema.musica;
                playSound(); 
                setReproduciendoExc(true);                
              }else if(val !== "excursiones"){
                const [playSound, {stop}] = tema.musica;
                playSound();                
              }
 
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
    <Navbar  className="navBg" variant="dark" expand="md">
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

            <Nav.Link as={Link}  onClick={()=>seleccion("traslados")} bsPrefix="itemsmenu" to="/traslados">Traslados</Nav.Link>

            <NavDropdown title="Excrusiones" bsPrefix="itemsmenu" id="excursiones-nav-dropdown">
              <NavDropdown.Item as={Link} onClick={()=>rocola("excursiones")} to="/excursiones/rio">Rio de Janeiro</NavDropdown.Item>
              <NavDropdown.Divider />              
              <NavDropdown.Item as={Link} onClick={()=>rocola("excursiones")} to="/excursiones/arrial">Arraial do Cabo</NavDropdown.Item>
              <NavDropdown.Divider />  
              <NavDropdown.Item as={Link} onClick={()=>rocola("excursiones")} to="/excursiones/moto">Moto</NavDropdown.Item>   
              <NavDropdown.Divider />                           
              <NavDropdown.Item as={Link} onClick={()=>rocola("excursiones")} to="/excursiones/barco">Barco</NavDropdown.Item>   
              <NavDropdown.Divider />              
              <NavDropdown.Item as={Link} onClick={()=>rocola("excursiones")} to="/excursiones/buggy">Buggy</NavDropdown.Item>                         
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


