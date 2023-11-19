import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import applicationService from "../service/applicationService";
import { set, useForm } from 'react-hook-form';

const AddApplication = () => {
    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");

    const navigate = useNavigate();
    const { applicationId } = useParams();

    const [applicationName, setApplicationName] = useState("");
    const [applicantName, setApplicantName] = useState("");
    const [stage, setStage] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [mobile, setMobile] = useState("");
    const [degree, setDegree] = useState("");
    const [responsible, setResponsible] = useState("");
    const [nextAction, setNextAction] = useState("");
    const [nextActionDescription, setNextActionDescription] = useState("");
    const [appreciation, setAppreciation] = useState("");
    const [source, setSource] = useState("");
    const [referredBy, setReferredBy] = useState("");
    const [appliedJob, setAppliedJob] = useState("");
    const [department, setDepartment] = useState("");
    const [expectedSalary, setExpectedSalary] = useState("");
    const [expectedSalaryExtra, setExpectedSalaryExtra] = useState("");
    const [proposedSalary, setProposedSalary] = useState("");
    const [proposedSalaryExtra, setProposedSalaryExtra] = useState("");
    const [availability, setAvailability] = useState("");
    const [applicationSummary, setApplicationSummary] = useState("");
    
    console.log(applicationId)

    const saveApplication = (e) => {
        e.preventDefault();

        const application = {
            applicationName,
            applicantName,
            stage,
            email,
            phone,
            mobile,
            degree,
            responsible,
            nextAction,
            nextActionDescription,
            appreciation,
            source,
            referredBy,
            appliedJob,
            department,
            expectedSalary,
            expectedSalaryExtra,
            proposedSalary,
            proposedSalaryExtra,
            availability,
            applicationSummary,
            applicationId
        };
        if (applicationId) {
            //update
            applicationService
                .update(application)
                .then((response) => {
                    console.log("Application data updated successfully", response.data);
                    navigate("/getAllApplication");
                })
                .catch((error) => {
                    console.log("Something went wrong", error);
                });
        } else {
            console.log("create")
            //create
            applicationService
                .create(application)
                .then((response) => {
                    console.log("Application added successfully", response.data);
                    navigate("/getAllApplication");
                })
                .catch((error) => {
                    console.log("something went wrong", error);
                });
        }
    };

    useEffect(() => {
        if (applicationId) {
            applicationService
                .get(applicationId)
                .then((application) => {
                    setApplicationName(application.data.applicationName);
                    setApplicantName(application.data.applicantName);
                    setStage(application.data.stage);
                    setEmail(application.data.email);
                    setPhone(application.data.phone);
                    setMobile(application.data.mobile);
                    setDegree(application.data.degree);
                    setResponsible(application.data.responsible);
                    setNextAction(application.data.nextAction);
                    setNextActionDescription(application.data.nextActionDescription);
                    setAppreciation(application.data.appreciation);
                    setSource(application.data.source);
                    setReferredBy(application.data.referredBy);
                    setAppliedJob(application.data.appliedJob);
                    setDepartment(application.data.department);
                    setExpectedSalary(application.data.expectedSalary);
                    setExpectedSalaryExtra(application.data.expectedSalaryExtra);
                    setProposedSalary(application.data.proposedSalary);
                    setProposedSalaryExtra(application.data.proposedSalaryExtra);
                    setAvailability(application.data.availability);
                    setApplicationSummary(application.data.applicationSummary);
                })
                .catch((error) => {
                    console.log("Something went wrong", error);
                });
        }
    }, [applicationId]);
    return (
        <div className="container">
            {(username=="")&& 
      <div className="text-center">
            <h2>Unauthorized Access</h2>
            <h3>Please Login</h3>
        </div>
        }

            {username &&
                <form className="mt-5">
                    {applicationId && <h2 className="text-center mt-3 mb-5">Update Application Form</h2>}
                    {applicationId==undefined && <h2 className="text-center mt-3 mb-5">Application Form</h2>}
                    <div className="row shadow p-3 mb-5 bg-white rounded">
                        
                        <div className="form-group col-md-6">
                            <div className="form-group row mb-2">
                                <label for="applicationName"
                                    className="col-sm-3 col-form-label col-form-label-md">Application Name</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg bg-info"
                                        id="applicationName"
                                        placeholder="Application Name"
                                        value={applicationName}
                                        onChange={(e) => setApplicationName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="applicantName" className="col-sm-3 col-form-label col-form-label-md">Applicant's Name</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="applicantName"
                                        placeholder="Applicant Name"
                                        value={applicantName}
                                        onChange={(e) => setApplicantName(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <div className="form-group row mb-2 ">
                                <label for="stage" className="col-sm-3 col-form-label col-form-label-md">Stage</label>
                                <div className="col-sm-9">
                                    <select id="stage"
                                        className="form-control form-control-md form-select bg-info"
                                        value={stage}
                                        onChange={(e) => setStage(e.target.value)}
                                    >
                                        <option >----  Select One  ----</option>
                                        <option value="Initial Qualification">Initial Qualification</option>
                                        <option value="First Interview">First Interview</option>
                                        <option value="Second Interview">Second Interview</option>
                                        <option value="Contract Proposal">Contract Proposal</option>
                                        <option value="Contract Signed">Contract Signed</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Public Information Starts  */}

                    <div className="form-group row shadow p-3 mb-5 bg-white rounded">
                        <div className="form-group col-md-6">
                            <div className="form-group row mb-2">
                                <label for="email" className="col-sm-3 col-form-label col-form-label-md">Email</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="phone" className="col-sm-3 col-form-label col-form-label-md">Phone</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="phone"
                                        placeholder="Phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="mobile" className="col-sm-3 col-form-label col-form-label-md">Mobile</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="mobile"
                                        placeholder="Mobile"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="degree" className="col-sm-3 col-form-label col-form-label-md">Degree</label>
                                <div className="col-sm-9">
                                    <select id="degree"
                                        className="form-control form-control-md form-select"
                                        value={degree}
                                        onChange={(e) => setDegree(e.target.value)}
                                    >
                                        <option >----  Select One  ----</option>
                                        <option value="Graduate">Graduate</option>
                                        <option value="Bachelor Degree">Bachelor Degree</option>
                                        <option value="Master Degree">Master Degree</option>
                                        <option value="Doctoral Degree">Doctoral Degree</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div className="form-group col-md-6">
                            <div className="form-group row mb-2">
                                <label for="responsible" className="col-sm-3 col-form-label col-form-label-md"> Responsible</label>
                                <div className="col-sm-9">
                                    <select id="responsible"
                                        className="form-control form-control-md form-select"
                                        value={responsible}
                                        onChange={(e) => setResponsible(e.target.value)}
                                    >
                                        <option >----  Select One  ----</option>
                                        <option value="Administration">Administration</option>
                                        <option value="Demo Portal User">Demo Portal User</option>
                                        <option value="Demo User">Demo User</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="nextAction" className="col-sm-3 col-form-label col-form-label-md">Next Action</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="nextAction"
                                        placeholder="Working Address"
                                        value={nextAction}
                                        onChange={(e) => setNextAction(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="nextActionDescription" className="col-sm-3 col-form-label col-form-label-md"></label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="nextActionDescription"
                                        placeholder="e.g. Call For Interview"
                                        value={nextActionDescription}
                                        onChange={(e) => setNextActionDescription(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="appreciation" className="col-sm-3 col-form-label col-form-label-md">Appreciation</label>
                                <div className="col-sm-9">
                                    <select id="appreciation"
                                        className="form-control form-control-md form-select"
                                        value={appreciation}
                                        onChange={(e) => setAppreciation(e.target.value)}
                                    >
                                        <option value="1 Star">1 Star</option>
                                        <option value="2 Star">2 Star</option>
                                        <option value="3 Star">3 Star</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="source" className="col-sm-3 col-form-label col-form-label-md">Source</label>
                                <div className="col-sm-9">
                                    <select id="source"
                                        className="form-control form-control-md form-select"
                                        value={source}
                                        onChange={(e) => setSource(e.target.value)}
                                    >
                                        <option >----  Select One  ----</option>
                                        <option value="Search Engine">Search Engine</option>
                                        <option value="Mailing Partner">Mailing Partner</option>
                                        <option value="Newsletter">Newsletter</option>
                                        <option value="Facebook">Facebook</option>
                                        <option value="Twitter">Twitter</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group row mb-2">
                                <label for="referredBy" className="col-sm-3 col-form-label col-form-label-md">Referred By</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="referredBy"
                                        placeholder="referredBy"
                                        value={referredBy}
                                        onChange={(e) => setReferredBy(e.target.value)}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* -----------Job starts------ */}
                    <div className="form-group row shadow p-3 mb-5 bg-white rounded">
                        <div className="form-group col-md-6">
                            <h4 className="my-4">Job</h4>

                            <div className="form-group row mb-2">
                                <label for="appliedJob" className="col-sm-3 col-form-label col-form-label-md">Applied Job</label>
                                <div className="col-sm-9">
                                    <select id="appliedJob"
                                        className="form-control form-control-md form-select"
                                        value={appliedJob}
                                        onChange={(e) => setAppliedJob(e.target.value)}
                                    >
                                        <option >----  Select One  ----</option>
                                        <option value="Chief Executive Officer">Chief Executive Officer</option>
                                        <option value="Chief Executive Officer">Chief technical Officer</option>
                                        <option value="Consultant">Consultant</option>
                                        <option value="Experienced Developer">Experienced Developer</option>
                                        <option value="Human Resource Manager">Human Resource Manager</option>
                                        <option value="Marketing and Community Manager">Marketing and Community Manager</option>
                                        <option value="Trainee">Trainee</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="department" className="col-sm-3 col-form-label col-form-label-md">Department</label>
                                <div className="col-sm-9">
                                    <select id="department"
                                        className="form-control form-control-md form-select"
                                        value={department}
                                        onChange={(e) => setDepartment(e.target.value)}
                                    >
                                        <option >----  Select One  ----</option>
                                        <option value="Administration">Administration</option>
                                        <option value="Management">Management</option>
                                        <option value="Professional Service">Professional Service</option>
                                        <option value="Research and Development">Research and Development</option>
                                        <option value="Sales">Sales</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <h4 className="my-4">Contract</h4>
                            <div className="form-group row mb-2">
                                <label for="expectedSalary" className="col-sm-3 col-form-label col-form-label-md">Expected Salary</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="expectedSalary"
                                        placeholder="0.00"
                                        value={expectedSalary}
                                        onChange={(e) => setExpectedSalary(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="form-group row mb-2">
                                <label for="expectedSalaryExtra" className="col-sm-3 col-form-label col-form-label-md"></label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="expectedSalaryExtra"
                                        placeholder="Extra advantages"
                                        value={expectedSalaryExtra}
                                        onChange={(e) => setExpectedSalaryExtra(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="form-group row mb-2">
                                <label for="proposedSalary" className="col-sm-3 col-form-label col-form-label-md">Proposed Salary</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="proposedSalary"
                                        placeholder="0.00"
                                        value={proposedSalary}
                                        onChange={(e) => setProposedSalary(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="form-group row mb-2">
                                <label for="proposedSalaryExtra" className="col-sm-3 col-form-label col-form-label-md"></label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="proposedSalaryExtra"
                                        placeholder="Extra Advantages"
                                        value={proposedSalaryExtra}
                                        onChange={(e) => setProposedSalaryExtra(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="form-group row mb-2">
                                <label for="availability" className="col-sm-3 col-form-label col-form-label-md">Availability</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="availability"
                                        placeholder="Availability"
                                        value={availability}
                                        onChange={(e) => setAvailability(e.target.value)}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="form-group row mb-2 shadow p-3 mb-5 bg-white rounded">
                        <label for="applicationSummary" className="col-form-label-lg">Application Summary</label>
                        <div className="col-sm-12">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                id="applicationSummary"
                                placeholder="Feedback of interviews...."
                                value={applicationSummary}
                                onChange={(e) => setApplicationSummary(e.target.value)}
                            />
                        </div>
                    </div>


                    <div className="my-5">
                        <button onClick={(e) => saveApplication(e)} className="btn btn-primary" style={{ marginRight: "5px" }}>
                            Save
                        </button>
                        <Link to="/getAllApplication" className="btn btn-danger ml-2">
                            Cancel
                        </Link>
                    </div>

                </form>}

        </div>
    );
};

export default AddApplication;
