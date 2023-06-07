import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {
    Col,
    Image,
    Row,
  } from 'react-bootstrap';
import img1 from "../images/d8.webp"
const Loginpage = () => {

    const [fname,setFname]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const navigate=useNavigate()

    const loginUser= async(e)=>{
        e.preventDefault()
        const res= await fetch(`${process.env.REACT_APP_API_HOST}/postlogin`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                fname:fname,
                email:email,
                password:password
            })
        })
        
        const data=await res.json();


        if(data.error==="false" || !data){
            window.alert("incorrect creditionals")
        }else{
            window.alert("login successfull")
            navigate("/home")
        }
    }
    return (
        <div style={{padding:"10px",border:"4px solid black",margin:"5px"}}>
            <h1 style={{textAlign:"center"}}>login page</h1>
           <Row className="justify-content-md-center">
                <Col xs={12} sm={4} md={4}>
                    <Image src={img1} />
                </Col>
            </Row>
            <br/>
            <Form method="POST" onSubmit={loginUser}>
                <Form.Group className="mb-3" >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" required
                        value={fname}
                        onChange={(e)=>setFname(e.target.value)} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            <br/>
            <Button variant="success"><NavLink to="/registerpage" style={{color:"white"}}>register here</NavLink></Button>{' '}
        </div>
    );
}
 
export default Loginpage;
