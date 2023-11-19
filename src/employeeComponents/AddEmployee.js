import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import employeeService from "../service/employeeService";


const AddEmployee = () => {

    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");
    const navigate = useNavigate();
    const { employeeId } = useParams();

    const [employeeName, setEmployeeName] = useState("");
    const [workingAddress, setWorkingAddress] = useState("");
    const [workMobile, setWorkMobile] = useState("");
    const [workLocation, setWorkLocation] = useState("");
    const [workEmail, setWorkEmail] = useState("");
    const [workPhone, setWorkPhone] = useState("");
    const [department, setDepartment] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [manager, setManager] = useState("");
    const [coach, setCoach] = useState("");
    const [other, setOther] = useState("");
    const [nationality, setNationality] = useState("");
    const [identificationNo, setIdentificationNo] = useState("");
    const [passportNo, setPassportNo] = useState("");
    const [bankAccountNumber, setBankAccountNumber] = useState("");
    const [gender, setGender] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [homeAddress, setHomeAddress] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");

    const saveEmployee = (e) => {
        e.preventDefault();

        const employee = {
            employeeName,
            workingAddress,
            workMobile,
            workLocation,
            workEmail,
            workPhone,
            department,
            jobTitle,
            manager,
            coach,
            other,
            nationality,
            identificationNo,
            passportNo,
            bankAccountNumber,
            gender,
            maritalStatus,
            homeAddress,
            dateOfBirth,
            employeeId
        };
        if (employeeId) {
            //update
            employeeService
                .update(employee)
                .then((response) => {
                    console.log("employee data updated successfully", response.data);
                    navigate("/getAllemployee");
                })
                .catch((error) => {
                    console.log("Something went wrong", error);
                });
        } else {
            console.log("create")
            //create
            employeeService
                .create(employee)
                .then((response) => {
                    console.log("employee added successfully", response.data);
                    navigate("/getAllEmployee");
                })
                .catch((error) => {
                    console.log("something went wrong", error);
                });
        }
    };

    useEffect(() => {
        if (employeeId) {
            employeeService
                .get(employeeId)
                .then((employee) => {
                    setEmployeeName(employee.data.employeeName);
                    setWorkingAddress(employee.data.workingAddress);
                    setWorkMobile(employee.data.workMobile);
                    setWorkLocation(employee.data.workLocation);
                    setWorkEmail(employee.data.workEmail);
                    setWorkPhone(employee.data.workPhone);
                    setDepartment(employee.data.department);
                    setJobTitle(employee.data.jobTitle);
                    setManager(employee.data.manager);
                    setCoach(employee.data.coach);
                    setOther(employee.data.other);
                    setNationality(employee.data.nationality);
                    setIdentificationNo(employee.data.identificationNo);
                    setPassportNo(employee.data.passportNo);
                    setBankAccountNumber(employee.data.bankAccountNumber);
                    setGender(employee.data.gender);
                    setMaritalStatus(employee.data.maritalStatus);
                    setHomeAddress(employee.data.homeAddress);
                    setDateOfBirth(employee.data.dateOfBirth);
                })
                .catch((error) => {
                    console.log("Something went wrong", error);
                });
        }
    }, [employeeId]);
    return (
        <div className="container">
            {(username == "") &&
                <div className="text-center">
                    <h2>Unauthorized Access</h2>
                    <h3>Please Login</h3>
                </div>
            }

            {username &&
                <form className="mt-5">
                    {employeeId && <h2 className="text-center mt-3 mb-5">Update Employee Information</h2>}
                    {employeeId==undefined && <h2 className="text-center mt-3 mb-5">Add Employee Information</h2>}
                    <div className="form-row shadow p-3 mb-5 bg-white rounded">
                        <div className="form-group col-md-6">
                            <div className="form-group row">
                                <label for="employeeName"
                                    className="col-sm-3 col-form-label"
                                    style={{ fontSize: "18px", fontWeight: "bold" }}
                                >Employee Name</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg bg-info"
                                        id="employeeName"
                                        placeholder="Employee Name"
                                        value={employeeName}
                                        onChange={(e) => setEmployeeName(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Public Information Starts  */}


                    <div className="form-group row shadow p-3 mb-5 bg-white rounded">
                        <h2 className="">Public Information</h2>
                    </div>
                    <div className="form-group row shadow p-3 mb-5 bg-white rounded">
                        <div className="form-group col-md-6">
                            <h4 className="my-4">Contact Information</h4>
                            <div className="form-group row mb-2">
                                <label for="workingAddress" className="col-sm-3 col-form-label col-form-label-md">Working Address</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="workingAddress"
                                        placeholder="Working Address"
                                        value={workingAddress}
                                        onChange={(e) => setWorkingAddress(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="workMobile" className="col-sm-3 col-form-label col-form-label-md">Working Mobile</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="workMobile"
                                        placeholder="Working Mobile"
                                        value={workMobile}
                                        onChange={(e) => setWorkMobile(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="workLocation" className="col-sm-3 col-form-label col-form-label-md">Work Location</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="workLocation"
                                        placeholder="Work Location"
                                        value={workLocation}
                                        onChange={(e) => setWorkLocation(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="workEmail" className="col-sm-3 col-form-label col-form-label-md">Work Email</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="workEmail"
                                        placeholder="Work Email"
                                        value={workEmail}
                                        onChange={(e) => setWorkEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="workPhone" className="col-sm-3 col-form-label col-form-label-md">Work Phone</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="workPhone"
                                        placeholder="Work Phone"
                                        value={workPhone}
                                        onChange={(e) => setWorkPhone(e.target.value)}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="form-group col-md-6">
                            <h4 className="my-4">Position</h4>
                            <div className="form-group row mb-2">
                                <label for="department" className="col-sm-3 col-form-label col-form-label-md"> Department</label>
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
                            <div className="form-group row mb-2">
                                <label for="jobTitle" className="col-sm-3 col-form-label col-form-label-md">Job Title</label>
                                <div className="col-sm-9">
                                    <select id="jobTitle"
                                        className="form-control form-control-md form-select"
                                        value={jobTitle}
                                        onChange={(e) => setJobTitle(e.target.value)}
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
                                <label for="manager" className="col-sm-3 col-form-label col-form-label-md">Manager</label>
                                <div className="col-sm-9">
                                    <select id="manager"
                                        className="form-control form-control-md form-select"
                                        value={manager}
                                        onChange={(e) => setManager(e.target.value)}
                                    >
                                        <option >----  Select One  ----</option>
                                        <option value="Antonio Langlais">Antonio Langlais</option>
                                        <option value="Ashley Presley">Ashley Presley</option>
                                        <option value="David Samson">David Samson</option>
                                        <option value="Gilies Graves">Gilies Graves</option>
                                        <option value="Hans Anders">Hans Anders</option>
                                        <option value="Jack Macklin">Jack Macklin</option>
                                        <option value="Frankie Jensenns">Frankie Jensenns</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="coach" className="col-sm-3 col-form-label col-form-label-md">Coach</label>
                                <div className="col-sm-9">
                                    <select id="coach"
                                        className="form-control form-control-md form-select"
                                        value={coach}
                                        onChange={(e) => setCoach(e.target.value)}
                                    >
                                        <option >----  Select One  ----</option>
                                        <option value="Antonio Langlais">Antonio Langlais</option>
                                        <option value="Ashley Presley">Ashley Presley</option>
                                        <option value="David Samson">David Samson</option>
                                        <option value="Gilies Graves">Gilies Graves</option>
                                        <option value="Hans Anders">Hans Anders</option>
                                        <option value="Jack Macklin">Jack Macklin</option>
                                        <option value="Frankie Jensenns">Frankie Jensenns</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Public Information Ends  */}


                    <div className="form-group row my-3">
                        <div className="col-sm-12">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                id="other"
                                placeholder="Other Information...."
                                value={other}
                                onChange={(e) => setOther(e.target.value)}
                            />
                        </div>
                    </div>

                    <h2 className="shadow p-3 mb-5 bg-white rounded">Personal Information</h2>
                    {/* -----------Citizenship and other info starts------ */}
                    <div className="form-group row shadow p-3 mb-5 bg-white rounded">
                        <div className="form-group col-md-6">
                            <h4 className="my-4">Citizenship and Other Information</h4>
                            <div className="form-group row mb-2">
                                <label for="nationality" className="col-sm-3 col-form-label col-form-label-md">Nationality(Country)</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="nationality"
                                        placeholder="nationality"
                                        value={nationality}
                                        onChange={(e) => setNationality(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="identificationNo" className="col-sm-3 col-form-label col-form-label-md">Identification No</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="identificationNo"
                                        placeholder="Identification No"
                                        value={identificationNo}
                                        onChange={(e) => setIdentificationNo(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="passportNo" className="col-sm-3 col-form-label col-form-label-md">Passport No</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="passportNo"
                                        placeholder="Passport No"
                                        value={passportNo}
                                        onChange={(e) => setPassportNo(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="bankAccountNumber" className="col-sm-3 col-form-label col-form-label-md">Bank Account Number</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="bankAccountNumber"
                                        placeholder="Bank Account Number"
                                        value={bankAccountNumber}
                                        onChange={(e) => setBankAccountNumber(e.target.value)}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="form-group col-md-6">
                            <h4 className="my-4">Contact information</h4>
                            <div className="form-group row mb-2">
                                <label for="homeAddress" className="col-sm-3 col-form-label col-form-label-md">Home Address</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="homeAddress"
                                        placeholder="Home Address"
                                        value={homeAddress}
                                        onChange={(e) => setHomeAddress(e.target.value)}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* -----------Citizenship and other info ends------ */}

                    {/* -----------Status and Birth info starts------ */}

                    <div className="form-group row shadow p-3 mb-5 bg-white rounded">
                        <div className="form-group col-md-6">
                            <h4 className="my-4">Status</h4>
                            <div className="form-group row mb-2">
                                <label for="gender" className="col-sm-3 col-form-label col-form-label-md">Gender</label>
                                <div className="col-sm-9">
                                    <select id="gender"
                                        className="form-control form-control-md form-select"
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    >
                                        <option >----  Select One  ----</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>

                                    </select>
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="maritalStatus" className="col-sm-3 col-form-label col-form-label-md">Marital Status</label>
                                <div className="col-sm-9">
                                    <select id="maritalStatus"
                                        className="form-control form-control-md form-select"
                                        value={gender}
                                        onChange={(e) => setMaritalStatus(e.target.value)}
                                    >
                                        <option >----  Select One  ----</option>
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>

                                    </select>
                                </div>
                            </div>

                        </div>
                        <div className="form-group col-md-6">
                            <h4 className="my-4">Birth</h4>
                            <div className="form-group row mb-2">
                                <label for="dateOfBirth" className="col-sm-3 col-form-label col-form-label-md">Date of Birth</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="dateOfBirth"
                                        placeholder="Date of Birth"
                                        value={dateOfBirth}
                                        onChange={(e) => setDateOfBirth(e.target.value)}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* -----------Status and Birth info ends------ */}

                    <div className="my-5">
                        <button onClick={(e) => saveEmployee(e)} className="btn btn-primary btn-lg" style={{ marginRight: "5px" }}>
                            Save
                        </button>
                        <Link to="/getAllEmployee" className="btn btn-danger btn-lg ml-2">
                            Cancel
                        </Link>
                    </div>

                </form>}

        </div>
    );
};

export default AddEmployee;
