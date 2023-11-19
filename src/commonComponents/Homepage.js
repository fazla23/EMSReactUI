import React from "react";
import employeepic from "../images/emplo.jpg"
import leavepic from "../images/leave.jpg"
import recruitmentpic from "../images/recruitment.jpg"
import crmpic from "../images/crm.jpg"
import { Link } from "react-router-dom";

const Homepage = () => {


    return (
        <div>
            <div className="d-flex flex-row justify-content mt-5 mx-3">
            <div className="card m-3 text-center shadow p-3 mb-5 bg-white rounded" style={{width:"20rem"}}>
                <img className="card-img-top" src={employeepic} alt="Card image cap" />
                <div className="card-body">
                    <hr/>
                    <p className="card-text"><h6>Employee Management System</h6></p>
                    <Link to="/getAllEmployee" className="btn btn-info">Take a visit</Link>
                </div>
            </div>
            <div className="card m-3 text-center shadow p-3 mb-5 bg-white rounded" style={{width:"20rem"}} >
                <img className="card-img-top" src={leavepic} alt="Card image cap" />
                <div className="card-body">
                    <hr/>
                    <p className="card-text"><h6>Leave Management System</h6></p>
                    <Link to="/getAllLeaves" className="btn btn-info">Take a visit</Link>
                </div>
            </div>
            <div className="card m-3 text-center shadow p-3 mb-5 bg-white rounded" style={{width:"20rem"}} >
                <img className="card-img-top" src={recruitmentpic} alt="Card image cap" />
                <div className="card-body">
                    <hr/>
                    <p className="card-text"><h6>Recruitment Management System</h6></p>
                    <Link to="/getAllApplication" className="btn btn-info">Take a visit</Link>
                </div>
            </div>
            <div className="card m-3 text-center shadow p-3 mb-5 bg-white rounded" style={{width:"20rem"}} >
                <img className="card-img-top" src={crmpic} alt="Card image cap" />
                <div className="card-body">
                    <hr/>
                    <p className="card-text"><h6>Customer Management System</h6></p>
                    <Link to="/getAllCRM" className="btn btn-info">Take a visit</Link>
                </div>
            </div>
            </div>
        </div>
        
    );

}

export default Homepage;