import React, { useState } from "react";
import "./promotion.css";

function User() {
  const [user, setUser] = useState({
    firstName: "Fida",
    lastName: "Muntaseer",
    designation: "Tech Lead",
  });

  return (
    <div>
      <h1>Your Name: {user.firstName}</h1>
      <h2>Designation: {user.designation}</h2>
      <button
        className="promotion-btn"
        onClick={() =>
          setUser({
            ...user,
            designation: "Architect",
          })
        }
      >
        Promotion
      </button>
    </div>
  );
}

export default User;
