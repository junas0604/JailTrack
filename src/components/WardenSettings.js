import React from "react";
import { MDBContainer, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import WardenSideBar from "../components/WardenSideBar";
import "react-calendar/dist/Calendar.css";

function WardenSettings() {

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
                                <div>
                                    <h2>Settings</h2>
                                    <ul style={{ listStyleType: "none" }}>
                                        <li style={{ fontSize: '30px' }}>
                                            Edit Profile
                                            <a href="/WardenProfile">
                                                <FontAwesomeIcon icon={faCircleArrowRight} style={{ color: "black", marginLeft: "10px" }} />
                                            </a>
                                        </li>

                                        <li style={{ fontSize: '30px', marginTop: "20px" }}>
                                            About Us
                                            <a href="/WardenAboutUs">
                                                <FontAwesomeIcon icon={faCircleArrowRight} style={{ color: "black", marginLeft: "10px" }} />
                                            </a>
                                        </li>

                                        <li style={{ fontSize: '30px', marginTop: "20px" }}>
                                            User Feedback
                                            <a href="/WardenUserFeedback">
                                                <FontAwesomeIcon icon={faCircleArrowRight} style={{ color: "black", marginLeft: "10px" }} />
                                            </a>
                                        </li >

                                        <li style={{ fontSize: '30px', marginTop: "20px" }}>
                                            Log Out
                                            <a href="/WardenLogin">
                                                <FontAwesomeIcon icon={faCircleArrowRight} style={{ color: "black", marginLeft: "10px" }} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
                </div>
            </div>
        </form>
    );
}

export default WardenSettings;



