import React from 'react';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

const Sticker = (props) => {
  const history = useHistory();
  const handleBook = (id) => {
    history.push(`/checkout/${id}`);
  };
  const { _id, pName, price, image } = props.sticker;

  return (
    <Col md={4} xs={12}>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{pName}</Card.Title>
        </Card.Body>
        <div className="card-bottom">
          <Card.Link>{price}</Card.Link>
          <Button onClick={() => handleBook(_id)} variant="primary">
            I want to buy!
          </Button>
        </div>
      </Card>
    </Col>
  );
};

export default Sticker;