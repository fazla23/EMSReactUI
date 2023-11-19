import { Unauthorized } from "http-errors";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import applicationService from "../service/applicationService";

const ApplicationDetails = () => {
    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");
    const navigate = useNavigate();
    const { applicationId } = useParams();

    const [application, setApplication] = useState({});

    const init = (applicationId) => {
        console.log("kdfkvjdnkvj");
        applicationService
            .get(applicationId)
            .then((response) => {
                console.log("Printing employees data", response.data);
                setApplication(response.data);
            })
            .catch((error) => {
                console.log("Something went wrong", error);
            });
    };

    useEffect(() => {
        init(applicationId);
    }, []);

    return (
        <div className="container">
            {(username=="")&& 
      <div className="text-center">
            <h2>Unauthorized Access</h2>
            <h3>Please Login</h3>
        </div>
        }
            {username && <div>
            <div className="form-row shadow p-3 mb-5 bg-white rounded">
                <div className="col-md-6">
                    <div className="row mb-2">
                        <h2 className="col-sm-12">Application Name : {application.applicationName}</h2>
                    </div>
                    <div className="row mb-2">
                        <h3 className="col-sm-12 ">Applicant's Name : {application.applicantName}</h3>
                    </div>
                </div>
            </div>

            {/* Public Information Starts  */}

            <div className="row mt-5 shadow p-3 mb-5 bg-white rounded">
                <div className="col-md-6">
                    <div className="row mb-2">
                        <label for="email" className="col-sm-3 ">Email</label>
                        <div className="col-sm-9">
                            {application.email}
                        </div>
                    </div>
                    <div className="row mb-2">
                        <label for="phone" className="col-sm-3 ">Phone</label>
                        <div className="col-sm-9">
                            {application.phone}
                        </div>
                    </div>
                    <div className="row mb-2">
                        <label for="mobile" className="col-sm-3 ">Mobile</label>
                        <div className="col-sm-9">
                            {application.mobile}
                        </div>
                    </div>
                    <div className="row mb-2">
                        <label for="degree" className="col-sm-3 ">Degree</label>
                        <div className="col-sm-9">
                            {application.degree}
                        </div>
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="row mb-2">
                        <label for="responsible" className="col-sm-3 "> Responsible</label>
                        <div className="col-sm-9">
                            {application.responsible}
                        </div>
                    </div>
                    <div className="row mb-2">
                        <label for="nextAction" className="col-sm-3 ">Next Action</label>
                        <div className="col-sm-9">
                            {application.nextAction}
                        </div>
                    </div>
                    <div className="row">
                        <label for="nextActionDescription" className="col-sm-3 "></label>
                        <div className="col-sm-9">
                            {application.nextActionDescription}
                        </div>
                    </div>
                    <div className="row mb-2">
                        <label for="appreciation" className="col-sm-3 ">Appreciation</label>
                        <div className="col-sm-9">
                            {application.appreciation}
                        </div>
                    </div>
                    <div className="row mb-2">
                        <label for="source" className="col-sm-3 ">Source</label>
                        <div className="col-sm-9">
                            {application.source}
                        </div>
                    </div>

                    <div className="row mb-2">
                        <label for="referredBy" className="col-sm-3 ">Referred By</label>
                        <div className="col-sm-9">
                            {application.referredBy}
                        </div>
                    </div>

                </div>
            </div>


            {/* -----------Job starts------ */}
            <div className="row shadow p-3 mb-5 bg-white rounded">
                <div className="col-md-6">
                    <h4 className="my-4">Job</h4>

                    <div className="row mb-2">
                        <label for="appliedJob" className="col-sm-3 ">Applied Job</label>
                        <div className="col-sm-9">
                            {application.appliedJob}
                        </div>
                    </div>
                    <div className="row mb-2">
                        <label for="department" className="col-sm-3 ">Department</label>
                        <div className="col-sm-9">
                            {application.department}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4 className="my-4">Contract</h4>
                    <div className="row mb-2">
                        <label for="expectedSalary" className="col-sm-3 ">Expected Salary</label>
                        <div className="col-sm-9">
                            {application.expectedSalary}
                        </div>
                    </div>


                    <div className="row mb-2">
                        <label for="proposedSalary" className="col-sm-3 ">Proposed Salary</label>
                        <div className="col-sm-9">
                            {application.proposedSalary}
                        </div>
                    </div>

                    <div className="row mb-2">
                        <label for="availability" className="col-sm-3 ">Availability</label>
                        <div className="col-sm-9">
                            {application.availability}
                        </div>
                    </div>

                </div>
            </div>
            {/* -----------Citizenship and source info ends------ */}
            <div className="row mb-2 shadow p-3 mb-5 bg-white rounded">
                <h4 className="my-4">Application Summary</h4>
                <div className="col-sm-12">
                    {application.applicationSummary}
                </div>
            </div>


            <div className="my-5">

                <Link to="/getAllApplication" className="btn btn-danger ml-2">
                    Back
                </Link>
            </div>
            </div>}

        </div>
    );
};

export default ApplicationDetails;
