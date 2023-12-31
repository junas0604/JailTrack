import React from "react";
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
} from "mdb-react-ui-kit";
import SideBar from "../components/SideBar";
import { Link } from "react-router-dom";

function UploadFaceData() {
    const formStyle = {
        fontFamily: "Arial",
    };

    const officerNames = [
        "JO1 Junas Gutib",
        "JO2 James Bulfa",
        "JO3 Hans Eguero",
        "SJO1 Joey Dawe",
        "JO4 Jason Patigayon",
        "JO4 Mark Rocaberte",
        "JO1 Ciedner Mabale",
    ];

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
                                <MDBCard>
                                    <MDBCardBody>
                                        <div
                                            style={{
                                                backgroundColor: "skyblue",
                                                padding: "10px",
                                                marginBottom: "20px",
                                            }}
                                        >
                                            <h2
                                                style={{
                                                    textAlign: "center",
                                                    margin: 0,
                                                    color: "white",
                                                }}
                                            >
                                                Choose an Officer to upload facial data
                                            </h2>
                                        </div>
                                        <MDBTable>
                                            <MDBTableHead>
                                                <tr>
                                                    <th>Officer Name</th>
                                                    <th>Action</th>
                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>
                                                {officerNames.map((name, index) => (
                                                    <tr key={index}>
                                                        <td>{name}</td>
                                                        <td>
                                                            {index === 0 ? (
                                                                <React.Fragment>
                                                                    <img
                                                                        src="a.png"
                                                                        alt="Officer's Face"
                                                                        width="50"
                                                                        height="50"
                                                                    />
                                                                    <br />
                                                                    <Link to="/ScanFace" style={{ color: "white", textDecoration: "none" }}>
                                                                    <button className="btn btn-primary" style={{ backgroundColor: "#E97912" }}>
                                                                        Upload Facial Data
                                                                    </button>
                                                                    </Link>
                                                                </React.Fragment>
                                                            ) : (
                                                               
                                                                <button className="btn btn-primary" style={{ backgroundColor: "#E97912" }}>
                                                                    View Face Data
                                                                </button>
                                                              
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </MDBTableBody>
                                        </MDBTable>
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

export default UploadFaceData;
