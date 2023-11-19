import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import crmService from "../service/crmService";


const AddCRM = () => {

    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");
    const navigate = useNavigate();
    const { id } = useParams();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [website, setWebsite] = useState("");
    const [tags, setTags] = useState("");
    const [mobile, setMobile] = useState("");
    const [fax, setFax] = useState("");
    const [language, setLanguage] = useState("");

    const saveCRM = (e) => {
        e.preventDefault();

        const crm = {
            name,
            phone,
            email,
            country,
            state,
            city,
            street,
            website,
            tags,
            mobile,
            fax,
            language,
            id
        };
        if (id) {
            //update
            crmService
                .update(crm)
                .then((response) => {
                    console.log("crm data updated successfully", response.data);
                    navigate("/getAllCRM");
                })
                .catch((error) => {
                    console.log("Something went wrong", error);
                });
        } else {
            console.log("create")
            //create
            crmService
                .create(crm)
                .then((response) => {
                    console.log("crm added successfully", response.data);
                    navigate("/getAllCRM");
                })
                .catch((error) => {
                    console.log("something went wrong", error);
                });
        }
    };

    useEffect(() => {
        if (id) {
            crmService
                .get(id)
                .then((crm) => {
                    setName(crm.data.name);
                    setPhone(crm.data.phone);
                    setEmail(crm.data.email);
                    setCountry(crm.data.country);
                    setState(crm.data.state);
                    setCity(crm.data.city);
                    setStreet(crm.data.street);
                    setWebsite(crm.data.website);
                    setTags(crm.data.tags);
                    setMobile(crm.data.mobile);
                    setFax(crm.data.fax);
                    setLanguage(crm.data.language);
                })
                .catch((error) => {
                    console.log("Something went wrong", error);
                });
        }
    }, [id]);
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
                    {id && <h2 className="text-center mt-3 mb-5">Update Customer Information</h2>}
                    {id==undefined && <h2 className="text-center mt-3 mb-5">Add Customer Information</h2>}
                    <div className="form-group row shadow p-3 mb-5 bg-white rounded">
                        <div className="form-group col-md-6">
                            <div className="form-group row">
                                <label for="name"
                                    className="col-sm-3 col-form-label"
                                    style={{ fontSize: "18px", fontWeight: "bold" }}
                                >Name</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg bg-info"
                                        id="name"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
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
                                        placeholder="Phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
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
                                <label for="country" className="col-sm-3 col-form-label col-form-label-md">Country</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="country"
                                        placeholder="Country"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="state" className="col-sm-3 col-form-label col-form-label-md">State</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="state"
                                        placeholder="State"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="city" className="col-sm-3 col-form-label col-form-label-md">City</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="city"
                                        placeholder="City"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="form-group col-md-6">
                            <div className="form-group row mb-2">
                                <label for="street" className="col-sm-3 col-form-label col-form-label-md"> Street</label>
                                <div className="col-sm-9">
                                <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="street"
                                        placeholder="street"
                                        value={street}
                                        onChange={(e) => setStreet(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="website" className="col-sm-3 col-form-label col-form-label-md">Website</label>
                                <div className="col-sm-9">
                                <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="website"
                                        placeholder="website"
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="tags" className="col-sm-3 col-form-label col-form-label-md">Tags</label>
                                <div className="col-sm-9">
                                <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="tags"
                                        placeholder="tags"
                                        value={tags}
                                        onChange={(e) => setTags(e.target.value)}
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
                                        placeholder="mobile"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="fax" className="col-sm-3 col-form-label col-form-label-md">Fax</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        id="fax"
                                        placeholder="fax Information...."
                                        value={fax}
                                        onChange={(e) => setFax(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label for="language" className="col-sm-3 col-form-label col-form-label-md">Language</label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control form-control-md"
                                        id="language"
                                        placeholder="language"
                                        value={language}
                                        onChange={(e) => setLanguage(e.target.value)}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="my-5">
                        <button onClick={(e) => saveCRM(e)} className="btn btn-primary btn-lg" style={{ marginRight: "5px" }}>
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

export default AddCRM;
