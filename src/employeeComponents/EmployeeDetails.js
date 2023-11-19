import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import employeeService from "../service/employeeService";

const EmployeeDetails = () => {

    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const { employeeId } = useParams();

    const [employee, setEmployee] = useState({});

    const init = (employeeId) => {
        console.log(token);
        employeeService
            .get(employeeId)
            .then((response) => {
                console.log("Printing employees data", response.data);
                setEmployee(response.data);
            })
            .catch((error) => {
                console.log("Something went wrong", error);
            });
    };

    useEffect(() => {
        init(employeeId);
    }, []);

    return (
        <div className="container">
            {(username == "") &&
                <div className="text-center">
                    <h2>Unauthorized Access</h2>
                    <h3>Please Login</h3>
                </div>
            }

            {username &&
                <div>
                    <div className="row shadow p-3 mb-5 bg-white rounded">
                        <div className="col-md-6">
                            <div className=" row">
                                <label className="col-sm-3">Employee Name : </label>
                                <div className="col-sm-9">
                                    {employee.employeeName}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Public Information Starts  */}


                    <div className=" row shadow p-3 mb-5 bg-white rounded">
                        <h2 className="">Public Information</h2>
                    </div>
                    <div className=" row shadow p-3 mb-5 bg-white rounded">
                        <div className=" col-md-6">
                            <h4 className="my-4">Contact Information</h4>
                            <div className=" row mb-2">
                                <label className="col-sm-3">Working address : </label>
                                <div className="col-sm-9">
                                    {employee.workingAddress}
                                </div>
                            </div>
                            <div className=" row mb-2">
                                <label className="col-sm-3">Working Mobile : </label>
                                <div className="col-sm-9">
                                    {employee.workingMobile}
                                </div>
                            </div>
                            <div className=" row mb-2">
                                <label className="col-sm-3">Work Location : </label>
                                <div className="col-sm-9">
                                    {employee.workLocation}
                                </div>
                            </div>
                            <div className=" row mb-2">
                                <label className="col-sm-3">Working Email : </label>
                                <div className="col-sm-9">
                                    {employee.workEmail}
                                </div>
                            </div>
                            <div className=" row mb-2">
                                <label className="col-sm-3">Work Phone : </label>
                                <div className="col-sm-9">
                                    {employee.workPhone}
                                </div>
                            </div>

                        </div>
                        <div className=" col-md-6">
                            <h4 className="my-4">Position</h4>
                            <div className=" row mb-2">
                                <label className="col-sm-3">Department : </label>
                                <div className="col-sm-9">
                                    {employee.department}
                                </div>
                            </div>
                            <div className=" row mb-2">
                                <label className="col-sm-3">Job title : </label>
                                <div className="col-sm-9">
                                    {employee.jobTitle}
                                </div>
                            </div>
                            <div className=" row mb-2">
                                <label className="col-sm-3">Manager : </label>
                                <div className="col-sm-9">
                                    {employee.manager}
                                </div>
                            </div>
                            <div className=" row mb-2">
                                <label className="col-sm-3">Coach: </label>
                                <div className="col-sm-9">
                                    {employee.coach}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Public Information Ends  */}

                    <div className=" row my-3 shadow p-3 mb-5 bg-white rounded">
                        <label className="col-sm-3">Others Information: </label>
                        <div className="col-sm-9">
                            {employee.other}
                        </div>
                    </div>

                    {/* -----------Citizenship and other info starts------ */}
                    <div className=" row shadow p-3 mb-5 bg-white rounded">
                        <div className=" col-md-6">
                            <h4 className="my-4">Citizenship and Other Information</h4>
                            <div className=" row mb-2">
                                <label className="col-sm-3">Nationality: </label>
                                <div className="col-sm-9">
                                    {employee.nationality}
                                </div>
                            </div>
                            <div className=" row mb-2">
                                <label className="col-sm-3">Identification No : </label>
                                <div className="col-sm-9">
                                    {employee.identificationNo}
                                </div>
                            </div>
                            <div className=" row mb-2">
                                <label className="col-sm-3">Passport No : </label>
                                <div className="col-sm-9">
                                    {employee.passportNo}
                                </div>
                            </div>
                            <div className=" row mb-2">
                                <label className="col-sm-3">Bank account Number : </label>
                                <div className="col-sm-9">
                                    {employee.bankAccountNumber}
                                </div>
                            </div>

                        </div>
                        <div className=" col-md-6">
                            <h4 className="my-4">Contact information</h4>
                            <div className=" row mb-2">
                                <label className="col-sm-3">Home Address : </label>
                                <div className="col-sm-9">
                                    {employee.homeAddress}
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* -----------Citizenship and other info ends------ */}

                    {/* -----------Status and Birth info starts------ */}

                    <div className=" row shadow p-3 mb-5 bg-white rounded">
                        <div className=" col-md-6">
                            <h4 className="my-4">Citizenship and Other Information</h4>
                            <div className=" row mb-2">
                                <label className="col-sm-3">Gender : </label>
                                <div className="col-sm-9">
                                    {employee.gender}
                                </div>
                            </div>
                            <div className=" row mb-2">
                                <label className="col-sm-3">marital Status: </label>
                                <div className="col-sm-9">
                                    {employee.maritalStatus}
                                </div>
                            </div>

                        </div>
                        <div className=" col-md-6">
                            <h4 className="my-4">Contact information</h4>
                            <div className=" row mb-2">
                                <label className="col-sm-3">Date Of Birth: </label>
                                <div className="col-sm-9">
                                    {employee.dateOfBirth}
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* -----------Status and Birth info ends------ */}

                    <div className="mt-3">
                        <Link to="/getAllEmployee" className="btn btn-danger ml-2">
                            Back
                        </Link>
                    </div>
                </div>}


        </div>
    );
};

export default EmployeeDetails;
