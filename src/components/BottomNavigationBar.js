import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './BottomNavigationBar.css';

function BottomNavigationBar() {
    return (
        <Navbar className="NavBar" variant="dark">
        <Container>
        <Nav className="me-auto">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="tooltip-abuelitos">Tooltip for Abuelitos ABP</Tooltip>}
          >
            <Nav.Link className="NavLink" as={Link} to="/" style={{color: 'black'}}>
              Navegación
            </Nav.Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="tooltip-contacto">Tooltip for Contacto</Tooltip>}
          >
            <Nav.Link className="NavLink" as={Link} to="/acerca" style={{color: 'black'}}>
              Contacto
            </Nav.Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="tooltip-pruebas">Tooltip for Pruebas</Tooltip>}
          >
            <Nav.Link className="NavLink" as={Link} to="/acerca" style={{color: 'black'}}>
              Sobre nosotros
            </Nav.Link>
          </OverlayTrigger>
        </Nav>
        </Container>
       
    </Navbar>
  );
}

export default BottomNavigationBar;