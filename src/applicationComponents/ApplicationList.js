import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import applicationService from "../service/applicationService";
import { Unauthorized } from "http-errors";

const ApplicationList = () => {

  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");
  const [applications, setApplications] = useState([]);

  const init = () => {
    applicationService
      .getAll()
      .then((response) => {
        console.log("Printing applications data", response.data);
        setApplications(response.data);
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
      {(username=="")&& 
      <div className="text-center">
            <h2>Unauthorized Access</h2>
            <h3>Please Login</h3>
        </div>
        }
      {username && <div>
      <h2 className="mt-3">Applications</h2>
      <Link to="/addApplication" className="btn btn-primary m-2">
            Create
          </Link>
          <Link to="/getAllJob" className="btn btn-danger m-2">
            JobList
          </Link>
      <div className="container mx-auto" style={{width:"1400px"}}>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
            <th>Creation Date</th>  
              <th>Application Name</th>
              <th>Applicant's Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Applied Job</th>
              <th>Stage</th>
              <th>Medium</th>
              <th>Source</th>
              <th>Appreciation</th>
              <th>Responsible</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application) => (
              <tr key={application.applicationId}>
                <td>{application.createdDate}<br/>{application.createdTime}</td>  
                <td>{application.applicationName}</td>
                <td>{application.applicantName}</td>
                <td>{application.email}</td>
                <td>{application.phone}</td>
                <td>{application.appliedJob}</td>
                <td>{application.stage}</td>
                <td>{application.Medium}</td>
                <td>{application.source}</td>
                <td>{application.appreciation}</td>
                <td>{application.responsible}</td>
                
                <td>
                  
                  <Link
                    className="btn btn-warning btn-sm" 
                    to={`/application/edit/${application.applicationId}`}
                  >
                    Update
                  </Link>

                  <Link
                    className="btn btn-info btn-sm mt-1"
                    to={`/application/${application.applicationId}`}>
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

export default ApplicationList;