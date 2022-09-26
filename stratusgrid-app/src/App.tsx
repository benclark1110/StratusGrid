import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Pokemon App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Gotta catch 'em all!</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br/>
      <Container>
        <Card>
          <Card.Body>Catch a Pokemon!
            <Button variant="success">Catch</Button>{' '}
          </Card.Body>
        </Card>
        <br/>
        <Card>
          <Card.Body>Release a Pokemon
            <Button variant="secondary">Release</Button>{' '}
          </Card.Body>
        </Card>
        <br/>
        <Card>
          <Card.Body>My Pokemon</Card.Body>
        </Card>
        <ListGroup>
          <ListGroup.Item>Pokemon 1</ListGroup.Item>
          <ListGroup.Item>Pokemon 2</ListGroup.Item>
          <ListGroup.Item>Pokemon 3</ListGroup.Item>
          <ListGroup.Item>Pokemon 4</ListGroup.Item>
          <ListGroup.Item>Pokemon 5</ListGroup.Item>
          <ListGroup.Item>Pokemon 6</ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  );
}

export default App;
