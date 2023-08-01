import React from "react";
import { MDBContainer, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import SideBar from "../components/SideBar";

function AdminCreateSched() {
  const formStyle = {
    fontFamily: "Arial",
  };

  const getCurrentMonthAndYear = () => {
    const date = new Date();
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const year = date.toLocaleDateString("en-US", { year: "numeric" });
    return `${month} ${year}`;
  };

  return (
    <form style={formStyle}>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ height: "65px" }}
      >
        {/* ... Your Navbar Content ... */}
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
            justifyContent: "flex-start", // Align elements at the top
            alignItems: "center",
          }}
        >
          <MDBContainer className="my-5 py-5">
            <MDBCard>
              <MDBCardBody>
                {/* Container for buttons and real-time Month and Year */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {/* Button: Auto Shift Options */}
                  <button
                    style={{
                      background: "#E97912",
                      padding: "10px 20px",
                      color: "white",
                      border: "none",
                      margin: "10px",
                    }}
                  >
                    Auto Shift Options
                  </button>
                  {/* Container for the real-time Month and Year */}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {/* Display your real-time Month and Year here */}
                    <span style={{ marginRight: "10px", fontSize: "18px" }}>
                      {getCurrentMonthAndYear()}
                    </span>
                    {/* Button: PUBLISH & NOTIFY */}
                    <button
                      style={{
                        background: "#5A8C5A",
                        padding: "10px 20px",
                        color: "white",
                        border: "none",
                      }}
                    >
                      PUBLISH & NOTIFY
                    </button>
                  </div>
                </div>
                {/* Add your card body content here */}
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </div>
      </div>
    </form>
  );
}

export default AdminCreateSched;
