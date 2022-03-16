import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import './NavBar.css';


function NavBar() {

    return (

        <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">Minder</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#nosotros">Nosotros</Nav.Link>
          <Nav.Link href="#productos">Productos</Nav.Link>
          <Nav.Link>
           <img src='https://www.em-tools.es/media/faq/tmp/icon/shopping-cart-of-checkered-design.png' alt='icono-carrito' className='carrito' />
          </Nav.Link>
        </Nav>
        </Container>
      </Navbar>

    )
}

export default NavBar