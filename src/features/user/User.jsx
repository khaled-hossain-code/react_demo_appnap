import React from "react";
import "./user.css";

export default function User({ firstName, lastName, picture }) {
  return (
    <div className="card">
      <img className="card-picture" src={picture} alt="Avatar" />
      <div className="card-body">
        <h4>
          <b>
            {firstName} {lastName}
          </b>
        </h4>
      </div>
    </div>
  );
}

User.setDefaultProps = {
  firstName: "John",
  lastName: "Doe",
};
