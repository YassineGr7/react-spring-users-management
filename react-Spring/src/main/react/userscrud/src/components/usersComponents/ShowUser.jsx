import React, { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

export default function EditUser() {

  useEffect(() => {
    getUserById();
  },[])

  let {id} = useParams('id');
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: 0,
  });

  const { name, email, age } = user;

  const getUserById = async () => {
    try {
      const result = await axios.get(`http://localhost:8090/user/${id}`);
      setUser(result.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border shadow rounded p-4 mt-2">
          <h2 className="text-center m-4">User Details:</h2>
          <label className="form-label">Name : {name} </label> <br />
          <label className="form-label">Email : {email} </label> <br />
          <label className="form-label">Age : {age} years old</label>

        </div>
      </div>
    </div>
  );
}
