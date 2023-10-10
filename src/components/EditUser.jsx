import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  let [name, setName] = useState("");
  let [salary, setSalary] = useState("");
  let [company, setCompany] = useState("");

  let nameData = (e) => {
    setName(e.target.value);
  };
  let salaryData = (e) => {
    setSalary(e.target.value);
  };
  let companyData = (e) => {
    setCompany(e.target.value);
  };

  let { id } = useParams();
  let navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((response) => {
        console.log(response.data);
        console.log("data got");
        setName(response.data.name);
        setCompany(response.data.company);
        setSalary(response.data.salary);
      })
      .catch(() => {
        console.log("Error");
      });
  }, [id]);


  let formHandle = (e)=>{
    e.preventDefault();

    let payload = {
        name, salary, company
    }
    axios.put(`http://localhost:3000/users/${id}`, payload)
    .then(()=>{
        console.log("data updated")
        navigate("/users")
    })
    .catch(()=>{
        console.log("error")
    })
  }

  return (
    <div>
      <form onSubmit={formHandle}>
        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={nameData} />
        <br />
        <label htmlFor="">Salary</label>
        <input type="text" value={salary} onChange={salaryData} />
        <br />
        <label htmlFor="">Company</label>
        <input type="text" value={company} onChange={companyData} />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default EditUser;
