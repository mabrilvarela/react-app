import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


function NavBar() {

    return (

        <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">Minder</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#nosotros">Nosotros</Nav.Link>
          <Nav.Link href="#productos">Productos</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

    )
}

export default NavBar