import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

const AddItem = () => {
  return (
    <section className="my-5">
      <Container>
        <Card className="rafat-form-resize mx-auto">
          <Card.Header className="bg-primary text-white fw-bold">
            Add a new item
          </Card.Header>
          <Card.Body className="py-4">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" placeholder="Enter Item name here" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Control
                  type="text"
                  placeholder="Enter description here"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Control type="number" placeholder="Enter price" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicQuantity">
                <Form.Control type="number" placeholder="Enter quantity" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Control type="text" placeholder="Enter image path" />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="fw-bold w-100 mt-3"
              >
                Add Item
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default AddItem;
