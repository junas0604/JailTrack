import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import React from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBBtn,
} from 'mdb-react-ui-kit';


function Signup() {

    async function submit(e) {
        e.preventDefault();
    }

    const formStyle = {
        fontFamily: 'Arial'
    };

    const solidOutline = {
        outline: '3px solid #ccc',
        borderRadius: '5px',
    };

    const centerText = {
        display: 'flex',
        justifyContent: 'center',
    };

    return (
        <form style={formStyle}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ height: '65px' }}>
                <a className="navbar-brand" href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/Bureau_of_Jail_Management_and_Penology.png" alt="Logo" width="50" height="50" className="d-inline-block align-top" style={{ marginLeft: '20px' }} />
                    <span className="ml-2" style={{ marginLeft: '20px', fontSize: '30px' }}>JAILTRACK</span>

                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" style={{ marginLeft: '1000px' }}>
                        <li className="nav-item">
                            <a className="nav-link" href="/Login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Signup">Registration</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div
                className="bg-image"
                style={{
                    backgroundImage: `url("https://www.bjmp.gov.ph/images/files/107507100_197367938408005_8328798389745902524_o.jpg")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '120vh',
                }}
            >
                <div
                    className="overlay"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        position: 'absolute',
                        top: 65,
                        left: 0,
                        width: '100%',
                        height: '120%',
                    }}
                />

                <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
                    <div className='mask gradient-custom-3'>
                        <MDBCard className='m-5' style={{ maxWidth: '800px' }}>
                            <MDBCardBody className='px-5'>
                                <MDBRow>
                                    <h2 className="text-uppercase text-center mb-5">Create Account</h2>

                                    <MDBInput
                                        wrapperClass="mb-4"
                                        label="Full Name"
                                        size="lg"
                                        id="name"
                                        type="name"
                                        placeholder="Full Name"
                                        style={solidOutline}
                                    />

                                    <MDBInput
                                        wrapperClass="mb-4"
                                        label="Email Address"
                                        size="lg"
                                        id="email"
                                        type="email"
                                        placeholder="Email Address"
                                        style={solidOutline}
                                    />

                                    <MDBInput
                                        wrapperClass="mb-4"
                                        label="Phone Number"
                                        size="lg"
                                        id="phonenumber"
                                        type="name"
                                        placeholder="Phone Number"
                                        style={solidOutline}
                                    />

                                    <MDBInput
                                        wrapperClass="mb-4"
                                        label="Rank/Position"
                                        size="lg"
                                        id="name"
                                        type="name"
                                        placeholder="Rank/Position"
                                        style={solidOutline}
                                    />

                                    <MDBInput
                                        wrapperClass="mb-4"
                                        label="Password"
                                        size="lg"
                                        id="password"
                                        type="password"
                                        placeholder="Enter Password"
                                        style={solidOutline}
                                    />

                                    <MDBInput
                                        wrapperClass="mb-4"
                                        label="Confirm Password"
                                        size="lg"
                                        id="confirmPassword"
                                        type="password"
                                        placeholder="Confirm Password"
                                        style={solidOutline}
                                    />

                                    <MDBBtn className="mb-4" onClick={submit}>
                                        Create Account
                                    </MDBBtn>

                                    <div style={centerText}>
                                        <p >Already have an account? <Link to="/Login">Login</Link></p>
                                    </div>

                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                </MDBContainer>
            </div>
        </form>
    );
}

export default Signup;
