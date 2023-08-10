import React from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import SideBar from "../components/SideBar";

function FrontFace() {
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
          <MDBContainer className="my-5 py-5" >
                <MDBCard style={{ height: "500px" }}>
                <MDBCardBody>
                    <Link to="/RightFace">
                    <img
                        src="Left.png"
                        alt="Left Face"
                        width="50"
                        height="50"
                        style={{
                        cursor: "pointer",
                        position: "absolute",
                        top: "50%",
                        left: "0",
                        transform: "translateY(-50%)",
                        }}
                    />
                    </Link>

                    <img
                    src="LeftFacePicture.png"
                    alt="Middle Face"
                    width="400"
                    height="400"
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                    />
                   
                </MDBCardBody>
                <h3 style={{marginLeft:"390px", fontWeight:"bold"}}>Position Your Front Face within the Frame </h3>
                </MDBCard>
            </MDBContainer>
        </div>
      </div>
    </form>
  );
}

export default FrontFace;
