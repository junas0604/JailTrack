import React from "react";
import { MDBContainer, MDBCard, MDBCardBody, MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import WardenSideBar from "../components/WardenSideBar";

function WardenEditProfile() {
    const formStyle = {
        fontFamily: "Arial",
    };

    const navigate = useNavigate();


    const handleCancelClick = () => {
        navigate("/WardenSettings");
    };

    return (
        <div style={formStyle}>
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
            <div style={{ display: "flex", height: "110vh", position: "relative" }}>
                <WardenSideBar />
                <div className="bg-image" style={{
                    backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.5), rgba(5, 5, 5, 0.5)), url("https://www.bjmp.gov.ph/images/files/107507100_197367938408005_8328798389745902524_o.jpg")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    flex: 1,
                    padding: "25px",
                    display: "flex",
                    flexDirection: "column",
                    height:"1027px"
                }}>
                    <MDBContainer className="my-10 py-10">
                        <MDBCard>
                            <MDBCardBody>
                            

                          
                                 <div className="d-flex justify-content-center mt-4">
                              
                                     <MDBBtn color="danger" onClick={handleCancelClick}>
                                        Back
                                    </MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
                </div>
            </div>
        </div>
    );
}

export default WardenEditProfile;
