import { useState } from "react";
import loginService from "../service/loginService";
import { Navigate } from "react-router";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import leaveService from "../service/leaveService";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";

const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function authenticate(e) {
        e.preventDefault();
        const data = {
          userName: username,
          userPassword: password
        }
    
        axios
      .post(`http://localhost:8080/authenticate`, data)
      .then((response) => {
        localStorage.setItem('token', response.data.jwtToken)
        localStorage.setItem('username', response.data.user.userName)
        localStorage.setItem('role', response.data.user.role[0].roleName)
        navigate("/");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err.data)
      })
      }

      useEffect(() => {
      }, []);
    
    return (
        <div className="d-flex justify-content-center ">
            <form className="shadow p-3 mb-5 bg-white rounded">
                <h2>Login</h2>
                <div className="form-group mt-5">
                    <label for="username">Username</label>
                    <input 
                    type="text" 
                    className="form-control form-control" 
                    id="username" 
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input 
                    type="text" 
                    className="form-control form-control" 
                    id="password" 
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <button onClick={authenticate} className="btn btn-primary btn-lg mt-3" >
                    Login
                </button>
            </form>
        </div>

    );
}


export default LoginPage;





