import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <Container className='menu'>
            <Link to="/">
                <h1 className="menu-title">LUCIA ROSENAST</h1>
            </Link>
            <Container className="menu-links d-flex flex-column justify-content-center align-items-center">
                <Link to="/" className="menu-link">Home</Link>
                <Link to="/about" className="menu-link">About</Link>
                <Link to="/projects" className="menu-link">Projects</Link>
                <Link to="/contact" className="menu-link">Contact</Link>
            </Container>
        </Container>
    );
}

export default Menu;