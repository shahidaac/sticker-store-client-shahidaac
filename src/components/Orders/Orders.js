import React, { useState, useContext, useEffect } from 'react';
import { stickerContext } from '../../App';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(stickerContext);
    const [orderedProducts, setOrderedProducts] = useState([]);
    useEffect(() => {
        fetch(`https://ancient-reaches-18202.herokuapp.com/orders?email=` + loggedInUser.email, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => setOrderedProducts(data));
    } , [])
    return (
        <div className="orders">
            <div className="hero-header">
                <h1>My Orders</h1>
            </div>
            <Container>
                <div className="summary">
                    <h4>Hi, {loggedInUser.name}</h4>
                    <h5>You are logged in with {loggedInUser.email}</h5>
                    
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Ordered Date</th>
                        <th>Sticker Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                {
                    orderedProducts.map(sticker => 
                    <tr>
                        <td>{sticker.date}</td>
                        <td>{sticker.pName}</td>
                        <td>{sticker.weight}</td>
                        <td>{sticker.price}</td>
                    </tr>
                    )
                }
                </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default Orders;