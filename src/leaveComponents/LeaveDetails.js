import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import leaveService from "../service/leaveService";

const LeaveDetails = () => {
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
  const [status, setStatus] = useState("");

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

      {
        username &&
        <form className="mt-5">
          <h2 className="text-center mt-3 mb-5">Leave Details</h2>
          <div className="row shadow p-3 mb-5 bg-white rounded">
            <div className=" col-md-6">
              <div className=" row mb-2">
                <label for="description"
                  className="col-sm-3 ">Description</label>
                <div className="col-sm-9">
                  {description}
                </div>
              </div>
              <div className=" row mb-2">
                <label for="leaveType" className="col-sm-3  ">Leave Type</label>
                <div className="col-sm-9">
                  {leaveType}
                </div>
              </div>
              <div className=" row mb-2">
                <label for="durationStart" className="col-sm-3  ">Duration Start</label>
                <div className="col-sm-9">
                  {durationStart}
                </div>
              </div>
              <div className=" row mb-2">
                <label for="durationEnd" className="col-sm-3  ">Duration End</label>
                <div className="col-sm-9">
                  {durationEnd}
                </div>
              </div>
              <div className=" row mb-2">
                <label for="numberOfDays" className="col-sm-3  "></label>
                <div className="col-sm-9">
                  {numberOfDays} day(s)
                </div>
              </div>
            </div>
            <div className=" col-md-6">
              <div className=" row mb-2">
                <label for="mode" className="col-sm-3  ">Mode</label>
                <div className="col-sm-9">
                  {mode}
                </div>
              </div>
              <div className=" row mb-2">
                <label for="employee" className="col-sm-3  "> Employee</label>
                <div className="col-sm-9">
                  {employee}
                </div>
              </div>
              <div className=" row mb-2">
                <label for="department" className="col-sm-3  ">Department</label>
                <div className="col-sm-9">
                  {department}
                </div>
              </div>
              <div className=" row mb-2">
                <label for="reportedInLastPayslip" className="col-sm-3  ">Reported In Last Payslip</label>
                <div className="col-sm-9">
                  {reportedInLastPayslip}
                </div>
              </div>
              <div className=" row mb-2">
                <label for="commentByManager" className="col-sm-3  ">Comment By Manager</label>
                <div className="col-sm-9">
                  {commentByManager}
                </div>
              </div>

            </div>
          </div>




          <div className="my-5">

            <Link to={`/leave/edit/${leaveId}`} className="btn btn-danger ml-2 btn-lg">
              Edit
            </Link>
          </div>

        </form>
      }

    </div>
  );
};

export default LeaveDetails;
