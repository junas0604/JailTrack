import React from "react";
import { Link } from "react-router-dom";
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
} from "mdb-react-ui-kit";
import SideBar from "../components/SideBar"

function AdminDashBoard() {

    const tableData = [
        {
            faceID: "/policeman.png",
            userId: "456",
            name: "John Doe",
            date: "2023-07-31",
            designatedPlace: "Main Building",
            timeIn: "09:00 AM",
            timeOut: "05:00 PM",
        },
        {
            faceID: "/policeman.png",
            userId: "789",
            name: "John Paul",
            date: "2023-07-31",
            designatedPlace: "Gate",
            timeIn: "01:00 PM",
            timeOut: "08:00 PM",
        },
        {
            faceID: "/policeman.png",
            userId: "111",
            name: "James Stephen",
            date: "2023-07-31",
            designatedPlace: "Annex Building",
            timeIn: "09:00 AM",
            timeOut: "05:00 PM",
        },


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
                        position: "sticky",
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

                                <MDBCard style={{ width: "40%", maxWidth: "600px", backgroundColor: "#5A5A5A4D" }}>
                                    <MDBCardBody style={{ width: "100%" }}>
                                        <img
                                            src="/user-gear.png"
                                            alt="User"
                                            style={{ marginRight: "10px", height: "50px", width: "50px" }}
                                        />
                                        <span>
                                            Hello, Admin Junas Nazarito
                                            <img
                                                src="/wave.png"
                                                alt="Wave"
                                                style={{ marginLeft: "10px", height: "50px", width: "50px" }}
                                            />
                                        </span>
                                    </MDBCardBody>
                                </MDBCard>



                                <MDBCard
                                    style={{ width: "19%", maxWidth: "600px", backgroundColor: "#146CA4", marginTop: '10px' }}
                                >
                                    <Link to="/AdminRequestSchedSystem" style={{ textDecoration: "none", color: "black" }}>
                                        <MDBCardBody style={{ width: "100%" }}>
                                            Scheduling System{" "}
                                            <p></p>
                                            <img
                                                src="/calendar.png"
                                                alt="User"
                                                style={{ marginLeft: "50px", height: "80px", width: "80px" }}
                                            />
                                        </MDBCardBody>
                                    </Link>
                                </MDBCard>

                                <MDBCard
                                    style={{ width: "19%", maxWidth: "600px", backgroundColor: "#146CA4", marginTop: '-155px', marginLeft: '250px' }}
                                >
                                    <Link to="/StartFaceAttendance" style={{ textDecoration: "none", color: "black" }}>
                                        <MDBCardBody style={{ width: "100%" }}>
                                            Face Recognition{" "}
                                            <p></p>
                                            <img
                                                src="/FaceRecog.png"
                                                alt="Face Recognition"
                                                style={{ marginLeft: "50px", height: "80px", width: "80px" }}
                                            />
                                        </MDBCardBody>
                                    </Link>
                                </MDBCard>



                                <MDBCard
                                    style={{ width: "19%", maxWidth: "600px", backgroundColor: "#5A8C5A", marginTop: '20px' }}
                                >
                                    <Link to="/AdminOfficerRequest" style={{ textDecoration: "none", color: "black" }}>
                                        <MDBCardBody style={{ width: "100%" }}>
                                            Officer Request{" "}
                                            <p></p>
                                            <img
                                                src="/request.png"
                                                alt="Request"
                                                style={{ marginLeft: "50px", height: "80px", width: "80px" }}
                                            />
                                        </MDBCardBody>
                                    </Link>
                                </MDBCard>



                                <MDBCard
                                    style={{ width: "19%", maxWidth: "600px", backgroundColor: "#146CA4", marginTop: '-155px', marginLeft: '250px' }}
                                >
                                    <Link to="/AdminViewOfficer" style={{ textDecoration: "none", color: "black" }}>
                                        <MDBCardBody style={{ width: "100%" }}>
                                            View Officer on Duty{" "}
                                            <p></p>
                                            <img
                                                src="/policeman.png"
                                                alt="Request"
                                                style={{ marginLeft: "50px", height: "80px", width: "80px" }}
                                            />
                                        </MDBCardBody>
                                    </Link>
                                </MDBCard>


                                <MDBTable style={{ marginLeft: "520px", width: "750px", marginTop: "-420px", marginBottom: "400px", border: "2px solid black", borderRadius: "5px" }}>
                                    <MDBTableHead>
                                        <tr>
                                            <th>Face ID</th>
                                            <th>User ID</th>
                                            <th>Name</th>
                                            <th>Date</th>
                                            <th>Designated/Place Assigned</th>
                                            <th>Time in</th>
                                            <th>Time out</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        {tableData.map((row, index) => (
                                            <tr key={index}>
                                                <td>{row.faceId}</td>
                                                <td>{row.userId}</td>
                                                <td>{row.name}</td>
                                                <td>{row.date}</td>
                                                <td>{row.designatedPlace}</td>
                                                <td>{row.timeIn}</td>
                                                <td>{row.timeOut}</td>
                                            </tr>
                                        ))}
                                    </MDBTableBody>
                                </MDBTable>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
                    <MDBContainer>

                    </MDBContainer>
                </div>
            </div>
        </form>
    );
}

export default AdminDashBoard;
