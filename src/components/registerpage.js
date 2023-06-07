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
import img1 from "../images/d9.jpg"

const Registerpage = () => {
    const [user,setUser]=useState({
        fname:"",lname:"",gender:"",email:"",password:"",keyy:"",ckeyy:""
    })
    let name,value;
    const handleInputs=(e)=>{
        name=e.target.name
        value=e.target.value
        setUser({...user,[name]:value});
    }

    const navigate = useNavigate();
    const PostData= async (e)=>{
        e.preventDefault();
        const { fname,lname,gender,email,password,keyy,ckeyy}=user;
        const res = await fetch(`${process.env.REACT_APP_API_HOST}/postregister`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body : JSON.stringify({
                fname,lname,gender,email,password,keyy,ckeyy
            })
        })
        const data=await res.json();
        if(data.status===422 || !data){
            window.alert("Invalid registeration")
        }else{
            window.alert("registeration successfull")
            navigate("/loginpage")
        }
    }
    return (
        <div style={{padding:"20px",border:"4px solid black",margin:"5px"}}>
            <h1 style={{textAlign:"center"}}>Register</h1>

            <Row className="justify-content-md-center">
                <Col xs={12} sm={4} md={4}>
                    <Image src={img1} width="100%" height="300px"/>
                </Col>
            </Row>
            <br/>

            <Form method="POST" onSubmit={PostData}>
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" name="fname"
                    required
                    value={user.fname}
                    onChange={handleInputs}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" required
                    name="lname"
                    value={user.lname}
                    onChange={handleInputs}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Gender</Form.Label>
                    <Form.Control type="text" placeholder="Enter Gender" name="gender" value={user.gender} onChange={handleInputs}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email"
                    required
                    value={user.email}
                    onChange={handleInputs} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                    name="password"
                    required
                    value={user.password}
                    onChange={handleInputs} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>key</Form.Label>
                    <Form.Control type="password" placeholder="Enter the key" 
                    name="keyy"
                    required
                    value={user.keyy}
                    onChange={handleInputs} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>confirm key</Form.Label>
                    <Form.Control type="password" placeholder="confirm key" 
                    name="ckeyy"
                    required
                    value={user.ckeyy}
                    onChange={handleInputs} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <br/>
            <Button variant="success"><NavLink to="/loginpage" style={{color:"white"}}>Login here</NavLink></Button>{' '}
        </div>
    );
}
 
export default Registerpage;
