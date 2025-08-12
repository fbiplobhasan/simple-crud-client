import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedData = useLoaderData();
  const handleUpdateUser = (event) => {
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const updateUser = { name, email };

    fetch(`http://localhost:5000/users/${loadedData._id}`,{
        method: 'PUT',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(updateUser)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <h1>User information: {loadedData.name}</h1>
      <form onSubmit={handleUpdateUser}>
        <input type="text" name="name" defaultValue={loadedData?.name} id="" />
        <br />
        <input
          type="email"
          name="email"
          defaultValue={loadedData.email}
          id=""
        />
        <br />
        <input type="submit" value="Update User" />
      </form>
      <Link to='/'>Home</Link>
    </div>
  );
};

export default Update;
