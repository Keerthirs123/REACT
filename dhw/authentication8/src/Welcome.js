import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome!</h2>
      <p>You have successfully logged in </p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Welcome;
