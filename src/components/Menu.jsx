import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <Container className='menu'>
            <Link to="/">
                <h1 className="menu-title">LUCIA ROSENAST</h1>
            </Link>
            <Container className="menu-links d-flex flex-column justify-content-center align-items-center">
                <Link to="/commissions" className="menu-link  my-1">Comissions</Link>
                <Link to="/exhibitions" className="menu-link my-1">Exhibitions</Link>
                <Link to="/installations" className="menu-link my-1">Installations</Link>
                <Link to="/wallwork" className="menu-link my-1">Wallwork</Link>
                <Link to="/about" className="menu-link my-1">About</Link>
                <Link to="/contact" className="menu-link my-1">Contact</Link>
            </Container>
        </Container>
    );
}

export default Menu;