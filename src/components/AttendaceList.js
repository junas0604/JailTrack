import React from "react";
import SideBar from "./SideBar";
import "react-calendar/dist/Calendar.css";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

function AttendaceList() {

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


    // Add more rows of data here if needed
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
        {/* Main content area */}
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
          <MDBContainer className="my-5 py-5">
            <MDBCard>
              <MDBCardBody>
                <MDBTable style={{ height:"300px",width: "1200px", border: "2px solid black", borderRadius: "5px" }}>
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
                        <td style={{border: "2px solid black" }}>{row.faceId}</td>
                        <td style={{border: "2px solid black" }}>{row.userId}</td>
                        <td style={{border: "2px solid black" }}>{row.name}</td>
                        <td style={{border: "2px solid black" }}>{row.date}</td>
                        <td style={{border: "2px solid black" }}>{row.designatedPlace}</td>
                        <td style={{border: "2px solid black" }}>{row.timeIn}</td>
                        <td style={{border: "2px solid black" }}>{row.timeOut}</td>
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

export default AttendaceList;
