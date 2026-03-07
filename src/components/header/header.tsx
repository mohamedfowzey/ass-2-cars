import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mainLogo from '../../assets/mainLogo.png';
import './header.scss'

function Header() {
  return (
    <Navbar expand="lg" className="bg-transparent position-absolute w-100 z-index-10">
      <Container>
        <Navbar.Brand href="#home"><img src={mainLogo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto fw-normal">
            <Nav.Link href="#">become arenter </Nav.Link>
            <Nav.Link href="#">rental deals</Nav.Link>
            <Nav.Link href="#">how it works</Nav.Link>
            <Nav.Link href="#">why choose us</Nav.Link>
          </Nav>
          <Button variant='outline'>sign in </Button>
          <Button variant='primary'>sign up </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;