import Container from 'react-bootstrap/Container';
import { useLocation } from 'react-router-dom'

const CommissionPanel = () => {
    let location = useLocation();
    console.log(location.state.image);
    return (
        <Container md={8} sm={12} className="commission-panel d-flex flex-column align-items-center justify-content-center">
            {location.state.image ? (
                <div>
                    <h1 className='text-center py-3'>{location.state.image.title}</h1>
                    <img src={location.state.image.img} alt={location.state.image.title} />
                    <p className="text-center">{location.state.image.description}</p>
                </div>
            ) : (
                <h1 className='coming-soon text-center py-3'>COMING SOON</h1>
            )}
        </Container>
    );
}

export default CommissionPanel;