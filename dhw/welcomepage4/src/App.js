import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  bgImage from './images/bg.jpg'


function App(){
useEffect( () =>{
  console.log("Welcome message displayed");
},[]);

return(
  <div className="container-fluid d-flex flex-column justify-content-center align-items-center" 
     style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        textAlign:"center",
        paddingTop:"100px"
        
      }}>
    <h1 className="display-4" 
     style={{
      fontSize:"40px",
      color:"grey",
      fontFamily:"fantasy"
     }}
    >Welcome</h1>
    <p style={{color:"grey", fontFamily:"fantasy",fontSize:"50px"}}>Hello, user! Welcome to our site!</p>
  </div>
);
}
export default App;

