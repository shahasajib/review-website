import React, { useEffect, useState } from 'react';
import "./Home.css"
import image from '../../image/home1.jpg'
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Home = () => {
    const [ms, setms] = useState([]);
    useEffect(() => {
        fetch('../fakeData.json')
            .then(res => res.json())
            .then(data => setms(data.slice(3, 7)))
    }, [])
    return (
        <div>
            <div className="home-header">
                <div className="home-header-text">
                    <h1>Future-focussed financial management</h1>
                </div>
                <div className="m-3">
                    <img className="w-100" src={image} alt="" />
                </div>
            </div>
            <div className='home-text'>
                <h2 className="text-start ">Most Popular Course</h2>
            </div>
            <div className="container ">
                <Row xs={1} md={2} className="g-4">
                    {
                        ms.map((ms) => (
                            < Col >
                                <Card className="card2">
                                    <Card.Img className="img2" variant="top" src={ms.img} />
                                    <Card.Body className="card-text">
                                        <Card.Title>{ms.courseName}</Card.Title>
                                        <Card.Text>
                                            <h6>Price:{ms.price}</h6>
                                            <p>Duration:{ms.duration}</p>
                                        </Card.Text>
                                        <Link to="/service" className="fs-6 card-link-text"><p>Find More</p></Link>
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

export default Home;