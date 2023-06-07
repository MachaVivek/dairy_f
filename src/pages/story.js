import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import { NavLink } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import {
  Col,
  Image,
  Row,
} from 'react-bootstrap';
import img1 from "../images/dstory.jpg"

const Story = () => {
    const [email,setEmail]=useState("")
    const [sname,setSname]=useState("")
    const [why,setWhy]=useState("")
    const [finala,setFinala]=useState([[]])
    
    const submithandler = (e) => {
        e.preventDefault();
        var pattern = /^([a-zA-Z0-9])+@gmail.com/;
        try {
          let f1 = 0;
          if (pattern.test(email) === true) {
            f1 = 1;
          } else {
            alert("email should contain combinatation of letters and numbers");
          }
          if (f1 === 1) {
            axios.post(`${process.env.REACT_APP_API_HOST}/postfstory`, {
              email: email,
              sname: sname,
              why:why,
            });
            window.alert("added successfully")
          }
        } catch (err) {
          console.log(err);
          window.alert("something went wrong")
        }
      };

      const [emaill,setEmaill]=useState("")
      const gethandler=(e)=>{
        e.preventDefault()
        axios.get(`${process.env.REACT_APP_API_HOST}/getfstory/${emaill}`).then((res)=>{
            let x=0;
            for(let i=0;i<emaill.length;i++){
                x+=emaill[i].charCodeAt()
            }
            const usingkeyde=(s)=>{
              let finall="";
                let temp="";
                for(let i=0;i<s.length;i++){
                    if(s[i]=='#'){
                        finall+=(String.fromCharCode(parseFloat(temp)*17/x))
                        temp=""
                    }else{
                        temp+=s[i]
                    }
                }
                return finall
            }
            
          let final=[]
          for(let i=0;i<res.data["data"].length;i++){
            final.push({
              pname:usingkeyde(res.data["data"][i]["sname"]),
              why:usingkeyde(res.data["data"][i]["why"]),
              date:res.data["data"][i]["date"].slice(0,10)
            })
          }
          console.log(final)
          setFinala(final)
        }).catch((error)=>{
          console.log(error)
        })
      }
      
    return (  
        <div style={{margin:"5px",border:"4px solid black",padding:"10px"}}>
             <h1 style={{textAlign:"center"}}>Favorite Stories In Your Life</h1>

            <div style={{margin:"5px",border:"4px solid black",padding:"10px",backgroundColor:"grey"}}>
            <div style={{margin:"5px",border:"4px solid black",padding:"10px",backgroundColor:"white",borderRadius:"15px"}}>
            <Form onSubmit={gethandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email to get the list" value={emaill} required onChange={(e) => setEmaill(e.target.value)}/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            </div>

              {finala.map((ind) => (
              <div
              style={{margin:"5px",border:"4px solid black",padding:"10px",backgroundColor:"white",borderRadius:"15px"}}
              >
                <br/>
                date : <div className="showtext"> 
                 {ind.date}
                </div>
                <br/>
                 Story Title : <div className="showtext"> 
                 {ind.pname}
                </div>
                <br/>
                Story : <div className="showtext"> 
                 {ind.why}
                </div>
                
              </div>
            ))}
            </div>

            <br/>
            <Row className="justify-content-md-center">
                <Col xs={12} sm={4} md={4}>
                    <Image src={img1} width="100%"/>
                </Col>
            </Row>
            <br/>

            <div style={{margin:"5px",border:"4px solid black",padding:"10px",backgroundColor:"white",borderRadius:"15px"}}>
            <Form onSubmit={submithandler} >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email to insert the person" name="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-sm">Story Title </InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    name="fstory"
                    required
                    value={sname}
                    onChange={(e) => setSname(e.target.value)}
                  />
                </InputGroup>

                <InputGroup>
                <InputGroup.Text>Story </InputGroup.Text>
                <Form.Control as="textarea" aria-label="With textarea" 
                  name="reason"
                    required
                    value={why}
                    onChange={(e) => setWhy(e.target.value)} />
              </InputGroup>
              <br/>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            </div>

            <Button variant="success"><NavLink to="/home" style={{color:"white"}}>Home page</NavLink></Button>{' '}
        </div>
    );
}
export default Story;
