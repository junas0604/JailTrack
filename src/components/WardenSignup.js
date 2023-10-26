import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBBtn,
} from 'mdb-react-ui-kit';
import { auth, db } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, collection, doc, getDocs, where, query } from 'firebase/firestore';

function generateUID() {
    // Generates a random 7-digit UID
    const uid = Math.floor(1000000 + Math.random() * 9000000);
    return uid.toString();
}

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [rank, setRank] = useState('');
    const [address, setAddress] = useState('');
    const [RePassword, setRePassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const CollectionRef = collection(db, "JailWarden");

    async function submit(e) {
        e.preventDefault();

        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage("Invalid email format. Please enter a valid email address.");
            setSuccessMessage("");
            return;
        }

        if (password !== RePassword) {
            setErrorMessage("Password and Confirm Password do not match.");
            setSuccessMessage("");
            return;
        }

        const querySnapshot = await getDocs(
            query(CollectionRef, where("email", "==", email))
        );
        if (!querySnapshot.empty) {
            setErrorMessage("Email already exists. Please use a different email address.");
            setSuccessMessage("");
            return;
        }

        const uid = generateUID(); // Generate a random 7-digit UID

        try {
            await createUserWithEmailAndPassword(auth, email, password);
       
            await setDoc(doc(db, "JailWarden", uid), {
                uid,
                firstName,
                lastName,
                email,
                password,
                phoneNumber,
                rank,
                address,
            });

            console.log('Document successfully written and user registered!');
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setPhoneNumber('');
            setRank('');
            setAddress('');
            setRePassword('');
            setSuccessMessage("Successfully registered!");
        } catch (error) {
            console.error('Error creating account:', error);
            setErrorMessage(error.message);
        }
    }

    const formStyle = {
        fontFamily: 'Arial',
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
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ height: '80px' }}>
                <a className="navbar-brand" href="/">
                    <img src="/JTLOGO.png" alt="login" style={{ height: "110px", width: "150px" }} />
                    <span className="ml-2" style={{ marginTop: '100px', marginLeft: '-15px', fontSize: '35px' }}>JAILTRACK</span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" style={{ marginLeft: '1000px' }}>
                        <li className="nav-item">
                            <a className="nav-link" href="/WardenLogin">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/WardenSignup">Registration</a>
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
                    height: '123vh',
                }}
            >
                <div
                    className="overlay"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        position: 'absolute',
                        top: 80,
                        left: 0,
                        width: '100%',
                        height: '123%',
                    }}
                />

                <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
                    <div className='mask gradient-custom-3'>
                        <MDBCard className='m-5' style={{ maxWidth: '800px' }}>
                            <MDBCardBody className='px-5'>
                                <MDBRow>
                                    <h2 className="text-uppercase text-center mb-5">Create Account</h2>

                                    
                                    <MDBInput wrapperClass="mb-4" label="First Name" size="lg" id="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={solidOutline} />

                                    <MDBInput wrapperClass="mb-4" label="Last Name" size="lg" id="fullName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} style={solidOutline} />

                                    <MDBInput wrapperClass='mb-4' label='Email Address' size='lg' id='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} style={solidOutline} />

                                    <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='phoneNumber' type='text' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={solidOutline} />

                                    <MDBInput wrapperClass='mb-4' label='Rank/Position' size='lg' id='rank' type='text' value={rank} onChange={(e) => setRank(e.target.value)} style={solidOutline} />

                                    <MDBInput wrapperClass='mb-4' label='Address' size='lg' id='address' type='text' value={address} onChange={(e) => setAddress(e.target.value)} style={solidOutline} />

                                    <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} style={solidOutline} />

                                    <MDBInput wrapperClass='mb-4' label='Confirm Password' size='lg' id='RePassword' type='password' value={RePassword} onChange={(e) => setRePassword(e.target.value)} style={solidOutline} />

                                    {successMessage && (
                                        <div className="alert alert-success mt-4">{successMessage}</div>
                                    )}
                                    {errorMessage && (
                                        <div className="alert alert-danger mt-4">{errorMessage}</div>
                                    )}

                                    <MDBBtn className="mb-4" onClick={submit}>
                                        Create Account
                                    </MDBBtn>
                                    <div style={centerText}>
                                        <p>Already have an account? <Link to="/WardenLogin">Login</Link></p>
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
