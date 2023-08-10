import React, { useState } from "react";
import { MDBContainer, MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn } from "mdb-react-ui-kit";
import WardenSideBar from "../components/WardenSideBar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaPlusCircle } from "react-icons/fa";

function WardenShiftSchedule() {
    const formStyle = {
        fontFamily: "Arial",
    };

    const getCurrentMonthAndYear = () => {
        const date = new Date();
        const month = date.toLocaleDateString("en-US", { month: "long" });
        const year = date.toLocaleDateString("en-US", { year: "numeric" });
        return `${month} ${year}`;
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAdditionalModalOpen, setIsAdditionalModalOpen] = useState(false);
    const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);

    const togglePublishModal = (event) => {
        event.preventDefault();
        setIsPublishModalOpen(!isPublishModalOpen);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleAdditionalModal = () => {
        setIsAdditionalModalOpen(!isAdditionalModalOpen);
    };


    const highlightCurrentDay = ({ date, view }) => {
        if (view === "month") {
            const now = new Date();
            if (date.getDate() === now.getDate() && date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()) {
                return "highlight-current-day";
            }
        }
        return null;
    };

    const PublishModalContent = () => {
        return (
            <MDBModal show={isPublishModalOpen} onHide={togglePublishModal} backdrop>
                <MDBModalHeader style={{ backgroundColor: "white", color: "black", fontSize: "25px" }}>Publish & Notify</MDBModalHeader>
                <MDBModalBody style={{ backgroundColor: "white", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img src="tick.png" alt="Done!" style={{ width: "100px", height: "100px", marginBottom: "20px" }} />
                    <p>Done!</p>
                </MDBModalBody>
                <MDBModalFooter style={{ backgroundColor: "white" }}>
                    <MDBBtn color="secondary" onClick={togglePublishModal}>Close</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        );
    };

    const AdditionalModalContent = () => {
        return (
            <MDBModal show={isAdditionalModalOpen} onHide={toggleAdditionalModal} backdrop>

                <MDBModalHeader style={{ backgroundColor: "white", color: "black", fontSize: "25px" }}>
                    Schedule Shift
                </MDBModalHeader>


                <MDBModalBody style={{ backgroundColor: "white", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    <div className="form-group">
                        <label htmlFor="teamSelect">Select Team:</label>

                        <select className="form-control" id="teamSelect" placeholder="Select Team">
                            <option value="Team 1">Team 1</option>
                            <option value="Team 2">Team 2</option>
                            <option value="Team 3">Team 3</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="scheduleDate">Schedule Date:</label>
                        <input type="date" className="form-control" id="scheduleDate" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="officerSelect">Select Officer:</label>
                        <select className="form-control" id="officerSelect" placeholder="Select Officer">
                            <option value="JO1">JO1</option>
                            <option value="JO2">JO2</option>
                            <option value="JO3">JO3</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="designationInput">Designation:</label>
                        <input type="text" className="form-control" id="designationInput" placeholder="Enter Designation" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="startDate">Start Date:</label>
                        <input type="date" className="form-control" id="startDate" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="endDate">End Date:</label>
                        <input type="date" className="form-control" id="endDate" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="startTime">Start Time:</label>
                        <input type="time" className="form-control" id="startTime" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="endTime">End Time:</label>
                        <input type="time" className="form-control" id="endTime" />
                    </div>

                </MDBModalBody>
                <MDBModalFooter style={{ backgroundColor: "white" }}>
                    <MDBBtn color="secondary" onClick={toggleAdditionalModal}>
                        Close
                    </MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        );
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
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <MDBContainer className="my-10 py-10">
                        <MDBCard>
                            <MDBCardBody>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                                    <button
                                        style={{
                                            background: "#E97912",
                                            color: "white",
                                            padding: "10px 20px",
                                            borderRadius: "5px",
                                        }}
                                    >
                                        Auto Shift Options
                                    </button>
                                    <div style={{ display: "flex", alignItems: "center" }}>


                                        <h2 onClick={toggleModal} style={{ cursor: "pointer", marginRight: "20px", alignContent: "center", justifyContent: "space-between" }}>
                                            {getCurrentMonthAndYear()}
                                        </h2>


                                        <button
                                            style={{
                                                background: "#5A8C5A",
                                                color: "white",
                                                padding: "10px 20px",
                                                borderRadius: "5px",
                                                marginRight: "10px",
                                            }}
                                            onClick={togglePublishModal}
                                        >
                                            PUBLISH & NOTIFY
                                        </button>

                                        <FaPlusCircle onClick={toggleAdditionalModal} style={{ cursor: "pointer", fontSize: "1.5rem" }} />
                                    </div>
                                </div>


                                <MDBTable style={{ width: "100%", marginTop: "20px", border: "2px solid black", borderCollapse: "collapse" }}>
                                    <MDBTableHead>
                                        <tr>
                                            <th style={{ border: "2px solid black" }}>Team 1</th>
                                            <th style={{ border: "2px solid black" }}>Sun</th>
                                            <th style={{ border: "2px solid black" }}>Mon</th>
                                            <th style={{ border: "2px solid black" }}>Tue</th>
                                            <th style={{ border: "2px solid black" }}>Wed</th>
                                            <th style={{ border: "2px solid black" }}>Thu</th>
                                            <th style={{ border: "2px solid black" }}>Fri</th>
                                            <th style={{ border: "2px solid black" }}>Sat</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        <tr style={{ border: "2px solid black" }}>
                                            <td style={{ backgroundColor: "Red", border: "2px solid black" }}>Warden 1</td>
                                            <td style={{ backgroundColor: "Green", border: "2px solid black" }}>Duty</td>
                                            <td style={{ backgroundColor: "Green", border: "2px solid black" }}>Duty</td>
                                            <td style={{ backgroundColor: "Green", border: "2px solid black" }}>Duty</td>
                                            <td style={{ backgroundColor: "Green", border: "2px solid black" }}>Duty</td>
                                            <td style={{ backgroundColor: "Green", border: "2px solid black" }}>Duty</td>
                                            <td style={{ backgroundColor: "Green", border: "2px solid black" }}>Duty</td>
                                            <td style={{ backgroundColor: "Green", border: "2px solid black" }}>Duty</td>
                                        </tr>
                                        <tr style={{ border: "2px solid black" }}>
                                            <td style={{ border: "2px solid black" }}>JO2 Gutib</td>
                                            <td style={{ backgroundColor: "Green", border: "2px solid black" }}>Duty</td>
                                            <td style={{ backgroundColor: "Green", border: "2px solid black" }}>Duty</td>
                                            <td style={{ border: "2px solid black" }}></td>
                                            <td style={{ backgroundColor: "Green", border: "2px solid black" }}>Duty</td>
                                            <td style={{ border: "2px solid black" }}></td>
                                            <td style={{ backgroundColor: "Green", border: "2px solid black" }}>Duty</td>
                                            <td style={{ backgroundColor: "Green", border: "2px solid black" }}>Duty</td>
                                        </tr>
                                        <tr style={{ border: "2px solid black" }}>
                                            <td style={{ border: "2px solid black" }}>JO1 Rocaberte</td>
                                            <td style={{ border: "2px solid black" }}></td>
                                            <td style={{ border: "2px solid black" }}></td>
                                            <td style={{ backgroundColor: "Green", border: "2px solid black" }}>Duty</td>
                                            <td style={{ border: "2px solid black" }}></td>
                                            <td style={{ backgroundColor: "Green", border: "2px solid black" }}>Duty</td>
                                            <td style={{ border: "2px solid black" }}></td>
                                            <td style={{ border: "2px solid black" }}></td>
                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>


                                <MDBModal show={isModalOpen} onHide={toggleModal} backdrop>
                                    <MDBModalHeader style={{ backgroundColor: "white", color: "black", fontSize: "25px" }}>Real-time Calendar</MDBModalHeader>
                                    <MDBModalBody style={{ backgroundColor: "white", display: "flex", justifyContent: "center" }}>
                                        <Calendar tileClassName={highlightCurrentDay} />
                                    </MDBModalBody>
                                    <MDBModalFooter style={{ backgroundColor: "white" }}>
                                        <MDBBtn color="secondary" onClick={toggleModal}>Close</MDBBtn>
                                    </MDBModalFooter>
                                </MDBModal>


                                <AdditionalModalContent />
                                <PublishModalContent />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
                </div>
            </div>
        </form>
    );
}

export default WardenShiftSchedule;
