import React from "react";
import "./footer.scss";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

import logo from "../../assets/images/eco-logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="4">
                        <div className="logo">
                            <div>
                                <h1>Multimart</h1>
                            </div>
                        </div>
                        <p className="footer__text mt-3">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Odio quibusdam enim nam ut necessitatibus
                            dicta assumenda sapiente saepe ratione
                            reprehenderit!
                        </p>
                    </Col>

                    <Col lg="3">
                      <div className="footer__quick-links">
                        <h4 className="quick__links-title">Top Categories</h4>
                        <ListGroup>
                          <ListGroupItem className="ps-0 border-0">
                            <Link to='#'>Mobile Phones</Link>
                          </ListGroupItem>

                          <ListGroupItem className="ps-0 border-0">
                            <Link to='#'>Modern Sofa</Link>
                          </ListGroupItem>
                          
                          <ListGroupItem className="ps-0 border-0">
                            <Link to='#'>Arm Chair</Link>
                          </ListGroupItem >
                          
                          <ListGroupItem className="ps-0 border-0">
                            <Link to='#'>Smart Watches</Link>
                          </ListGroupItem>
                        </ListGroup>
                      </div>
                    </Col>

                    <Col lg="2">
                    <div className="footer__quick-links">
                        <h4 className="quick__links-title">Contact</h4>
                        <ListGroup>
                          <ListGroupItem className="ps-0 border-0">
                            <span><i class="ri-map-pin-line"></i></span>
                            <p></p>
                          </ListGroupItem>

                          <ListGroupItem className="ps-0 border-0">
                            <Link to='/cart'>Cart</Link>
                          </ListGroupItem>
                          
                          <ListGroupItem className="ps-0 border-0">
                            <Link to='/login'>Login</Link>
                          </ListGroupItem >
                          
                          <ListGroupItem className="ps-0 border-0">
                            <Link to='#'>Privacy Policy</Link>
                          </ListGroupItem>
                        </ListGroup>
                      </div>
                    </Col>

                    <Col lg="3">
                    <div className="footer__quick-links">
                        <h4 className="quick__links-title">Useful Links</h4>
                        <ListGroup>
                          <ListGroupItem className="ps-0 border-0">
                            <Link to='/shop'>Shop</Link>
                          </ListGroupItem>

                          <ListGroupItem className="ps-0 border-0">
                            <Link to='/cart'>Cart</Link>
                          </ListGroupItem>
                          
                          <ListGroupItem className="ps-0 border-0">
                            <Link to='/login'>Login</Link>
                          </ListGroupItem >
                          
                          <ListGroupItem className="ps-0 border-0">
                            <Link to='#'>Privacy Policy</Link>
                          </ListGroupItem>
                        </ListGroup>
                      </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
