import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Home =()=>{

    const [key1,setKey1]=useState("")
    const [key2,setKey2]=useState("")
    const [key3,setKey3]=useState("")
    const [key4,setKey4]=useState("")
    const [key5,setKey5]=useState("")
    const navigate =useNavigate()

    const submithandler1=async(e)=>{
        e.preventDefault();
        const res= await fetch("/checkkey",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                keyy:key1
            })
        })
        const data=await res.json();
        console.log(data)
        if(data.message=="valid"){
            window.alert("key is valid")
            navigate("/fplacepage")
        }else if(data.error=="invalid"){
            window.alert("key is invalid");
        }
    }
    const submithandler2=async(e)=>{
        e.preventDefault();
        const res= await fetch("/checkkey",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                keyy:key2
            })
        })
        const data=await res.json();
        console.log(data)
        if(data.message=="valid"){
            window.alert("key is valid")
            navigate("/dailydpage")
        }else if(data.error=="invalid"){
            window.alert("key is invalid");
        }
    }
    const submithandler3=async(e)=>{
        e.preventDefault();
        const res= await fetch("/checkkey",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                keyy:key3
            })
        })
        const data=await res.json();
        console.log(data)
        if(data.message=="valid"){
            window.alert("key is valid")
            navigate("/fpeoplepage")
        }else if(data.error=="invalid"){
            window.alert("key is invalid");
        }
    }
    const submithandler4=async(e)=>{
        e.preventDefault();
        const res= await fetch("/checkkey",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                keyy:key4
            })
        })
        const data=await res.json();
        console.log(data)
        if(data.message=="valid"){
            window.alert("key is valid")
            navigate("/storypage")
        }else if(data.error=="invalid"){
            window.alert("key is invalid");
        }
    }
    const submithandler5=async(e)=>{
        e.preventDefault();
        const res= await fetch("/checkkey",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                keyy:key5
            })
        })
        const data=await res.json();
        console.log(data)
        if(data.message=="valid"){
            window.alert("key is valid")
            navigate("/fdishpage")
        }else if(data.error=="invalid"){
            window.alert("key is invalid");
        }
    }
    return (
        <div style={{margin:"5px",border:"4px solid black",padding:"10px" ,backgroundColor:"grey"}}>
        <div style={{margin:"5px",border:"4px solid black",padding:"10px",backgroundColor:"white",borderRadius:"15px"}}>
            <h2>Daily Dairy</h2>
            <Form onSubmit={submithandler2}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Key</Form.Label>
                    <Form.Control type="password" placeholder="Enter the Key" required value={key2}
                    onChange={(e) => setKey2(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>

        <div style={{margin:"5px",border:"4px solid black",padding:"10px",backgroundColor:"white",borderRadius:"15px"}}>
            <h2>Favourite Places</h2>
            <Form onSubmit={submithandler1}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Key</Form.Label>
                    <Form.Control type="password" placeholder="Enter the Key" required value={key1}
                    onChange={(e) => setKey1(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>

        <div style={{margin:"5px",border:"4px solid black",padding:"10px",backgroundColor:"white",borderRadius:"15px"}}>
            <h2>lovely People</h2>
            <Form onSubmit={submithandler3}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Key</Form.Label>
                    <Form.Control type="password" placeholder="Enter the Key" required value={key3}
                    onChange={(e) => setKey3(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        <div style={{margin:"5px",border:"4px solid black",padding:"10px",backgroundColor:"white",borderRadius:"15px"}}>
            <h2>Story of the day</h2>
            <Form onSubmit={submithandler4}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Key</Form.Label>
                    <Form.Control type="password" placeholder="Enter the Key" required value={key4}
                    onChange={(e) => setKey4(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        <div style={{margin:"5px",border:"4px solid black",padding:"10px",backgroundColor:"white",borderRadius:"15px"}}>
            <h2>Add favorite Dish</h2>
            <Form onSubmit={submithandler5}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Key</Form.Label>
                    <Form.Control type="password" placeholder="Enter the Key" required value={key5}
                    onChange={(e) => setKey5(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        </div>
    )
}
export default Home
