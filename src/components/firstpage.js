import React from "react";
import {
    Col,
    Image,
    Row,
  } from 'react-bootstrap';
import img1 from "../images/dwelcome.jpg"
const Firstpage = () => {
    return ( 
        <div style={{border:"8px solid red",margin:"50px",padding:"10px"}}> 
           <Row className="justify-content-md-center">
                <Col xs={12} sm={4} md={4}>
                    <Image src={img1} width="100%" height="500px"/>
                </Col>
            </Row>
        </div>
    );
}
 
export default Firstpage;