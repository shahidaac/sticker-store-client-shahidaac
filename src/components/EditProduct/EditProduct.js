import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faPlusSquare, faWrench } from '@fortawesome/free-solid-svg-icons';


const EditProduct = () => {
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
    return (
      <div>
        <div className="hero-header">
          <h1>Edit Stickers</h1>
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
            <Col md={8} xs={12}></Col>
          </Row>
        </Container>
      </div>
    );
};

export default EditProduct;