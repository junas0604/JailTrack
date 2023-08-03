import React from "react";
import { MDBContainer, MDBCard, MDBCardBody, MDBBtn } from "mdb-react-ui-kit";
import SideBar from "../components/SideBar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";

function StartFaceAttendance() {
  const formStyle = {
    fontFamily: "Arial",
  };


  return (
    <form style={formStyle}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ height: "65px" }}>
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
            display: "flex",
            flexDirection: "column",
          }}
        >
          <MDBContainer className="my-10 py-10">
            <MDBCard>
              <MDBCardBody>
                <div style={{ display: "flex" }}>
                  <Link to="/AdminFaceRecog">
                    <img
                      src="back.png"
                      alt="Back"
                      style={{
                        width: "50px",
                        height: "50px",
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        cursor: "pointer",
                      }}
                    />
                  </Link>

                  <div style={{ width: "40%" }}>
                    <img
                      src="success.png"
                      alt="Success"
                      style={{
                        width: "100%",
                        height: "auto",
                        marginTop: "80px",
                        marginLeft: "50px",
                        marginBottom: "60px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      marginLeft: "50px",
                      padding: "10px",
                      backgroundColor: "white",
                    }}
                  >
                    <MDBContainer>
                      <table className="table" style={{ marginTop: "70px" }}>
                        <tbody>
                          <tr>
                            <td>
                              <label htmlFor="userId">User ID:</label>
                              <input type="text" id="userId" name="userId" className="form-control" />
                            </td>
                            <td>
                              <label htmlFor="name">Name:</label>
                              <input type="text" id="name" name="name" className="form-control" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label htmlFor="date">Date:</label>
                              <input type="text" id="date" name="date" className="form-control" />
                            </td>
                            <td>
                              <label htmlFor="designation">Designation/Assignment:</label>
                              <input type="text" id="designation" name="designation" className="form-control" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label htmlFor="gate">Gate:</label>
                              <input type="text" id="gate" name="gate" className="form-control" />
                            </td>
                            <td>
                              <label htmlFor="timeIn">Time In:</label>
                              <input type="text" id="timeIn" name="timeIn" className="form-control" />
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={2}>
                              <label htmlFor="timeOut">Time Out:</label>
                              <input type="text" id="timeOut" name="timeOut" className="form-control" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <MDBBtn color="success">
                        <Link to="/AttendanceList" style={{ color: "white", textDecoration: "none" }}>
                          View Attendance List
                        </Link>
                      </MDBBtn>
                    </MDBContainer>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </div>
      </div>
    </form>
  );
}

export default StartFaceAttendance;
