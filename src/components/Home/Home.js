import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Sticker from '../Sticker/Sticker';


const Home = () => {
    const [stickers, setStickers] = useState([]);
    useEffect(() => {
        fetch(`https://ancient-reaches-18202.herokuapp.com/stickers`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => setStickers(data));
    } , [])
    return (
        <div className="home-page">
            <Container>
                <Row>
                    {
                        stickers.length === 0 && <Spinner animation="border" variant="danger" />                  
                    }
                    {
                        stickers.map(sticker => <Sticker key={sticker._id} sticker={sticker}></Sticker>)
                    
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;