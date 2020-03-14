
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
// core components

function Home() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/antoine-barres.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Paper Kit React</h1>
              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              Make your mark with a Free Bootstrap 4 (Reactstrap) UI Kit!
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
      </div>
      <div className="section text-center">
        <Container>

          <br />
          <Row>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-album-2" />
                </div>
                <div className="description">
                  <h4 className="info-title">Beautiful Gallery</h4>
                  <p className="description">
                    Spend your time generating new ideas. You don't have to
                    think of implementing.
                  </p>
                  <Button className="btn-link" color="info" href="#pablo">
                    See more
                  </Button>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-bulb-63" />
                </div>
                <div className="description">
                  <h4 className="info-title">New Ideas</h4>
                  <p>
                    Larger, yet dramatically thinner. More powerful, but
                    remarkably power efficient.
                  </p>
                  <Button className="btn-link" color="info" href="#pablo">
                    See more
                  </Button>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-chart-bar-32" />
                </div>
                <div className="description">
                  <h4 className="info-title">Statistics</h4>
                  <p>
                    Choose from a veriety of many colors resembling sugar
                    paper pastels.
                  </p>
                  <Button className="btn-link" color="info" href="#pablo">
                    See more
                  </Button>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-sun-fog-29" />
                </div>
                <div className="description">
                  <h4 className="info-title">Delightful design</h4>
                  <p>
                    Find unique and handmade delightful designs related items
                    directly from our sellers.
                  </p>
                  <Button className="btn-link" color="info" href="#pablo">
                    See more
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Popular Advertises</h2>
            <Row>
            <Col className="text-center" md="6">
              <a href="examples/landing.html" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/examples/landing-page.png")}
                  style={{ width: "100%" }}
                />
              </a>
            </Col>
            <Col className="text-center" md="6">
              <a href="examples/profile.html" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/examples/profile-page.png")}
                  style={{ width: "100%" }}
                />
              </a>

            </Col>
            </Row>
          </Container>
        </div>      
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
    </>
  );
}

export default Home;
