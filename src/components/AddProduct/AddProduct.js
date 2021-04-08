import React, { useState, useContext } from 'react';
import { stickerContext } from '../../App';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faPlusSquare, faWrench } from '@fortawesome/free-solid-svg-icons';


const AddProduct = () => {
    
    const history = useHistory()
    const handleManageProduct = () => {
        history.push('/manageProduct');
    }
    const handleEditProduct = () => {
        history.push('/editProduct');
    }
    const [loggedInUser, setLoggedInUser] = useContext(stickerContext);
    const [imageURL, setImageURL] = useState(null);
    console.log(imageURL)
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "0fdcc6b84305ed4a8a4a0ac317723978");
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const eventData = {
            pName: data.pName,
            price: data.price,
            weight: data.weight,
            date: new Date().toDateString('dd/MM/yyyy HH:MM:SS'),
            image: imageURL
        }
        const newBooking = {...loggedInUser, ...eventData};
        const url = `https://ancient-reaches-18202.herokuapp.com/addSticker`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        })
        .then(res => {
            console.log('server');
            alert('your sticker has been added!')
        })
        console.log(data)
        console.log(newBooking)
    };
    return (
      <div>
        <div className="hero-header">
          <h1>Add Sticker</h1>
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
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faPlusSquare} />
                    </span>{" "}
                    Add Sticker
                  </li>
                  <li onClick={() => handleEditProduct()}>
                    <span>
                      <FontAwesomeIcon icon={faEdit} />
                    </span>
                    Edit Sticker
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={8} xs={12}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Sticker Name</label>
                <input
                  className="form-control"
                  name="pName"
                  placeholder="Sticker Name"
                  ref={register}
                />
                <br />
                <label htmlFor="price">Sticker Price</label>
                <input
                  className="form-control"
                  name="price"
                  placeholder="Price"
                  ref={register}
                />
                <br />
                <label htmlFor="weight">Sticker Type</label>
                <input
                  className="form-control"
                  name="weight"
                  placeholder="sticker type"
                  ref={register}
                />
                <br />
                <label htmlFor="image">Upload Sticker Image</label>
                <input
                  className="form-control"
                  name="image"
                  type="file"
                  onChange={handleImageUpload}
                />
                <br />
                <input type="submit" />
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default AddProduct;