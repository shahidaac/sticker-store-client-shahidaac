import React, { useState, useEffect, useContext } from 'react';
import { stickerContext } from '../../App';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(stickerContext);
    const {id} = useParams();
    const [sticker, setPaint] = useState({});
    const eventData = {
        pName: sticker.pName,
        price: sticker.price,
        weight: sticker.weight,
        date: sticker.date,
        image: sticker.image
    }
    useEffect(() => {
        fetch(`https://ancient-reaches-18202.herokuapp.com/checkout/${id}`)
          .then((res) => res.json())
          .then((data) => setPaint(data));
    }, [id])
    const newOrder = {...loggedInUser, ...eventData}
        const url = 'https://ancient-reaches-18202.herokuapp.com/addOrder';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then(res => {
            console.log('order');
        })
    return (
        <div>
            <div className="hero-header">
                <h1>Checkout</h1>
            </div>
            <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{sticker.pName}</td>
                    <td>1</td>
                    <td>{sticker.price}</td>
                    </tr>
                    
                    <tr>
                    <td>Total</td>
                    <td></td>
                    <td>{sticker.price}</td>
                    </tr>
                </tbody>
            </Table>
            </Container>
        </div>
    );
};

export default Checkout;