import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CardWidget from '../CardWidget/CardWidget';

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
          <NavLink to="/category/perros" className="btn-barra">Perros</NavLink>
          <NavLink to="/category/gatos" className="btn-barra">Gatos</NavLink>
        </Nav>
      </Container>
      <NavLink to='/cart' className="btn-barra">
        <CardWidget />
      </NavLink>
    </Navbar>
  )
}

export default NavBar