import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MDBContainer, MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
         
            console.log("Logged in successfully!");
            navigate("/AdminDashboard");
        } catch (error) {
         
            console.error("Error logging in:", error);
        }
    }

    const formStyle = {
        fontFamily: 'Arial',
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
                <MDBContainer fluid className="d-flex align-items-center justify-content-center">
                    <div className='mask gradient-custom-3'>
                        <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                            <MDBCardBody className='px-5 text-center'>
                                <h2 className="text-uppercase text-center mb-5" style={{ fontWeight: "bold" }}>Login Account</h2>

                                <MDBInput
                                    wrapperClass="mb-4"
                                    label="Email Address"
                                    size="lg"
                                    id="Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                />

                                <MDBInput
                                    wrapperClass="mb-4"
                                    label="Password"
                                    size="lg"
                                    id="Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                />

                                <MDBBtn className="mb-4" onClick={submit}>
                                    Sign in
                                </MDBBtn>

                                <div className="text-center">
                                    <p>
                                        Not a member? <Link to="/signup">Sign up</Link>
                                    </p>
                                </div>
                                <div className="text-center">
                                    <p>
                                     <Link to="/ForgotPass">Forgot Password</Link>
                                    </p>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                </MDBContainer>
            </div>
        </form>
    );
}

export default Login;
