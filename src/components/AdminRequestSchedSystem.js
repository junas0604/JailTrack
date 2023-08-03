import React from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "../components/SideBar";

function AdminRequestSchedSystem() {
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
                    position: "relative",
                }}
            >
                <SideBar />

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

                                <div style={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
                                    <span style={{ flex: 1 }}>
                                        Create & View Team
                                    </span>
                                    <Link to="/AdminCreateNewTeam">
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </Link>
                                </div>


                                <div style={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
                                    <span style={{ flex: 1 }}>
                                        Create Schedule
                                    </span>
                                    <Link to="/AdminCreateSched">
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </Link>
                                </div>
                                <div style={{ marginTop: '-10px', marginLeft: "700px", height: "500px", width: "500px", background: `url('/calBack.png')`, filter: "blur(10px)" }} />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
                </div>
            </div>
        </form>
    );
}


export default AdminRequestSchedSystem;
