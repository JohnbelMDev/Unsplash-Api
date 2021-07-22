import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button,Col } from 'react-bootstrap';

const Photo = ({user,image}) =>{
    return(

<Col md={4}>

<Card style={{ width: '14rem' }}>
<Card.Img variant="top" src={image} />
<Card.Body>
  <Card.Title>{user}</Card.Title>
 
</Card.Body>
</Card>
</Col>

    )
}

export default Photo