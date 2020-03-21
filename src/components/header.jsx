import React from 'react'
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';
import headshot from '../images/headshot.png';

class Header extends React.Component {
  render() {
    return (
      <Jumbotron fluid className="header">
        <Container>
          <Row className="justify-content-sm-center align-items-center">
            <Col xs={5} sm={4} md={3}>
              <Image src={headshot} roundedCircle />
            </Col>
            <Col xs={7} sm={6} md={4}>
              <h2>Adrian Meyer</h2>
              <h5>Software Engineer</h5>
              <p>meyer678@gmail.com</p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default Header;