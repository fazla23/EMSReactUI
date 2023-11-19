import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import contactService from "../service/contactService";
import crmService from "../service/crmService";
import CRMList from "./CRMList";


const AddContact = () => {

    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");
    const navigate = useNavigate();
    const { id } = useParams();
    const [CRMs, setCRMs] = useState([]);

    const [contactName, setContactName] = useState("");
    const [title, setTitle] = useState("");
    const [jobPosition, setJobPosition] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [mobile, setMobile] = useState("");
    const [notes, setNotes] = useState("");
    const [crm_name, setCrm_name] = useState("");


    const init = () => {
        crmService
          .getAll()
          .then((response) => {
            console.log("Printing CRMs data", response.data);
            setCRMs(response.data);
          })
          .catch((error) => {
            console.log("Something went wrong", error);
          });
          
      };

    const saveContact = (e) => {
        e.preventDefault();

        const contact = {
            contactName,
            title,
            jobPosition,
            email,
            phone,
            mobile,
            notes,
            crm_name
        };
            contactService
                .create(contact)
                .then((response) => {
                    console.log("contact added successfully", response.data);
                    navigate("/getAllCRM");
                })
                .catch((error) => {
                    console.log("something went wrong", error);
                });       
    };

    useEffect(() => {
            init()
    }, []);
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
                    <h2 className=" mt-3 mb-5">Add Contact</h2>
                    <div className="form-group row">
                        <div className="form-group col-md-6 shadow p-3 mb-5 bg-white rounded">
                            <div className="form-group row">
                                <label for="contactName"
                                    className="col-sm-3 col-form-label"
                                    style={{ fontSize: "18px", fontWeight: "bold" }}
                                >Contact Name</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg bg-info"
                                        id="contactName"
                                        placeholder="Contact Name"
                                        value={contactName}
                                        onChange={(e) => setContactName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="title" className="col-sm-3 col-form-label col-form-label-md">Title</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="title"
                                        placeholder="Title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="jobPosition" className="col-sm-3 col-form-label col-form-label-md">Job Position</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="jobPosition"
                                        placeholder="Job Position"
                                        value={jobPosition}
                                        onChange={(e) => setJobPosition(e.target.value)}
                                    />
                                </div>
                            </div>
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
                                        placeholder="phone"
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
                                <label for="notes" className="col-sm-3 col-form-label col-form-label-md"> Notes</label>
                                <div className="col-sm-9">
                                <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="notes"
                                        placeholder="Notes"
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="crm_name" className="col-sm-3 col-form-label col-form-label-md">Customer Name</label>
                                <div className="col-sm-9">
                                <select id="crm_name"
                                        className="form-control form-control-md form-select"
                                        value={crm_name}
                                        onChange={(e) => setCrm_name(e.target.value)}
                                    >
                                        {CRMs.map((CRM) => (          
                                        <option value={CRM.name}>{CRM.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-5">
                        <button onClick={(e) => saveContact(e)} className="btn btn-primary btn-lg" style={{ marginRight: "5px" }}>
                            Save
                        </button>
                        <Link to="/getAllCRM" className="btn btn-danger btn-lg ml-2">
                            Cancel
                        </Link>
                    </div>

                </form>}

        </div>
    );
};

export default AddContact;
