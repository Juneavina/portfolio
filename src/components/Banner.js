import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowDownCircle } from "react-bootstrap-icons";


export const Banner = () => {

  return (
    <>
      <div className="banner">
        <Container>
          <Row>
            <Col xs={12} md={6} xl={7}>
            <div className="banner-text">
              <h1>Hi, I'm <span className="name">June.</span></h1>
              <h2>A Passionate Software Developer.</h2>
              <button onClick={() => console.log('connect')}>About Me<ArrowDownCircle size={25}/></button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Banner