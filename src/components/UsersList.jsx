import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UsersList = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  let handleDelete = (id)=>{
    axios.delete(`http://localhost:3000/users/${id}`)
    .then(()=>{
        console.log("data deleted")
    })
    .catch(()=>{
        console.log("errror")
    })

    window.location.assign("/users")
  }

  return (
    <div>
      {data.map((x) => {
        return (
          <table key={x.id}>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{x.name}</td>
              </tr>
              <tr>
                <td>Salary</td>
                <td>{x.salary}</td>
              </tr>
              <tr>
                <td>Company</td>
                <td>{x.company}</td>
              </tr>
              <tr>
                <td> <button><Link to={`/edit/${x.id}`}>Edit</Link></button></td>
                <td><button onClick={()=>{
                    handleDelete(x.id)
                }}>Delete</button></td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default UsersList;
