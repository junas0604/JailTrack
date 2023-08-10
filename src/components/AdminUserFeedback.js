import React, { useState } from "react";
import { MDBContainer, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import SideBar from "../components/SideBar";

function AdminUserFeedback() {
    const [feedback, setFeedback] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can implement code to send the feedback to your backend
        setSubmitted(true);
        window.alert("Thank you for your Feedback!"); // Show the alert message
    };

    const feedbackFormStyles = {
        maxWidth: '400px',
        margin: '0 auto',
    };

    const labelStyles = {
        display: 'block',
        marginBottom: '10px',
    };

    const textareaStyles = {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        resize: 'vertical',
    };

    const buttonStyles = {
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '4px',
        cursor: 'pointer',
    };



    return (
        <div>
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
                    <MDBContainer fluid className="d-flex align-items-center justify-content-center">
                        <div className='mask gradient-custom-3'>
                            <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                                <MDBCardBody className='px-5 text-center'>
                                    <main style={{ padding: '20px' }}>
                                        <form style={feedbackFormStyles} onSubmit={handleSubmit}>
                                            <label style={labelStyles} htmlFor="feedback">
                                                Your Feedback:
                                            </label>
                                            <textarea
                                                style={textareaStyles}
                                                id="feedback"
                                                rows="4"
                                                value={feedback}
                                                onChange={(e) => setFeedback(e.target.value)}
                                                required
                                            ></textarea>
                                            <button style={buttonStyles} type="submit">
                                                Submit Feedback
                                            </button>
                                        </form>
                                    </main>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    </MDBContainer>
                </div>
            </div>
        </div>
    );
}

export default AdminUserFeedback;
