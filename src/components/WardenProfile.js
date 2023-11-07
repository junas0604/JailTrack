import React, { useState, useEffect, useContext } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBBtn, MDBCardText, MDBTypography } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import WardenSideBar from "../components/WardenSideBar";
import { auth, db } from "../config/firebase";
import UserContext from '../UserContext';
import { updateDoc, doc } from 'firebase/firestore';

function WardenEditProfile() {
    const { user } = useContext(UserContext);
    const [isEditing, setIsEditing] = useState(false);

    const [email, setEmail] = useState(user?.email || "");
    const [name, setName] = useState(`${user?.firstName || ''} ${user?.lastName || ''}`);
    const [address, setAddress] = useState(user?.address || "");
    const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || "");
    const [rank, setRank] = useState(user?.rank || "");
    const [firstName, setFirstname] = useState(user?.firstName || "");
    const [lastName, setLastname] = useState(user?.lastName || "");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const formStyle = {
        fontFamily: "Arial",
    };

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                if (auth.currentUser) {
                    const userId = auth.currentUser.uid;
                    const doc = await db.collection("JailWarden").doc(userId).get();
        
                    if (doc.exists) {
                        const userData = doc.data();
                        alert("Fetched user data:", userData);
        
                        setName(userData.firstName || "");
                        setAddress(userData.address || "");
                        setPhoneNumber(userData.phoneNumber || "");
                        setRank(userData.rank || "");
                        setEmail(userData.email || "");
                    } else {
                        console.log("No user data found!");
                    }
                }
            } catch (error) {
                console.error("Error fetching user data: ", error);
            }
        };
        
        fetchUserData();
    }, []);

    const updateUserData = async () => {
        try {
            if (auth.currentUser) {
                const userId = auth.currentUser.uid;
                const userDocRef = doc(db, 'JailWarden', userId);

                const updatedData = {
                    firstName: firstName,
                    lastName: lastName,
                    address: address,
                    phoneNumber: phoneNumber,
                    email: email,
                    rank: rank,
                };

                await updateDoc(userDocRef, updatedData);

                console.log("User data updated/created successfully!");
            } else {
                console.error("User not authenticated");
            }
        } catch (error) {
            console.error("Error updating user data: ", error);
        }
    };

    const toggleEditing = () => {
        setIsEditing(!isEditing);
    };

    const handleSaveProfile = () => {
        if (password !== confirmPassword) {
            // Passwords do not match, show an error message
            alert("Your password and confirm password do not match");
            return; // Prevent further processing
        }

        setIsEditing(false);
        updateUserData();
    };

    const handleCancelClick = () => {
        navigate("/WardenSettings");
    };

    return (
        <div style={formStyle}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ height: "65px" }}>
                {/* ... */}
            </nav>
            <div style={{ display: "flex", height: "110vh", position: "relative" }}>
                <WardenSideBar />
                <div className="bg-image"
                    style={{
                        position: "sticky",
                        backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.5), rgba(5, 5, 5, 0.5)), url("https://www.bjmp.gov.ph/images/files/107507100_197367938408005_8328798389745902524_o.jpg")`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        flex: 1,
                        padding: "25px",
                    }}
                >
                    <MDBContainer className="my-10 py-10">
                        <MDBCard>
                            <MDBCardBody>
                                <div className="ms-3" style={{ marginTop: '130px', fontFamily: 'Georgina' }}>
                                    {isEditing ? (
                                        <>
                                            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstname(e.target.value)} style={{ marginRight: '5px', marginBottom: '5px' }} />
                                            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastname(e.target.value)} style={{ marginRight: '5px', marginBottom: '5px' }} />
                                            <input type="text" placeholder="Rank" value={rank} onChange={(e) => setRank(e.target.value)} style={{ marginRight: '5px', marginBottom: '5px' }} />
                                            <input type="text" placeholder="Address " value={address} onChange={(e) => setAddress(e.target.value)} style={{ marginRight: '5px' }} />
                                            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginRight: '5px' }} />
                                            <input type="text" placeholder="Phone Number " value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={{ marginRight: '5px' }} />
                                            <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                        </>
                                    ) : (
                                        <>
                                            <MDBTypography tag="h5">{name}</MDBTypography>
                                            <MDBCardText>{address}</MDBCardText>
                                            <MDBCardText>{email}</MDBCardText>
                                            <MDBCardText>{phoneNumber}</MDBCardText>
                                        </>
                                    )}
                                </div>

                                <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa', fontFamily: 'Georgina' }}>
                                    <MDBBtn outline color="dark" style={{ height: '36px', overflow: 'visible' }} onClick={isEditing ? handleSaveProfile : toggleEditing}>
                                        {isEditing ? 'Save Changes' : 'Edit Profile'}
                                    </MDBBtn>
                                </div>

                                <div className="d-flex justify-content-center mt-4">
                                    <MDBBtn color="danger" onClick={handleCancelClick}>
                                        Back
                                    </MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
                </div>
            </div>
        </div>
    );
}

export default WardenEditProfile;
