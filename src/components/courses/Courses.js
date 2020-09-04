import React from 'react';
import '../css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './Courses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCartPlus, faPlus } from '@fortawesome/free-solid-svg-icons';
const Courses = (props) => {

    const {title,img,instructorName,price} = props.course;
    const AddCourseHandler = props.AddCourseHandler;

    
    return (
        <Container className="ContainerClass">
       
            <Row >
                <Col  className ="image">
                   <img src = {img}/>
                </Col> 
             <Col className="description">
            <h4>{title}</h4>
            <h5>Instructor: {instructorName}</h5>
            <p>Price : ${price}</p>
            <button onClick={()=>AddCourseHandler(props.course)} className="btn btn-warning text-white">Enroll Now <FontAwesomeIcon icon={faPlus} /></button>
           </Col>
            </Row>         
        </Container>
    );
};

export default Courses;