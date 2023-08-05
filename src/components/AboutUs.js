import React from "react";
import { MDBContainer, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import SideBar from "../components/SideBar";

function AboutUs() {
    const formStyle = {
        fontFamily: "Arial",
    };

    const containerStyle = {
        display: "flex",
        height: "100vh",
        position: "relative",
    };

    const contentContainerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        flexDirection: "column",
    };

    const headingStyle = {
        textAlign: "center",
        fontSize: "50px",
        fontWeight: "bold",
        marginBottom: "20px",
    };

    const paragraphStyle = {
        textAlign: "center",
        fontSize: "23px",
        lineHeight: "1.6",
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

            <div style={containerStyle}>
                <SideBar />

                <div
                    className="bg-image"
                    style={{
                        backgroundImage: `url("https://www.bjmp.gov.ph/images/files/107507100_197367938408005_8328798389745902524_o.jpg")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        height: '100vh',
                        width: '100%',
                    }}
                >
                    

                    <MDBContainer className="my-5 py-5">
                        <MDBCard style={{ height: "500px" }}>
                            <MDBCardBody>
                                {/* About Us Content */}
                                <div style={contentContainerStyle}>
                                    <h2 style={headingStyle}>About Us</h2>
                                    <p style={paragraphStyle}>
                                        JAILTRACK: A Face Recognition-Based Solution for Attendance Monitoring
                                        and Shift Scheduling of Jail Officers
                                    </p>
                                    <p style={paragraphStyle}>
                                        Welcome to JAILTRACK, a cutting-edge face recognition-based solution
                                        designed to revolutionize shift scheduling and attendance monitoring for
                                        jail officers. Our innovative system harnesses the power of advanced
                                        facial technology to streamline and enhance the management
                                        of jail personnel, ensuring a secure and efficient correctional
                                        facility environment.
                                    </p>
                                </div>
                                {/* End of About Us Content */}
                            </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
                </div>
            </div>
        </form>
    );
}

export default AboutUs;
