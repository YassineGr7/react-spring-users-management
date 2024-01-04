import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const result = await axios.get("http://localhost:8090/users");
      setUsers(result.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8090/user/${id}`)
      getAllUsers();
    }catch(err) {
      console.error("Error deleting user:", err);
    }
  }

  return (
    <div className="container">
      <div className="py-5">
        <table className="table border">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col" className="text-center">Action</th>
            </tr> 
          </thead>
          <tbody>
            {users.map((user,index) => {
              return (
                <tr key={index}>
                  <th scope="row">{user.id}</th>
                  <td>
                    <Link to={'/showUser/'+user.id} >{user.name}</Link>
                    </td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td className="text-center">
                    <Link to={"/editUser/"+user.id } className="btn btn-primary mx-2">Edit</Link>
                    <button
                      // eslint-disable-next-line no-restricted-globals
                      onClick={()=> confirm('Are you sure you want to delete this user?') ? deleteUser(user.id) : false}
                    className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
