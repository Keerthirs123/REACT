import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';   
function App(){
  const[user,setuser]=useState("Guest");
  const[message,setmessage]=useState("Welcome,Guest!")
   useEffect( () =>{
    console.log(`User changed to ${user}`)
  },[user]);

  const handleclick = () =>{
    setuser("Alice")
    setmessage("Welcome,Alice")
  };
  return(
    <div className="container" style={{textAlign:"center",marginTop: "50px"}}>
    <p style={{color:"blue",fontSize:"50px"}}>{message}</p>
    <button className="btn btn-primary" onClick={handleclick}>Login as Alice</button>
    </div>
  )
}
export default App;