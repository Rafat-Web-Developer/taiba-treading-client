import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

const AddItem = () => {
  const handleAddItemSubmit = (event) => {
    event.preventDefault();

    const itemName = event.target.name.value;
    const itemDescription = event.target.description.value;
    const itemPrice = event.target.price.value;
    const itemQuantity = event.target.quantity.value;
    const itemStock = event.target.stock.value;
    const itemSupplier = event.target.supplier.value;
    const itemImage = event.target.image.value;

    const data = {
      name: itemName,
      description: itemDescription,
      price: itemPrice,
      quantity: itemQuantity,
      stock: itemStock,
      supplier: itemSupplier,
      image: itemImage,
    };

    // console.log(data);

    fetch("http://localhost:5000/item", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    event.target.reset();
  };

  return (
    <section className="my-5">
      <Container>
        <Card className="rafat-form-resize mx-auto">
          <Card.Header className="bg-primary text-white fw-bold">
            Add a new item
          </Card.Header>
          <Card.Body className="py-4">
            <Form onSubmit={handleAddItemSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter Item name here"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="Enter description here"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Control
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicQuantity">
                <Form.Control
                  type="number"
                  name="quantity"
                  placeholder="Enter quantity"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicStock">
                <Form.Control
                  type="number"
                  name="stock"
                  placeholder="Enter stock value"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicSupplier">
                <Form.Control
                  type="text"
                  name="supplier"
                  placeholder="Enter supplier's name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Control
                  type="text"
                  name="image"
                  placeholder="Enter image path"
                  required
                />
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
