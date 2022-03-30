import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CardWidget from '../CardWidget/CardWidget';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

function NavBar() {

  return (
    <Navbar className='barra'>
      <Container fluid>
        <NavLink to="/">
          <img src="../../assets/logo.png" width='150px' height='110px' alt="logo" />
        </NavLink>
        <Nav className="me-auto">
          <NavLink to="/" className="btn-barra">Inicio</NavLink>
          <NavLink to="/categoria/perros" className="btn-barra">Perros</NavLink>
          <NavLink to="/categoria/gatos" className="btn-barra">Gatos</NavLink>
          <NavLink to='/cardWidget' className="btn-barra">
            <CardWidget />
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar