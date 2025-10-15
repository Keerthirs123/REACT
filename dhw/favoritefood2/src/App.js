import React  from "react";
function App(){
  let foods =["Momos","Biriyani","Icecream","Frenchfries"];
  let message = "Select a food that you love!"
  const handleclick = (food) =>{
    document.getElementById("message").innerText =`I love ${food}!`;
  };
  return(
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h2 style={{color: "red"}}>My Favorite Foods</h2>
      <ul style={{listStyle:"none",padding:0}}>
        {foods.map((food,index)=> (
          <li key={index} style={{margin: "10px"}}>
            {food}{" "}
            <button style={{color:"red"}} onClick={() => handleclick(food)}>Love it</button>
          </li>
        ))}
      </ul>
      <h3 id="message" style={{color:"red"}}>{message}</h3>
    </div>
  )
}
export default App;