import React from "react";
import "../App.css";
import dimg from "../images/dimage.jpeg"
const Aboutus = () => {

    return (
        <div style={{margin:"5px",border:"4px solid black",padding:"10px"}}>
            <div class="about-section">
                <h1>About Us</h1>
                <p>this is very good website to write and read your dairy</p>
                <p>This is extremely secure and your data is encrypted and protected</p>
            </div>
            <h2 style={{textAlign:"center"}}>Our Team</h2>
            <div class="row">
            <div class="column">
                <div class="card">
                <img src={dimg} alt="Jane" style={{width:"100%" ,height:"500px"}}></img>
                <div class="container">
                    <h2>Macha.Vivek</h2>
                    <p class="title">Student</p>
                    <p>I am currently studing in keshav Memorial Insitute of Technology where I learned MERN technology which helped me in doing this website</p>
                    <p>machavivek2003@gmail.com</p>
                    <p><button class="button">Contact</button></p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}
export default Aboutus;