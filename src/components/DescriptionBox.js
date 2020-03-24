import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from "react-router-dom";

function DescriptionBox(props){
    const keywords = props.keywords;
    let history = useHistory();
    function handleClick(){
        history.push("/allReviews")
    }
    return(
        
        <Container className='p-4 mb-5 bg-light rounded'>
            <Row className='m-1'>
                <Col sm={4}><p>Description</p></Col>
                <Col sm={8}>{props.description}</Col>
            </Row>
            <Row className='m-1'>
                <Col sm={4}><p>Keywords</p></Col>
                <Col sm={8}>
                    {keywords.map((key)=>
                        <Button variant='secondary' className='mx-2'>{key}</Button>
                )}   
                </Col>
            </Row>  
            <Row className='m-1'>
                <Col sm={4}><p>Bug sentiment</p></Col>
                <Col sm={8}>{props.points}</Col>
            </Row>           
            <Container className='text-right'>
                <Button variant='secondary' onClick={handleClick}>View Reviews</Button>
            </Container>
                
        </Container>
    );
}
export default DescriptionBox;