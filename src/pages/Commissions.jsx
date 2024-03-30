import Container from 'react-bootstrap/Container';

import img1 from '../assets/commisions/36735398-04DD-4E8B-969E-B2F732232722_1_105_c.jpeg';
import img2 from '../assets/commisions/487B9C89-9B77-417B-A1BB-905275631608_4_5005_c.jpeg';
import img3 from '../assets/commisions/51F595D3-7056-413C-8D80-05E4C6B012B8_1_105_c.jpeg';
import img4 from '../assets/commisions/78A6753B-3DA0-4A88-86FA-641426322870_1_105_c.jpeg';
import img5 from '../assets/commisions/86301021-F2DE-4369-B7CF-4330266C7A7E_1_105_c.jpeg';
import img6 from '../assets/commisions/89F039A0-5F4B-4BA7-AC2F-454AB21B34F7_1_201_a.jpg';
import img7 from '../assets/commisions/A81CDD15-FFAF-4B46-933E-039A3BD11503_1_201_a.jpg';
import img8 from '../assets/commisions/D9C00331-722A-487A-8BEC-8DAA1CAF6257_1_105_c.jpeg';
import img9 from '../assets/commisions/FD69AB71-254B-49CB-9038-4D430CAAA70A_1_105_c.jpeg';

const Commissions = () => {
    let images = [
        {
            img: img1,
            title: 'Title',
            description: 'Description'
        },
        {
            img: img2,
            title: 'Title',
            description: 'Description'
        },
        {
            img: img3,
            title: 'Title',
            description: 'Description'
        },
        {
            img: img4,
            title: 'Title',
            description: 'Description'
        },
        {
            img: img5,
            title: 'Title',
            description: 'Description'
        },
        {
            img: img6,
            title: 'Title',
            description: 'Description'
        },
        {
            img: img7,
            title: 'Title',
            description: 'Description'
        },
        {
            img: img8,
            title: 'Title',
            description: 'Description'
        },
        {
            img: img9,
            title: 'Title',
            description: 'Description'
        }
    ]

    return (
        <Container className="commissions col-md-8 col-sm-12 d-flex flex-row align-items-center justify-content-center">
            {images.map((image, index) => {
                return (
                    <Container Container key={index} className='commission-item d-flex flex-row align-items-center justify-content-center my-2 mx-1 p-3' >
                        <Container style={{ backgroundImage: `url(${image.img})` }} className='item-icon p-0 m-0' ></Container>
                        <Container>
                            <h2 style={{ height: "50%" }} className='p-0 m-0'>{image.title}</h2>
                            <p style={{ height: "45%" }} className='p-0 m-0'>{image.description}</p>
                        </Container>
                    </Container>
                );
            })}
        </Container >
    );
}

export default Commissions;