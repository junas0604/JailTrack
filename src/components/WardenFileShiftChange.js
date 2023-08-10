import React, { useState } from "react";
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
} from "mdb-react-ui-kit";
import WardenSideBar from "../components/WardenSideBar";
import { Link } from "react-router-dom";

function WardenFileShiftChange() {
    const [requests, setRequests] = useState([
        { id: 1, name: "Jail Insp. Ian Alonzo", status: "approved" },
        { id: 2, name: "Jail Insp. Ian Alonzo", status: "denied" },
        { id: 3, name: "Jail Insp. Ian Alonzo", status: "denied" },
        { id: 4, name: "Jail Insp. Ian Alonzo", status: "approved" },
    ]);

    const getRequestColor = (status) => {
        return status === "approved" ? "green" : "red";
    };

    const formStyle = {
        fontFamily: "Arial",
    };

    return (
        <form style={formStyle}>
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

            <div
                style={{
                    display: "flex",
                    height: "100vh",
                    position: "relative",
                }}
            >
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
                                <MDBTable>
                                    <MDBTableHead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Status</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        {requests.map((request) => (
                                            <tr key={request.id}>
                                                <td>{request.name}</td>
                                                <td style={{ color: getRequestColor(request.status) }}>
                                                    {request.status}
                                                </td>
                                            </tr>
                                        ))}
                                    </MDBTableBody>
                                </MDBTable>

                                <div style={{ marginBottom: "20px", padding: "30px", marginLeft: "800px", width: "1000px" }}>
                                    <Link to="/WardenRequestFileChange">
                                        <h4 style={{ color: "#000000" }}>
                                            <img src="/send.png" alt="Request" style={{ height: "50px", width: "50px", marginRight: "10px" }} /> Click Here to Send Request
                                        </h4>
                                    </Link>
                                </div>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
                </div>
            </div>
        </form>
    );
}

export default WardenFileShiftChange;
