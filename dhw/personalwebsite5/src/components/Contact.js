import React, { useState} from "react";
import Navbar from "./Navbar"
function Contact(){
    const [bgColor,setbgColor]=useState("Teal") 
    const buttonclick= () =>{
        document.getElementById("demo").innerHTML ="Hello from React! I love this page!"
        setbgColor("lightblue")
    }
    return(
    <div>
        <div><Navbar/></div>
      <div className="card p-4 mb-4"
       style={{
        backgroundColor:bgColor,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"50px"
      }}>
            <h1>Contact</h1>
            <p>"This is the contactpage"</p>
            <button className="btn btn-primary" onClick={buttonclick}>Show Enthusiasm
            </button>
            <p id="demo">Click the button to see my enthusiasm!</p>

        </div>
    </div>
    )
    
}
export default Contact;