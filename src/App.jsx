import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Users added successfully");
          form.reset();
        }
      });
  };

  return (
    <>
      <h1>Simple CRUD operation.</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>
      <Link style={{backgroundColor:'blue',marginTop:'20px', borderRadius:'20px',padding:'5px'}} to='/users'>All Users</Link>
    </>
  );
}

export default App;
