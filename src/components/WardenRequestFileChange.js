import React, { useState } from "react";
import { MDBContainer, MDBCard, MDBCardBody, MDBInput } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import WardenSideBar from "../components/WardenSideBar";

function WardenRequestFileChange() {
    const [selectedRequestType, setSelectedRequestType] = useState("Leave");
    const navigate = useNavigate();

    const handleRequestTypeChange = (event) => {
        setSelectedRequestType(event.target.value);
    };

    const handleCancelClick = () => {
        navigate("/WardenFileShiftChange");
    };

    return (
        <form style={{ fontFamily: "Arial" }}>
            <nav
                className="navbar navbar-expand-lg navbar-dark bg-dark"
                style={{ height: "65px" }}
            >
                <a className="navbar-brand" href="/WardenDashboard">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/97/Bureau_of_Jail_Management_and_Penology.png"
                        alt="Logo"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        style={{ marginLeft: "20px" }}
                    />
                    <span className="ml-2" style={{ marginLeft: "20px", fontSize: "30px" }}>
                        JAILTRACK
                    </span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" style={{ marginLeft: "1200px" }}>
                        <li className="nav-item">
                            <a className="nav-link" href="/WardenLogin">
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div style={{ display: "flex", height: "100vh", position: "relative" }}>
                <WardenSideBar />

                <div
                    className="bg-image"
                    style={{
                        backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.5), rgba(5, 5, 5, 0.5)), url("https://www.bjmp.gov.ph/images/files/107507100_197367938408005_8328798389745902524_o.jpg")`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        flex: 1,
                        padding: "25px",
                    }}
                >
                    <MDBContainer className="my-10 py-10">
                        <MDBCard>
                            <MDBCardBody>
                                <div className="notification" style={{ marginBottom: "20px", padding: "10px", backgroundColor: "#189DE4" }}>
                                    <h3 className="text-center mb-4">Select Date of Current Duty</h3>
                                </div>

                                <select
                                    className="form-select mb-3"
                                    value={selectedRequestType}
                                    onChange={handleRequestTypeChange}
                                >
                                    <option value="Leave">Leave</option>
                                    <option value="Absent">Absent</option>
                                </select>

                                <div className="row">
                                    <div className="col-md-4">
                                        <MDBInput label="Month" type="number" min={1} max={12} />
                                    </div>
                                    <div className="col-md-4">
                                        <MDBInput label="Day" type="number" min={1} max={31} />
                                    </div>
                                    <div className="col-md-4">
                                        <MDBInput label="Year" type="number" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-label">Time In</label>
                                        <input className="form-control" type="time" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Time Out</label>
                                        <input className="form-control" type="time" />
                                    </div>
                                </div>

                                <div className="notification" style={{ marginBottom: "20px", padding: "10px", backgroundColor: "#189DE4" }}>
                                    <h3 className="text-center mb-4">Select Date of Duty</h3>
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <MDBInput label="Month" type="number" min={1} max={12} />
                                    </div>
                                    <div className="col-md-4">
                                        <MDBInput label="Day" type="number" min={1} max={31} />
                                    </div>
                                    <div className="col-md-4">
                                        <MDBInput label="Year" type="number" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-label">Time In</label>
                                        <input className="form-control" type="time" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Time Out</label>
                                        <input className="form-control" type="time" />
                                    </div>
                                </div>

                                <div className="d-flex justify-content-end mt-4">
                                    <button type="button" className="btn btn-secondary me-2" onClick={handleCancelClick}>Cancel</button>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
                </div>
            </div>
        </form>
    );
}

export default WardenRequestFileChange;
