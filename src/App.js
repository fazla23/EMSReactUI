import EmployeeList from './employeeComponents/EmployeeList';
import AddEmployee from './employeeComponents/AddEmployee';
import EmployeeDetails from './employeeComponents/EmployeeDetails';
import ApplicationList from './applicationComponents/ApplicationList';
import AddApplication from './applicationComponents/AddApplication';
import ApplicationDetails from './applicationComponents/ApplicationDetails';

import RegisterPage from './loginComponents/RegisterPage';
import JobList from './applicationComponents/JobList';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LeaveList from './leaveComponents/LeaveList';
import AddLeave from './leaveComponents/AddLeave';
import LeaveDetails from './leaveComponents/LeaveDetails';
import LoginPage from './loginComponents/LoginPage';
import Homepage from './commonComponents/Homepage';
import Navbar from './commonComponents/Navbar';
import CRMList from './crmComponents/CRMList';
import AddCRM from './crmComponents/AddCRM';
import AddContact from './crmComponents/AddContact';
import CRMDetails from './crmComponents/CRMDetails';


function App() {
  return (
      
    <BrowserRouter>
      <div>
        <Navbar/>
        <div>
          <Routes>
            {/* -----------Employee Routes ------------ */}
            <Route exact path="/getAllEmployee" element={<EmployeeList/>} />
            <Route path="/addEmployee" element={<AddEmployee/>} />
            <Route path="/employee/edit/:employeeId" element={<AddEmployee/>} /> 
            <Route path="/employee/:employeeId" element={<EmployeeDetails/>} /> 

            {/* -----------Application Routes ------------ */}
            <Route exact path="/getAllApplication" element={<ApplicationList/>} />
            <Route path="/addApplication" element={<AddApplication/>} />
            <Route path="/application/edit/:applicationId" element={<AddApplication/>} /> 
            <Route path="/application/:applicationId" element={<ApplicationDetails/>} /> 
            <Route exact path="/getAllJob" element={<JobList/>} />

            {/*-------------Leave Routes ------------------*/}
            <Route exact path="/getAllLeaves" element={<LeaveList/>} />
            <Route path="/addLeave" element={<AddLeave/>} />
            <Route path="/leave/edit/:leaveId" element={<AddLeave/>} /> 
            <Route path="/leave/:leaveId" element={<LeaveDetails/>} /> 

            {/*-------------Leave Routes ------------------*/}
            <Route exact path="/getAllCRM" element={<CRMList/>} />
            <Route path="/addCRM" element={<AddCRM/>} />
            <Route path="/CRM/edit/:id" element={<AddCRM/>} /> 
            <Route path="/CRM/:id" element={<CRMDetails/>} />
            <Route path="/addContact" element={<AddContact/>} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<Homepage />} />


            {/* <Route path="*" element={<NotFound/>} /> */}

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
