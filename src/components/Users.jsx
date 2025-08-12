import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadUsers = useLoaderData();
  const [users,setUsers] = useState(loadUsers)
  const handleDelete = (_id) => {
    console.log("delete", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted successfully.");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining)
        }
      });
  };
  return (
    <div>
      <h1>Total Users {users.length}</h1>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} : {user.email}{" "}
            <Link to={`/update/${user._id}`}>
            <button>Update</button>
            </Link>
            <button onClick={() => handleDelete(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
