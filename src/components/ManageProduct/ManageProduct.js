import React, { useState, useContext, useEffect } from 'react';
import { stickerContext } from '../../App';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faPlusSquare, faWrench } from '@fortawesome/free-solid-svg-icons';



const ManageProduct = () => {
    const history = useHistory()
    const handleManageProduct = () => {
        history.push('/manageProduct');
    }
    const handleEditProduct = () => {
        history.push('/editProduct');
    }   
    const handleAddProduct = () => {
        history.push('/addProduct');
    }
    const deleteProduct = (id) => {
        fetch(`https://ancient-reaches-18202.herokuapp.com/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            console.log("deleted", result);
            alert("Product Deleted Successfully");
          });
    }
    const [loggedInUser, setLoggedInUser] = useContext(stickerContext);
    const [manageProducts, setManageProducts] = useState([]);
    useEffect(() => {
        fetch(
          "https://ancient-reaches-18202.herokuapp.com/manageProduct?email=" + loggedInUser.email,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => setManageProducts(data));
    } , [])
    return (
      <div>
        <div className="hero-header">
          <h1>Manage Sticker</h1>
        </div>
        <Container>
          <Row>
            <Col md={4} xs={12}>
              <div className="sidebar">
                <ul>
                  <li onClick={() => handleManageProduct()}>
                    <span>
                      <FontAwesomeIcon icon={faWrench} />
                    </span>{" "}
                    Manage Sticker
                  </li>
                  <li onClick={() => handleAddProduct()}>
                    <span>
                      <FontAwesomeIcon icon={faPlusSquare} />
                    </span>{" "}
                    Add Sticker
                  </li>
                  <li onClick={() => handleEditProduct()}>
                    <span>
                      <FontAwesomeIcon icon={faEdit} />
                    </span>{" "}
                    Edit Sticker
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={8} xs={12}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Sticker Name</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {manageProducts.map((sticker) => (
                    <tr>
                      <td>{sticker.pName}</td>
                      <td>{sticker.weight}</td>
                      <td>{sticker.price}</td>
                      <td>
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faEdit} />{" "}
                        </span>
                        <span onClick={() => deleteProduct(sticker._id)}>
                          {" "}
                          <FontAwesomeIcon icon={faTrashAlt} />{" "}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default ManageProduct;