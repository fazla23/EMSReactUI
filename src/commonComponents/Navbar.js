import React from "react";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router";



const Navbar = () => {

  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  const logout=()=>{
        localStorage.setItem('token', "")
        localStorage.setItem('username', "")
        localStorage.setItem('role', "");
        navigate("/login");
        window.location.reload(false);
  };

  console.log(username);

  return (
    <div className="mb-3">
      <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "#0dca" }}>
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-5" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item-lg active border border-info rounded-3">
              <Link className="nav-link" to="/"><b>Home</b></Link>
            </li>
            <li className="nav-item-lg active border border-info rounded-3" style={{ marginLeft: "15px" }}>
              <Link className="nav-link" to="/getAllEmployee"><b>Employee Management</b></Link>
            </li>
            <li className="nav-item-lg active border border-info rounded-3" style={{ marginLeft: "15px" }}>
              <Link className="nav-link" to="/getAllApplication"><b>Recruitment Mangagement</b></Link>
            </li>
            <li className="nav-item-lg active border border-info rounded-3" style={{ marginLeft: "15px" }}>
              <Link className="nav-link" to="/getAllLeaves"><b>Leave Management</b></Link>
            </li>
            <li className="nav-item-lg active border border-info rounded-3" style={{ marginLeft: "15px" }}>
              <Link className="nav-link" to="/getAllCRM"><b>CRM</b></Link>
            </li>
            <li className="" style={{ marginLeft: "475px" }}>
              {
              (username=="") && 
              <Link className="btn btn-warning" to="/login"><b>Login</b></Link>
              }
              {
              username && 
              <button className="btn btn-warning" onClick={logout}><b>Logout</b></button>
              }
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar