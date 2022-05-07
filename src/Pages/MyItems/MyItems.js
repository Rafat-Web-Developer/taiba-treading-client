import React, { useEffect, useState } from "react";
import { Button, Card, Container, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);

  const email = user.email;

  useEffect(() => {
    const url = `http://localhost:5000/items/${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <section className="py-5">
      <Container>
        <Card>
          <Card.Header className="bg-primary fw-bold text-white text-center fs-5">
            My All Items
          </Card.Header>
          <Card.Body>
            {items.length === 0 ? (
              <h1 className="text-danger text-center">Empty Items</h1>
            ) : (
              <Table responsive striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Stock</th>
                    <th>Supplier Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>
                        <img
                          src={item.image}
                          alt="item_img"
                          style={{ width: "50px", height: "50px" }}
                        />
                      </td>
                      <td>{item.description}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>{item.stock}</td>
                      <td>{item.supplier}</td>
                      <td>
                        <Button
                          variant="danger"
                          type="submit"
                          className="fw-bold"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default MyItems;
