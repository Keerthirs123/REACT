import React from 'react';
import bgimage from "./image.jpg"
function Profilecard(){
  let person = "Krishna"
  let disc = "A passionate Python Full Stack Developer crafting seamless web experiences from front to back."
  let containerStyle={
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"100",
     backgroundImage:  `url(${bgimage})`,        
     backgroundRepeat: "no-repeat",
     backgroundPosititon:"center",
     backgroundSize:"cover"
  };
  let cardStyle ={
    backgroundColor: "white",
    borderRadius: "12px",
    border:"5px solid black",
    padding: "30px",
    textAlign: "center",
    width: "300px",
   
  };
  let imgStyle ={
    width: "200px",
    height: "200px",
    borderRadius:"50%",
    objectFit: "cover",
    marginBottom: "5px",
  }
  return(
    <div style={containerStyle}>
      <div style={cardStyle}>

        <img src='https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg' alt='Profile' style={imgStyle} />
        <h2>{person}</h2>
        <p>{disc}</p>
      </div>

    </div>
  );
};
export default Profilecard;