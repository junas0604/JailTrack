import React from "react";

import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
} from "mdb-react-ui-kit";
import SideBar from "../components/SideBar"

function AdminOfficerRequest() {

    const tableData = [
        {
            Officer: "JO1 Cieder Mabale",
            RequestType: "Absent",
            ExistingShift: "May 23, 2023",
            NewShift: "May 28, 2023",
        },
        {
            Officer: "JO3 Hans Erguero",
            RequestType: "Leave",
            ExistingShift: "May 28, 2023",
            NewShift: "June 01, 2023",
        },
        // Add more rows of data here if needed
    ];

    const accountApprovalRequests = [
        {
            User: "77777",
            Name: "James Stephen Bulfa",
        },
        {
            User: "77888",
            Name: "James Stephen Bulfa",
        },
        // Add more account approval requests here if needed
    ];



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
                                <div style={{ backgroundColor: "skyblue", padding: "10px", marginBottom: "20px" }}>
                                    <h2 style={{ textAlign: "center", margin: 0, color: "white" }}>Shift Approval   </h2>
                                </div>
                                <MDBTable responsive striped bordered>
                                    <MDBTableHead>
                                        <tr>
                                            <th>Officer</th>
                                            <th>Request Type</th>
                                            <th>Existing Shift</th>
                                            <th>New Shift</th>
                                            <th>Approval Status</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        {tableData.map((data, index) => (
                                            <tr key={index}>
                                                <td>{data.Officer}</td>
                                                <td>{data.RequestType}</td>
                                                <td>{data.ExistingShift}</td>
                                                <td>{data.NewShift}</td>
                                                <td>
                                                    <button className="btn btn-success mr-1">Approve</button>
                                                    <button className="btn btn-danger ml-1">Cancel</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </MDBTableBody>

                                </MDBTable>

                                <div style={{ backgroundColor: "skyblue", padding: "10px", marginBottom: "20px" }}>
                                    <h2 style={{ textAlign: "center", margin: 0, color: "white" }}>Account Approval   </h2>
                                </div>

                                <MDBTable>
                                    <MDBTableBody>
                                        {accountApprovalRequests.map((request, index) => (
                                            <tr key={index}>
                                                <td>User "{request.User}" or {request.Name} has requested to register an account.</td>
                                                <td style={{ marginLeft: '50px' }}>
                                                    <button className="btn btn-success mr-1">Approve</button>
                                                    <button className="btn btn-danger ml-1">Cancel</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </MDBTableBody>
                                </MDBTable>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
                </div>
            </div>
        </form>
    );
}

export default AdminOfficerRequest;
