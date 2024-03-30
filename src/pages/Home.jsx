import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import commissionIcon from '../assets/commisions/36735398-04DD-4E8B-969E-B2F732232722_1_105_c.jpeg';
import exhibitionIcon from '../assets/exhibitions/e3.png';
import installationIcon from '../assets/installations/Monkeypod/6146F7F7-F0C2-4959-BE2A-2CF2C7C55EAA.jpeg';
import wallworkIcon from '../assets/wallwork/wall/pinhole_series/D4F61ED3-BEB3-4D4A-8799-DF846177E45F_1_105_c.jpeg'

const Home = () => {

    let menuItems = [
        { title: 'Commissions', icon: commissionIcon, path: '/commissions' },
        { title: 'Exhibitions', icon: exhibitionIcon, path: '/exhibitions' },
        { title: 'Installations', icon: installationIcon, path: '/installations' },
        { title: 'Wallwork', icon: wallworkIcon, path: '/wallwork' },
    ];

    const [hovered, setHovered] = useState(commissionIcon);

    return (
        <Container md={8} sm={12} className="home col-md-8 col-sm-12 d-flex flex-row align-items-center justify-content-center my-5" style={{ backgroundImage: `${hovered}` }}>
            <Container className='home-image' style={{ backgroundImage: `url(${hovered})` }} alt="home" />
            <Container className='d-flex flex-column align-items-center justify-content-center'>
                {menuItems.map((item, index) => {
                    return (
                        <Container
                            onMouseEnter={() => setHovered(item.icon)}
                            key={index}
                            className="menu-item d-flex flex-row align-items-center justify-content-center m-2">
                            <Link to={item.path} key={index}>
                                <h2 className='mx-5'>{item.title}</h2>
                            </Link>
                        </Container>
                    );
                })}

            </Container>
        </Container>
    );
}

export default Home;