import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const UpdateItem = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/item/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const handleDelivered = () => {
    alert("Click");
  };

  return (
    <section className="my-5">
      <Container>
        <Card>
          <Card.Header>
            <Row>
              <Col xs="10">
                <Card.Title>{item.name}</Card.Title>
              </Col>
              <Col xs="2" className="text-end">
                <span className="badge bg-primary">{item.stock}</span>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body className="text-center">
            <Row>
              <Col md="4">
                <img src={item.image} alt="Item_image" className="img-fluid" />
              </Col>
              <Col md="8">
                <Card.Text>Description : {item.description}</Card.Text>
                <p className="fw-bold fs-6">
                  Supplier's Name : {item.supplier}
                </p>
                <div className="mb-3">
                  <span className="badge bg-danger m-1">
                    Price : {item.price}
                  </span>
                  <span className="badge bg-success m-1">
                    Quantity : {item.quantity}
                  </span>
                  <span className="badge bg-primary m-1">
                    Stock : {item.stock}
                  </span>
                </div>
                <Button variant="danger" onClick={handleDelivered}>
                  Delivered
                </Button>
                <div className="my-3">
                  <form className="d-flex justify-content-center">
                    <input
                      type="text"
                      name="quantity"
                      id="quantity"
                      className="form-control w-50"
                      placeholder="Enter item quantity"
                    />
                    <Button variant="primary" className="px-2 ms-1">
                      Add Now
                    </Button>
                  </form>
                </div>
              </Col>
            </Row>
          </Card.Body>
          {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
        </Card>
      </Container>
    </section>
  );
};

export default UpdateItem;
