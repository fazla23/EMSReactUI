import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import leaveService from "../service/leaveService";

const LeaveList = () => {
  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");
  const [leaves, setLeaves] = useState([]);

  const init = () => {
    leaveService
      .getAll()
      .then((response) => {
        console.log("Printing leaves data", response.data);
        setLeaves(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, []);


  return (
    <div className="container text-center">
      {(username == "") &&
                <div className="text-center">
                    <h2>Unauthorized Access</h2>
                    <h3>Please Login</h3>
                </div>
            }
      {username && 
      <div>
      <h2 className="mt-3">Leave Summary</h2>
      <Link to="/addLeave" className="btn btn-primary mb-2">
            Create
          </Link>
      <div className="container mx-auto" style={{width:"1400px"}}>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
            <th>Employee</th>  
              <th>Request Type</th>
              <th>Description</th>
              <th>Number of days</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Leave type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave) => (
              <tr key={leave.leaveId}>
                <td>{leave.employee}</td>  
                <td>Leave Request</td>
                <td>{leave.description}</td>
                <td>{leave.numberOfDays}</td>
                <td>{leave.durationStart}</td>
                <td>{leave.durationEnd}</td>
                <td>{leave.leaveType}</td>
                <td>{leave.status}</td>
                <td>
                  
                  <Link
                    className="btn btn-warning btn-sm" 
                    to={`/leave/edit/${leave.leaveId}`}
                  >
                    Update
                  </Link>

                  <Link
                    className="btn btn-info btn-sm"
                    to={`/leave/${leave.leaveId}`}>
                      Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>}
    </div>
  );
};

export default LeaveList;