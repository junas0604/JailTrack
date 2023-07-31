import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
} from "mdb-react-ui-kit";

function Sidebar() {
    return (
        <div
            style={{
                position: "sticky",
                top: "65px",
                left: 0,
                height: "100%",
                width: "360px",
                backgroundColor: "#0B0C13", // Change the background color here
                color: "#fff",
                padding: "20px",
                fontSize: "23px",
            }}
        >
            <ul style={{ listStyleType: "none", padding: 0 }}>
                <li style={{ marginBottom: "20px" }}>
                    {/* Use the dashboard.png image for the "Dashboard" link */}
                    <Link to="/ForgotPass" style={{ textDecoration: "none", color: "white" }}>
                        <img src="/dashboard.png" alt="Dashboard" style={{ marginRight: "10px", height: "25px", width: "25px" }} />
                        Dashboard
                    </Link>
                </li>

                <li style={{ marginBottom: "20px" }}>
                    {/* Use the bell.png image for the "Notifications" link */}
                    <Link to="/AdminNotification" style={{ textDecoration: "none", color: "white" }}>
                        <img src="/bell.png" alt="Notifications" style={{ marginRight: "10px", height: "25px", width: "25px" }} />
                        Notifications
                    </Link>
                </li>
                <li style={{ marginBottom: "20px" }}>
                    {/* Use the calendar.png image for the "Scheduling System" link */}
                    <Link to="/NewPassword" style={{ textDecoration: "none", color: "white" }}>
                        <img src="/calendar.png" alt="Scheduling System" style={{ marginRight: "10px", height: "25px", width: "25px" }} />
                        Scheduling System
                    </Link>
                </li>
                <li style={{ marginBottom: "20px" }}>
                    {/* Use the FaceRecog.png image for the "Face Recognition" link */}
                    <Link to="/settings" style={{ textDecoration: "none", color: "white" }}>
                        <img src="/FaceRecog.png" alt="Face Recognition" style={{ marginRight: "10px", height: "25px", width: "25px" }} />
                        Face Recognition
                    </Link>
                </li>
                <li style={{ marginBottom: "20px" }}>
                    {/* Use the policeman.png image for the "View Officers" link */}
                    <Link to="/Login" style={{ textDecoration: "none", color: "white" }}>
                        <img src="/policeman.png" alt="View Officers" style={{ marginRight: "10px", height: "25px", width: "25px" }} />
                        View Officers
                    </Link>
                </li>
                <li style={{ marginBottom: "20px" }}>
                    <Link to="/Login" style={{ textDecoration: "none", color: "white" }}>
                        <img src="/request.png" alt="Officer Request" style={{ marginRight: "10px", height: "25px", width: "25px" }} />
                        Officer Request
                    </Link>
                </li>
                <li style={{ marginBottom: "20px" }}>
                    {/* Use the attendance.png image for the "Attendance" link */}
                    <Link to="/Login" style={{ textDecoration: "none", color: "white" }}>
                        <img src="/attendance.png" alt="Attendance" style={{ marginRight: "10px", height: "25px", width: "25px" }} />
                        Attendance
                    </Link>
                </li>
                <li style={{ marginBottom: "20px" }}>
                    <Link to="/Login" style={{ textDecoration: "none", color: "white" }}>
                        <FontAwesomeIcon icon={faGear} style={{ marginRight: "10px" }} />Settings
                    </Link>
                </li>
            </ul>
        </div>
    );
}

function AdminNotification() {

    const formStyle = {
        fontFamily: "Arial",
    };
    return (
        <form style={formStyle}>
            <nav
                className="navbar navbar-expand-lg navbar-dark bg-dark"
                style={{ height: "65px" }}
            >
                <a className="navbar-brand" href="/">
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
                            <a className="nav-link" href="/Login">
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
                    position: "relative", // Add this to make the child divs position relative to the parent
                }}
            >
                <Sidebar />
                {/* Main content area */}
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
                    <MDBContainer className="my-5 py-5">
                        <MDBCard>
                            <MDBCardBody>
                                <div style={{ backgroundColor: "skyblue", padding: "10px", marginBottom: "20px" }}>
                                    <h2 style={{ textAlign: "center", margin: 0, color: "white" }}>Notifications</h2>
                                </div>

                                {/* Add your notification content here */}
                                <div style={{ marginBottom: "20px", padding: "10px", backgroundColor: "#D9D9D9" }}>
                                    <h3 style={{ color: "#000000", marginBottom: "10px" }}>Notification 1</h3>
                                    <p style={{ color: "#000000" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non hendrerit nisl, nec dignissim mauris.</p>
                                </div>

                                <div style={{ marginBottom: "20px", padding: "10px", backgroundColor: "#D9D9D9" }}>
                                    <h3 style={{ color: "#000000", marginBottom: "10px" }}>Notification 2</h3>
                                    <p style={{ color: "#000000" }}>Sed feugiat, sapien ut fringilla iaculis, metus lacus placerat ipsum.</p>
                                </div>

                                <div style={{ marginBottom: "20px", padding: "10px", marginLeft: "900px" }}>
                                <Link to="/signup"> <h4 style={{ color: "#000000" }}> <img src="/request.png" alt="Request" tyle={{ height: "30px", width: "30px", marginRight: "20px" }}/> Officer Request.</h4></Link>
                                </div>


                            </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
                </div>
            </div>
        </form>
    );
}

export default AdminNotification;