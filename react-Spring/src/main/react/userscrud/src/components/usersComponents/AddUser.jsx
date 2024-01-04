import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function AddUser() {

  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: 0,
  });

  const { name, email, age } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault() ;
    await axios.post("http://localhost:8090/addUser",user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border shadow rounded p-4 mt-2">
          <h2 className="text-center m-4">Add New User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label className="form-label">Name : </label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter the name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email : </label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter the name"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Age : </label>
              <input
                type="number"
                name="age"
                className="form-control"
                placeholder="Enter the name"
                value={age}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
