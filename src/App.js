import React, { useState } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import courses from '../src/components/data/data.json';
import Courses from './components/courses/Courses';
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCartPlus } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [cart,setCart] = useState([]);
    const AddCourseHandler = (course)=> {

    const newCart = [...cart,course];

    setCart(newCart);
    }
    const Total = cart.reduce((sum,grandTotal)=>sum + grandTotal.price,0);

    console.log(cart);

  return (
<div className="body">
    <Navigation></Navigation>

    <Container className="App">
      <Row>
      <Col className ="courses">
       <ul>
         {
           courses.map((course)=><Courses course={course} key = {course.id} AddCourseHandler={AddCourseHandler}></Courses>)
         }
       </ul>
       </Col>
       <Col className="cart">
           <h2>Course Summary </h2>
        <h3>Course Item <FontAwesomeIcon icon={faCartPlus} />:{cart.length}</h3>
           <h5>selected Course Name: </h5>
           <ul>
             {
               cart.map(items =><li><small>{items.title}</small></li>)
             }
           </ul>
            <p> Total Price :$ {Total}</p>
       </Col>
      </Row>

    </Container>
    </div>
  );
}

export default App;
