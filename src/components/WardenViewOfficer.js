import React, { useState } from "react";
import { MDBContainer, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import WardenSideBar from "../components/WardenSideBar";

function WardenViewOfficer() {
    const formStyle = {
        fontFamily: "Arial",
    };

    const imageStyle = {
        width: "120px",
        height: "120px",
        margin: "auto",
        display: "block",
    };

    const [showOptions, setShowOptions] = useState(true);

    const handleMoreClick = () => {
        setShowOptions(!showOptions);
    };

    const handlePageClick = () => {
        if (showOptions) {
            setShowOptions(false);
        }
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
                    height: "120vh",
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
                        display: "flex",
                        flexDirection: "column",
                    }}
                    onClick={handlePageClick}
                >
                    <MDBContainer className="my-10 py-10">
                        <MDBCard
                            style={{
                                width: "150%",
                                maxWidth: "1280px",
                                height: "80%",
                                maxHeight: "1680px",
                                backgroundColor: "white",
                                marginTop: "50px",
                                marginLeft: "20px",
                            }}
                        >
                            <MDBCardBody>
        
                                <MDBCard
                                    style={{
                                        width: "19%",
                                        maxWidth: "600px",
                                        backgroundColor: "white",
                                        marginTop: "50px",
                                        marginRight: "10px",
                                    }}
                                >
                                    <MDBCardBody>
                                        <div
                                            style={{
                                                position: "relative",
                                                display: "flex",
                                                justifyContent: "flex-end",
                                            }}
                                        >
                                            <img
                                                src="more.png"
                                                alt="More Options"
                                                style={{
                                                    cursor: "pointer",
                                                    width: "30px",
                                                    height: "30px",
                                                    marginRight: "10px",
                                                }}
                                                onClick={handleMoreClick}
                                            />
                                            {showOptions && (
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        top: "0",
                                                        right: "0",
                                                        backgroundColor: "white",
                                                        padding: "10px",
                                                        border: "1px solid #ccc",
                                                        borderRadius: "4px",
                                                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            backgroundColor: "red",
                                                            padding: "8px",
                                                            marginBottom: "5px",
                                                            borderRadius: "4px",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        Delete
                                                    </div>
                                                    <div
                                                        style={{
                                                            backgroundColor: "orange",
                                                            padding: "8px",
                                                            marginBottom: "5px",
                                                            borderRadius: "4px",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        View Officer Data
                                                    </div>
                                                    <div
                                                        style={{
                                                            backgroundColor: "skyblue",
                                                            padding: "8px",
                                                            borderRadius: "4px",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        Attendance History
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <img src="immage.png" alt="Profile of Ciedner Mabale" style={imageStyle} />
                                        <p style={{ marginLeft: "60px", fontFamily: "Arial" }}>
                                            Ian Alonzo
                                        </p>
                                        <p
                                            style={{
                                                marginLeft: "60px",
                                                fontFamily: "Arial",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Jail Insp.
                                        </p>
                                        <div
                                            className="status "
                                            style={{
                                                marginBottom: "20px",
                                                padding: "10px",
                                                backgroundColor: "#5A8C5A",
                                            }}
                                        >
                                            <p style={{ marginLeft: "56px" }}>ON DUTY</p>
                                        </div>
                                        <div
                                            className="contacts"
                                            style={{
                                                marginBottom: "20px",
                                                padding: "10px",
                                                backgroundColor: "#D9D9D9",
                                            }}
                                        >
                                            <p style={{ marginLeft: "26px" }}>ianbna@gmal.com</p>
                                            <p style={{ marginLeft: "29px" }}>+637690345699</p>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>


                                <MDBCard
                                    style={{
                                        marginTop: "-465px",
                                        marginLeft: "250px",
                                        width: "19%",
                                        backgroundColor: "white",
                                        marginBottom: "500px",
                                    }}
                                >
                                    <MDBCardBody>
                                        <div
                                            style={{
                                                position: "relative",
                                                display: "flex",
                                                justifyContent: "flex-end",
                                            }}
                                        >
                                            <img
                                                src="more.png"
                                                alt="More Options"
                                                style={{
                                                    cursor: "pointer",
                                                    width: "30px",
                                                    height: "30px",
                                                    marginRight: "10px",
                                                }}
                                                onClick={handleMoreClick}
                                            />
                                            {showOptions && (
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        top: "0",
                                                        right: "0",
                                                        backgroundColor: "white",
                                                        padding: "10px",
                                                        border: "1px solid #ccc",
                                                        borderRadius: "4px",
                                                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            backgroundColor: "red",
                                                            padding: "8px",
                                                            marginBottom: "5px",
                                                            borderRadius: "4px",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        Delete
                                                    </div>
                                                    <div
                                                        style={{
                                                            backgroundColor: "orange",
                                                            padding: "8px",
                                                            marginBottom: "5px",
                                                            borderRadius: "4px",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        View Officer Data
                                                    </div>
                                                    <div
                                                        style={{
                                                            backgroundColor: "skyblue",
                                                            padding: "8px",
                                                            borderRadius: "4px",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        Attendance History
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <img src="immage.png" alt="Profile of Ciedner Mabale" style={imageStyle} />
                                        <p style={{ marginLeft: "60px", fontFamily: "Arial" }}>
                                            Ciedner Mabale
                                        </p>
                                        <p
                                            style={{
                                                marginLeft: "60px",
                                                fontFamily: "Arial",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Jail Officer 3
                                        </p>
                                        <div
                                            className="status "
                                            style={{
                                                marginBottom: "20px",
                                                padding: "10px",
                                                backgroundColor: "#AE3A3A",
                                            }}
                                        >
                                            <p style={{ marginLeft: "56px" }}>OFF DUTY</p>
                                        </div>
                                        <div
                                            className="contacts"
                                            style={{
                                                marginBottom: "20px",
                                                padding: "10px",
                                                backgroundColor: "#D9D9D9",
                                            }}
                                        >
                                            <p style={{ marginLeft: "26px" }}>ianbna@gmal.com</p>
                                            <p style={{ marginLeft: "29px" }}>+637690345699</p>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
                </div>
            </div>
        </form>
    );
}

export default WardenViewOfficer;
