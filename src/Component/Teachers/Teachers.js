import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import "./Teachers.css"

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch("../fakeData2.json")
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <div>
            <div className='text'>
                <h2><u>Our Mentors</u></h2>
            </div>
            <div className="container">
                <Row xs={1} md={2} className="g-2">
                    {
                        teachers.map((teacher) => (

                            < Col key={teacher.id}>
                                <Card className="card h-80">
                                    <Card.Img className="img3" variant="top" src={teacher.img} />
                                    <Card.Body className="card-text">
                                        <Card.Title>{teacher.name}</Card.Title>
                                        <Card.Text>
                                            <h6>{teacher.position}</h6>
                                            <p>{teacher.details}</p>
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

export default Teachers;