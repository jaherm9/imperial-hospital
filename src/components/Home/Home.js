import React, { useState } from 'react';
import Banner from "../../images/banner.jpg"
import About from '../About/About';
import fakeData from "../../fakeData/data";
import Services from '../Services/Services';
import "./Home.css"
import Doctors from '../Doctors/Doctors';
import Trusted from "../../images/trusted.jpg";
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

const Home = () => {
    const [services, setServices] = useState(fakeData);   
    return (
        <div className="home-container">
         <section className="banner">
            <img src={ Banner} className="d-block w-100" alt="..."/>
            </section>
            <Container className="mt-5">
  <Row>
    <Col>
    <div>
    <p className="fs-3">We Are Trusted The Best Certificate Healthcare, Specialist</p>
    <p >As the world enters its second year of the coronavirus pandemic, having a strong healthcare system in the country is as important as ever. We have come up with the countries viewed to have the most well-developed healthcare systems globally.</p>

    <ListGroup className="text-start">
  
  <ListGroup.Item variant="primary">
  <i class="fas fa-check"></i>
   A Good Environment For Work
  </ListGroup.Item>
  <ListGroup.Item action variant="secondary">
  <i class="fas fa-check"></i>
  Digital Laboratory
  </ListGroup.Item>
  <ListGroup.Item action variant="success">
  <i class="fas fa-check"></i>
  Emergency Services
  </ListGroup.Item>
  <ListGroup.Item action variant="danger">
  <i class="fas fa-check"></i>
  Professional Doctors
  </ListGroup.Item>
  <ListGroup.Item action variant="warning">
  <i class="fas fa-check"></i>
  Scientific skills For Getting A Better Result
  </ListGroup.Item>
  
   </ListGroup>
   
</div>
<div className="text-start mt-3">
<button type="button" className="btn btn-primary">More About Us</button>
</div>
    </Col>
    <Col>
    <section className="banner mt-3">
    <img src={ Trusted} class="d-block w-100" alt="..."/>
    </section>
    </Col>
</Row>
<div className="service-container">
                <h4>Our Service</h4>
            {
                 services.map(service => <Services
                     service={service}
                     key={service.key}
                     showDetails={ true}
                     ></Services>)
            }
            </div> 
    </Container>
            
        </div>      
    );
};

export default Home;