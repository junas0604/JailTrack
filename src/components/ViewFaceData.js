import React from "react";
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBBtn,
} from "mdb-react-ui-kit";
import SideBar from "../components/SideBar";

function ViewFaceData() {

    const formStyle = {
        fontFamily: "Arial",
    };

    return (
        <form style={formStyle}>
            {/* ... Your navbar code ... */}

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
                    <MDBContainer className="my-5 py-5">
                        <MDBCard>
                            <MDBCardBody>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div style={{ flex: 1 }}>
                                        <h4>Face Data</h4>
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
                                            <label>Left Face</label>
                                            <img
                                                src="l.png"
                                                alt="Left Angle"
                                                style={{ maxWidth: "150px", marginBottom: "10px" }}
                                            />
                                            <label>Right Face</label>
                                            <img
                                                src="r.png"
                                                alt="Right Angle"
                                                style={{ maxWidth: "150px", marginBottom: "10px" }}
                                            />
                                            <label>Front Face</label>
                                            <img
                                                src="f.png"
                                                alt="Front Angle"
                                                style={{ maxWidth: "155px" }}
                                            />
                                        </div>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ marginBottom: "20px" }}>
                                            <h4>User ID</h4>
                                            <MDBInput type="text" value="12345" readOnly />
                                        </div>
                                        <div style={{ marginBottom: "20px" }}>
                                            <h4>Full Name</h4>
                                            <MDBInput type="text" value="John Doe" readOnly />
                                        </div>
                                        <div style={{ marginBottom: "20px" }}>
                                            <h4>Officer Rank</h4>
                                            <MDBInput type="text" value="Jail Officer 1" readOnly />
                                        </div>
                                        <div style={{ marginBottom: "20px" }}>
                                            <h4>Email Address</h4>
                                            <MDBInput type="text" value="john@gmail.com" readOnly />
                                        </div>
                                        <div style={{ marginBottom: "20px" }}>
                                            <h4>Contact Number</h4>
                                            <MDBInput type="text" value="+639568452121" readOnly />
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                            <MDBBtn color="danger">Delete Facial Data</MDBBtn>
                                            <MDBBtn color="success">Done</MDBBtn>
                                        </div>
                                        
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

export default ViewFaceData;
