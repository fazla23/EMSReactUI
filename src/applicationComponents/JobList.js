import { useEffect, useState } from "react";
import applicationService from "../service/applicationService";

const JobList = () => {

  const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");
  const [jobs, setJobs] = useState([]);

  const init = () => {
    applicationService
      .getAllJobs()
      .then((response) => {
        console.log("Printing jobs data", response.data);
        setJobs(response.data);
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
      <h2 className="mt-3">Jobs</h2>
      <div className="container mx-auto" style={{width:"1100px"}}>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
            <th>Job Title</th>  
              <th>Department</th>
              <th>Current Number of Employees</th>
              <th>Expected Number of Employees</th>
              <th>Total Forecasted Employees</th>
              <th>Hired Employees</th>
              <th>Status</th>

            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr >
                <td>{job.jobTitle}</td>  
                <td>{job.department}</td>
                <td>{job.currentNumberOfEmployees}</td>
                <td>{job.expectedNewEmployees}</td>
                <td>{job.expectedNewEmployees + job.currentNumberOfEmployees}</td>
                <td>0</td>
                <td>{job.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>

      }
    </div>
  );
};

export default JobList;