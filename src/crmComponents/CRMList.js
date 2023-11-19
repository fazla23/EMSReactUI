import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import crmService from "../service/crmService";

const CRMList = () => {
  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");
  const [CRMs, setCRMs] = useState([]);

  const init = () => {
    crmService
      .getAll()
      .then((response) => {
        console.log("Printing CRMs data", response.data);
        setCRMs(response.data);
        console.log(CRMs);
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
          <h2 className="mt-3">Customers</h2>
          <Link to="/addCRM" className="btn btn-primary m-2">
            Create
          </Link>
          <Link to="/addContact" className="btn btn-secondary m-2">
            Add Contact
          </Link>
          <div className="container mx-auto" style={{ width: "1280px" }}>
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {CRMs.map((CRM) => (
                  <tr key={CRM.id}>
                    <td>{CRM.name}</td>
                    <td>{CRM.phone}</td>
                    <td>{CRM.email}</td>
                    {/* <td>{CRM.country}</td>
                    <td>{CRM.state}</td>
                    <td>{CRM.city}</td>
                    <td>{CRM.street}</td>
                    <td>{CRM.website}</td>
                    <td>{CRM.tags}</td>
                    
                    <td>{CRM.mobile}</td>
                    <td>{CRM.fax}</td>
                    
                    <td>{CRM.language}</td> */}
                    <td>

                      <Link
                        className="btn btn-warning btn-sm" style={{ marginRight: "5px" }}
                        to={`/CRM/edit/${CRM.id}`}
                      >
                        Update
                      </Link>

                      <Link
                        className="btn btn-info btn-sm" style={{ marginRight: "5px" }}
                        to={`/CRM/${CRM.id}`}
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

export default CRMList;