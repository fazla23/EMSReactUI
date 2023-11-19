import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import leaveService from "../service/leaveService";

const AddLeave = () => {
  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();
  const { leaveId } = useParams();

  const [description, setDescription] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [durationStart, setDurationStart] = useState("");
  const [durationEnd, setDurationEnd] = useState("");
  const [numberOfDays, setNumberOfDays] = useState("");
  const [mode, setMode] = useState("");
  const [employee, setEmployee] = useState("");
  const [department, setDepartment] = useState("");
  const [reportedInLastPayslip, setReportedInLastPayslip] = useState("");
  const [commentByManager, setCommentByManager] = useState("");
  const [status, setStatus] = useState("To Approve");


  const saveLeaveApprove = (e) => {
    const leave = {
      description,
      leaveType,
      durationStart,
      durationEnd,
      numberOfDays,
      mode,
      employee,
      department,
      reportedInLastPayslip,
      commentByManager,
      status: "Approved",
      leaveId
    };
    leaveService
      .update(leave)
      .then((response) => {
        navigate("/getAllLeaves");
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  }
  const saveLeaveRefuse = (e) => {
    const leave = {
      description,
      leaveType,
      durationStart,
      durationEnd,
      numberOfDays,
      mode,
      employee,
      department,
      reportedInLastPayslip,
      commentByManager,
      status: "Refused",
      leaveId
    };
    leaveService
      .update(leave)
      .then((response) => {
        navigate("/getAllLeaves");
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  }

  const saveLeave = (e) => {
    e.preventDefault();
    const leave = {
      description,
      leaveType,
      durationStart,
      durationEnd,
      numberOfDays,
      mode,
      employee,
      department,
      reportedInLastPayslip,
      commentByManager,
      status,
      leaveId
    };

    if (leaveId) {
      //update
      leaveService
        .update(leave)
        .then((response) => {
          navigate("/getAllLeaves");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      console.log("create")
      //create
      leaveService
        .create(leave)
        .then((response) => {
          console.log("leave added successfully", response.data);
          navigate("/getAllLeaves");
        })
        .catch((error) => {
          console.log("something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (leaveId) {
      leaveService
        .get(leaveId)
        .then((leave) => {
          setDescription(leave.data.description);
          setLeaveType(leave.data.leaveType);
          setDurationStart(leave.data.durationStart);
          setDurationEnd(leave.data.durationEnd);
          setNumberOfDays(leave.data.numberOfDays);
          setMode(leave.data.mode);
          setEmployee(leave.data.employee);
          setDepartment(leave.data.department);
          setReportedInLastPayslip(leave.data.reportedInLastPayslip);
          setCommentByManager(leave.data.commentByManager);
          setStatus(leave.data.status);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, [leaveId]);
  return (
    <div className="container">
      {(username == "") &&
        <div className="text-center">
          <h2>Unauthorized Access</h2>
          <h3>Please Login</h3>
        </div>
      }
      {
        role == "ADMIN" &&
        <div className="my-5">
          <h3>{employee} On {leaveType} : {numberOfDays} day(s)</h3>
          <button onClick={(e) => saveLeaveApprove(e)
          } className="btn btn-success" style={{ marginRight: "5px" }}>
            Approve
          </button>
          <button onClick={(e) => saveLeaveRefuse(e)} className="btn btn-warning" style={{ marginRight: "5px" }}>
            Refuse
          </button>
        </div>
      }

      {username &&
        <form className="mt-5">
          {leaveId && <h2 className="text-center mt-3 mb-5">Update Leave</h2>}
          {leaveId == undefined && <h2 className="text-center mt-3 mb-5">Apply for leave</h2>}
          <div className="row shadow p-3 mb-5 bg-white rounded">
            <div className="form-group col-md-6 ">
              <div className="form-group row mb-2">
                <label for="description"
                  className="col-sm-3 col-form-label col-form-label-md">Description</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control form-control-lg bg-info"
                    id="description"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row mb-2">
                <label for="leaveType" className="col-sm-3 col-form-label col-form-label-md">Leave Type</label>
                <div className="col-sm-9">
                  <select id="leaveType"
                    className="form-control form-control-md form-select"
                    value={leaveType}
                    onChange={(e) => setLeaveType(e.target.value)}
                  >
                    <option >----  Select One  ----</option>
                    <option value="Legal Leaves">Legal Leaves</option>
                    <option value="Compensatory Leaves">Compensatory Leaves</option>
                    <option value="Sick Leaves">Sick Leaves</option>
                    <option value="Unpaid">Unpaid</option>
                  </select>
                </div>
              </div>
              <div className="form-group row mb-2">
                <label for="durationStart" className="col-sm-3 col-form-label col-form-label-md">Duration Start</label>
                <div className="col-sm-9">
                  <input
                    type="date"
                    className="form-control form-control-md"
                    id="durationStart"
                    value={durationStart}
                    onChange={(e) => setDurationStart(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row mb-2">
                <label for="durationEnd" className="col-sm-3 col-form-label col-form-label-md">Duration End</label>
                <div className="col-sm-9">
                  <input
                    type="date"
                    className="form-control form-control-md"
                    id="durationEnd"
                    value={durationEnd}
                    onChange={(e) => setDurationEnd(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row mb-2">
                <label for="numberOfDays" className="col-sm-3 col-form-label col-form-label-md"></label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    className="form-control form-control-md"
                    id="numberOfDays"
                    placeholder="Number Of Days"
                    value={numberOfDays}
                    onChange={(e) => setNumberOfDays(e.target.value)}
                  />
                </div>
                <label for="" className="col-sm-2 col-form-label col-form-label-md">Day(s)</label>
              </div>
            </div>
            <div className="form-group col-md-6">
              <div className="form-group row mb-2">
                <label for="mode" className="col-sm-3 col-form-label col-form-label-md">Mode</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control form-control-md"
                    id="mode"
                    placeholder="By ...."
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row mb-2">
                <label for="employee" className="col-sm-3 col-form-label col-form-label-md"> Employee</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control form-control-md"
                    id="employee"
                    placeholder=""
                    value={employee}
                    onChange={(e) => setEmployee(e.target.value)}
                  />
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
                    <option value="Administration" selected>Administration</option>
                    <option value="Management">Management</option>
                    <option value="Professional Service">Professional Service</option>
                    <option value="Research and Development">Research and Development</option>
                    <option value="Sales">Sales</option>
                  </select>
                </div>
              </div>
              <div className="form-group row mb-2">
                <label for="reportedInLastPayslip" className="col-sm-3 col-form-label col-form-label-md">Reported In Last Payslip</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control form-control-md"
                    id="reportedInLastPayslip"
                    placeholder=""
                    value={reportedInLastPayslip}
                    onChange={(e) => setReportedInLastPayslip(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row mb-2">
                <label for="commentByManager" className="col-sm-3 col-form-label col-form-label-md">Comment By Manager</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control form-control-md"
                    id="commentByManager"
                    placeholder="Comment By Manager"
                    value={commentByManager}
                    onChange={(e) => setCommentByManager(e.target.value)}
                  />
                </div>
              </div>

            </div>
          </div>




          <div className="my-5">
            <button onClick={(e) => saveLeave(e)} className="btn btn-primary btn-lg" style={{ marginRight: "5px" }}>
              Save
            </button>
            <Link to="/getAllLeaves" className="btn btn-danger ml-2 btn-lg">
              Cancel
            </Link>
          </div>

        </form>}

    </div>
  );
};

export default AddLeave;
