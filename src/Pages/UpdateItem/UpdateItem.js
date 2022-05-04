import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const UpdateItem = () => {
  const { itemId } = useParams();
  return (
    <section className="my-5">
      <Container>
        <Card>
          <Card.Header>
            <Row>
              <Col xs="10">
                <Card.Title>{itemId}</Card.Title>
              </Col>
              <Col xs="2" className="text-end">
                <span className="badge bg-primary">5</span>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body className="text-center">
            <Row>
              <Col md="4">
                <img
                  src="https://i.ibb.co/smhHfNc/zeros-chips.png"
                  alt="Item_image"
                  className="img-fluid"
                />
              </Col>
              <Col md="8">
                <Card.Text>
                  Description : With supporting text below as a natural lead-in
                  to additional content.
                </Card.Text>
                <p className="fw-bold fs-6">Supplier's Name : </p>
                <div className="mb-3">
                  <span className="badge bg-danger m-1">Price : 250</span>
                  <span className="badge bg-success m-1">Quantity : 10</span>
                  <span className="badge bg-primary m-1">Stock : 5</span>
                </div>
                <Button variant="danger">Delivered</Button>
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
