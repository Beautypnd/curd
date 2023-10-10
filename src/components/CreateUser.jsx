import React from "react";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const CreateUser = () => {

  let [name, setName] = useState("");
  let [salary, setSalary] = useState("");
  let [company, setCompany] = useState("");
  let nameData = (e)=>{
    setName(e.target.value)
  }
  let companyData = (e)=>{
     setCompany(e.target.value)
  }
  let salaryData = (e)=>{
    setSalary(e.target.value)
  }


  let navigate = useNavigate();
  let formHandle = (e)=>{
    e.preventDefault();
    let payload = {
        name, salary, company
    }
    axios.post("http://localhost:3000/users", payload)
    .then(()=>{
        console.log("data saved")
        navigate("/users")
    })
    .catch(()=>{
        console.log("Error")
    })
  }

  return (
    <div>
      <form onSubmit={formHandle}>
        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={nameData} required />
        <br />
        <label htmlFor="">Salary</label>
        <input type="text" value={salary} onChange={salaryData} required />
        <br />
        <label htmlFor="">Company</label>
        <input type="text" value={company} onChange={companyData} required />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CreateUser;
