import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import crmService from "../service/crmService";
import contactService from "../service/contactService";

const CRMDetails = () => {

    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");
    const navigate = useNavigate();
    const { id } = useParams();
    const [contacts, setContacts] = useState({});


    const [crm, setCRM] = useState({});

    const deleteContact = (id)=>{
        contactService.remove(id)
        .then((response)=>{
            console.log("contact deleted successfully", response.data);
            init();
        })
        .catch((error) => {
            console.log("Something went wrong", error);
          });

    }


    const init = (id) => {
        console.log("kdfkvjdnkvj");
        crmService
            .get(id)
            .then((response) => {
                console.log("Printing crms data", response.data);
                setCRM(response.data);
                setContacts(response.data.contacts);
                console.log(crm);
                console.log(contacts);
            })
            .catch((error) => {
                console.log("Something went wrong", error);
            });
    };

    useEffect(() => {
        init(id);
    }, []);

    return (
        <div className="container my-3">
            {(username == "") &&
                <div className="text-center">
                    <h2>Unauthorized Access</h2>
                    <h3>Please Login</h3>
                </div>
            }

            {username &&
                <div className="mt-5">
                    <h2 className=" mt-3 mb-5">Customer Details</h2>
                    <div className=" row shadow p-3 mb-5 bg-white rounded">
                        <div className=" col-md-6">
                            <div className=" row">
                                <label for="name"
                                    className="col-sm-3 "
                                    style={{ fontSize: "18px", fontWeight: "bold" }}
                                >Name:</label>
                                <div className="col-sm-9">
                                    {crm.name}
                                </div>
                            </div>
                            <div className=" row mb-2">
                                <label for="phone" className="col-sm-3  -md">Phone:</label>
                                <div className="col-sm-9">
                                    {crm.phone}
                                </div>
                            </div>
                            <div className=" row mb-2">
                                <label for="email" className="col-sm-3  -md">Email:</label>
                                <div className="col-sm-9">
                                    {crm.email}
                                </div>
                            </div>
                            <div className=" row mb-2">
                                <label for="country" className="col-sm-3  -md">Country:</label>
                                <div className="col-sm-9">
                                    {crm.country}
                                </div>
                            </div>
                            <div className=" row mb-2">
                                <label for="state" className="col-sm-3  -md">State:</label>
                                <div className="col-sm-9">
                                    {crm.state}
                                </div>
                            </div>
                            <div className=" row mb-2">
                                <label for="city" className="col-sm-3  -md">City:</label>
                                <div className="col-sm-9">
                                    {crm.city}
                                </div>
                            </div>

                        </div>
                        <div className=" col-md-6">
                            <div className=" row mb-2">
                                <label for="street" className="col-sm-3  -md"> Street:</label>
                                <div className="col-sm-9">
                                    {crm.street}
                                </div>
                            </div>
                            <div className=" row mb-2">
                                <label for="website" className="col-sm-3  -md">Website:</label>
                                <div className="col-sm-9">
                                    {crm.website}
                                </div>
                            </div>
                            <div className=" row mb-2">
                                <label for="tags" className="col-sm-3  -md">Tags:</label>
                                <div className="col-sm-9">
                                    {crm.tags}
                                </div>
                            </div>
                            <div className=" row mb-2">
                                <label for="mobile" className="col-sm-3  -md">Mobile:</label>
                                <div className="col-sm-9">
                                    {crm.mobile}
                                </div>
                            </div>
                            <div className=" row mb-2">
                                <label for="fax" className="col-sm-3  -md">Fax:</label>
                                <div className="col-sm-9">
                                    {crm.fax}
                                </div>
                            </div>
                            <div className=" row mb-2">
                                <label for="language" className="col-sm-3  -md">Language:</label>
                                <div className="col-sm-9">
                                    {crm.language}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="my-5">
                        <Link to="/getAllCRM" className="btn btn-danger btn-lg ml-2">
                            Cancel
                        </Link>
                    </div>
                    <div className="d-flex flex-row ">
                        {crm.contacts?.map((contact) => (
                            <div className="card p-2 m-2 shadow-lg p-3 mb-5 bg-white rounded" style={{ width: "18rem" }}>
                                <h3 className="text-center">Contact Information</h3>
                                <hr />
                                <h5 className="p-2">Name:{contact.contactName}</h5>
                                <p className="p-2">Title:{contact.title}</p>
                                <p className="p-2">Email:{contact.email}</p>
                            </div>
                        ))}
                    </div>

                </div>

            }


        </div>
    );
};

export default CRMDetails;
