import React from "react";
import { Link } from "react-router-dom";

import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
} from "mdb-react-ui-kit";
import WardenSideBar from "../components/WardenSideBar"

function WardenNotification() {

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
                                <div style={{ backgroundColor: "skyblue", padding: "10px", marginBottom: "20px" }}>
                                    <h2 style={{ textAlign: "center", margin: 0, color: "white" }}>Notifications</h2>
                                </div>


                                <div style={{ marginBottom: "20px", padding: "10px", backgroundColor: "#D9D9D9" }}>
                                    <h3 style={{ color: "#000000", marginBottom: "10px" }}>Notification 1</h3>
                                    <p style={{ color: "#000000" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non hendrerit nisl, nec dignissim mauris.</p>
                                </div>

                                <div className="notification" style={{ marginBottom: "20px", padding: "10px", backgroundColor: "#D9D9D9" }}>
                                    <h3 style={{ color: "#000000", marginBottom: "10px" }}>Notification 2</h3>
                                    <p style={{ color: "#000000" }}>Sed feugiat, sapien ut fringilla iaculis, metus lacus placerat ipsum.</p>
                                </div>

                            


                            </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
                </div>
            </div>
        </form>
    );
}

export default WardenNotification;