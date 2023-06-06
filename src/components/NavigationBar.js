import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './NavigationBar.css';

function NavigationBar() {
    return (
        <Navbar className="NavBar" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    <img
                        alt=""
                        src="/logo192.png"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                 </Navbar.Brand>
        <Nav className="me-auto">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="tooltip-abuelitos">Tooltip for Abuelitos ABP</Tooltip>}
          >
            <Nav.Link className="NavLink" as={Link} to="/" style={{color: 'black'}}>
              Inicio
            </Nav.Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="tooltip-contacto">Tooltip for Contacto</Tooltip>}
          >
            <Nav.Link className="NavLink" as={Link} to="/areas" style={{color: 'black'}}>
              Áreas
            </Nav.Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="tooltip-pruebas">Tooltip for Pruebas</Tooltip>}
          >
            <Nav.Link className="NavLink" as={Link} to="/acerca" style={{color: 'black'}}>
              Mi Perfil
            </Nav.Link>
          </OverlayTrigger>
        </Nav>
        <Nav className="ms-auto">
        <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="tooltip-abuelitos">Tooltip for Log In</Tooltip>}
          >
            <Nav.Link className="NavLink" as={Link} to="/login" style={{color: 'black'}}>
              Ingresa
            </Nav.Link>
          </OverlayTrigger>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;