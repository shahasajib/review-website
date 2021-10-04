import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import "./Service.css"

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('../fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='service-header-text'>
                <h3><u>Our Courses</u></h3>
            </div>
            <div>
                <Row xs={1} md={3} className="g-2">
                    {
                        services.map((service) => (

                            < Col >
                                <Card className="card h-80">
                                    <Card.Img className="img" variant="top" src={service.img} />
                                    <Card.Body className="card-text">
                                        <Card.Title>{service.courseName}</Card.Title>
                                        <Card.Text>
                                            <h6>Price: {service.price}</h6>
                                            <p>Duration: {service.duration}</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                        ))

                    }
                </Row>
            </div>
        </div >
    );
};

export default Service;