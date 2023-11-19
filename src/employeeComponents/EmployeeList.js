import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import employeeService from "../service/employeeService";

const EmployeeList = () => {
  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const [employees, setEmployees] = useState([]);

  const init = () => {
    console.log(token);
    employeeService
      .getAll()
      .then((response) => {
        console.log("Printing employees data", response.data);
        setEmployees(response.data);
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
          <h2 className="mt-3">Employees</h2>
          <Link to="/addEmployee" className="btn btn-primary mb-2">
            Create
          </Link>
          <div className="container mx-auto" style={{ width: "1280px" }}>
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>Name</th>
                  <th>Work Phone</th>
                  <th>Work Email</th>
                  <th>Department</th>
                  <th>Job Title</th>
                  <th>Manager</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.employeeId}>
                    <td>{employee.employeeName}</td>
                    <td>{employee.workPhone}</td>
                    <td>{employee.workEmail}</td>
                    <td>{employee.department}</td>
                    <td>{employee.jobTitle}</td>
                    <td>{employee.manager}</td>
                    <td>

                      <Link
                        className="btn btn-warning btn-sm" style={{ marginRight: "5px" }}
                        to={`/employee/edit/${employee.employeeId}`}
                      >
                        Update
                      </Link>

                      <Link
                        className="btn btn-info btn-sm" style={{ marginRight: "5px" }}
                        to={`/employee/${employee.employeeId}`}
                      >
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

export default EmployeeList;