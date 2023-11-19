import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import leaveService from "../service/leaveService";
import styled, { createGlobalStyle } from "styled-components";

const RegisterPage = () => {




    return (
        <div className="d-flex justify-content-center">
            <form className="">
                <h2>Login</h2>
                <div className="form-group mt-">
                    <label for="exampleInputEmail1">First Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group mt-">
                    <label for="exampleInputEmail1">Last Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group mt-">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>

    );
}


export default RegisterPage;





