import React from 'react'
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';
import headshot from '../images/headshot.png';
import content from '../data/content.json';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Skills />
        <Qualities />
        <Education />
        <Experience />
        <Footer />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    const data = content.header;
    return (
      <header className="header">
        <Jumbotron fluid className="py-4">
          <Container>
            <Row className="justify-content-sm-center align-items-center">
              <Col xs={5} sm={4} md={3}>
                <Image src={headshot} roundedCircle />
              </Col>
              <Col xs={7} sm={6} md={4}>
                <h2>{data.name}</h2>
                <h5>{data.title}</h5>
                <p>{data.email}</p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </header>
    );
  }
}

class About extends React.Component {
  render() {
    const data = content.about;
    return (
      <section className="about my-5">
        <Container>
          <Row>
            <Col>
              <h4>{data.heading}</h4>
              <p className="lead">{data.statement}</p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

class Skills extends React.Component {
  render() {
    const data = content.skills;
    return (
      <section className="skills my-5">
        <Container>
          <Row>
            <Col>
              <h4>{data.heading}</h4>
            </Col>
          </Row>
          <dl className="row">
            {data.categorySkills.map((object) => {
              return [
                <dt className="col-sm-3">{object.title}</dt>,
                <dd className="col-sm-9">{object.content}</dd>
              ]
            })}
          </dl>
        </Container>
      </section>
    );
  }
}

class Qualities extends React.Component {
  render() {
    const data = content.qualities;
    return (
      <section className="qualities my-5">
        <Container>
          <Row>
            <Col>
              <h4>{data.heading}</h4>
              <ul className="mb-0">
                {data.list.map((value) => {
                  return <li>{value}</li>
                })}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

class Education extends React.Component {
  render() {
    const data = content.education;
    return (
      <section className="education my-5">
        <Container>
          <Row>
            <Col>
              <h4>{data.heading}</h4>
              <p>{data.content}</p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

class Experience extends React.Component {
  render() {
    const data = content.experience;
    return (
      <section className="experience my-5">
        <Container>
          <Row>
            <Col>
              <h4>{data.heading}</h4>
            </Col>
          </Row>
          {data.positions.map((object) => {
            return ([
              <Row>
                <Col xs={9}>
                  <strong>{object.title}</strong>
                  {object.company.length && 
                    <span className="pr-3">, {object.company}</span>
                  }
                  {object.location.length &&
                    <span>{object.location}</span>
                  }
                </Col>
                <Col xs={3} className="text-right">{object.date}</Col>
              </Row>,
              <Row>
                <Col>
                  <ul>
                    {object.items.map((value) => {
                      return <li>{value}</li>
                    })}
                  </ul>
                </Col>
              </Row>
            ])
          })}
        </Container>
      </section>
    );
  }
}

class Footer extends React.Component {
  render() {
    const data = content.footer;
    return (
      <Jumbotron fluid className="footer py-3 my-0">
        <Container>
          <Row className="justify-content-sm-center align-items-center">
            <Col>
              <p className="text-center my-0">{data.tag} {'\u00b7'} <a href="https://github.com/meyer678/resume">View the code on GitHub</a></p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default Main;