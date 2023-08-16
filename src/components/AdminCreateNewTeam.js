import React, { useState, useEffect } from "react";
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import SideBar from "../components/SideBar";
import { db } from "../config/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

function AdminRequestSchedSystem() {
    const formStyle = {
        fontFamily: "Arial",
    };

    const [modalOpen, setModalOpen] = useState(false);
    const [teamName, setTeamName] = useState("");
    const [teamNamesList, setTeamNamesList] = useState([]);
    const [officersList, setOfficersList] = useState([]);
    const [selectedOfficers, setSelectedOfficers] = useState([]);

    const toggleOfficerSelection = (officerId) => {
        if (selectedOfficers.includes(officerId)) {
            setSelectedOfficers(selectedOfficers.filter((id) => id !== officerId));
        } else {
            setSelectedOfficers([...selectedOfficers, officerId]);
        }
    };

    useEffect(() => {
        const fetchOfficers = async () => {
            try {
                const officersCollection = collection(db, "JailOfficer");
                const officersSnapshot = await getDocs(officersCollection);

                const officersData = officersSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    fullName: doc.data().fullName,
                }));

                setOfficersList(officersData);
            } catch (error) {
                console.error("Error fetching officers:", error);
            }
        };

        fetchOfficers();
    }, []);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const handleTeamNameChange = (e) => {
        setTeamName(e.target.value);
    };

    const handleSaveTeam = async () => {
        try {
            const selectedOfficersData = officersList.filter(officer =>
                selectedOfficers.includes(officer.fullName)
            );

            const teamRef = await addDoc(collection(db, "Teams"), {
                teamName,
                officers: selectedOfficersData,
            });

            console.log("Team added with ID: ", teamRef.fullName);

            setTeamNamesList([...teamNamesList, teamName]);
            toggleModal();
        } catch (error) {
            console.error("Error adding team: ", error);
        }
    };

    const handleDeleteTeam = (index) => {
        const updatedTeamNamesList = [...teamNamesList];
        updatedTeamNamesList.splice(index, 1);
        setTeamNamesList(updatedTeamNamesList);
    };

    return (
        <form style={formStyle}>
             <nav
                className="navbar navbar-expand-lg navbar-dark bg-dark"
                style={{ height: "65px" }}
            >
                {/* ... (navbar JSX) */}
            </nav>
            <div style={{ display: "flex", height: "100vh", position: "relative" }}>
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
                    <MDBContainer className="my-10 py-10">
                        <MDBCard>
                            <MDBCardBody>
                                <div style={{ marginTop: "20px", display: "flex", alignItems: "center", cursor: "pointer" }} onClick={toggleModal}>
                                    <FontAwesomeIcon icon={faPlus} style={{ marginRight: "10px" }} />
                                    Create & View Team
                                </div>

                                {teamNamesList.map((team, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            marginTop: "10px",
                                        }}
                                    >
                                        <span style={{ flex: 1 }}>{team}</span>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={() => handleDeleteTeam(index)}
                                        >
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </div>
                                ))}

                                <MDBModal show={modalOpen} onHide={toggleModal}>
                                    <MDBModalHeader
                                        toggle={toggleModal}
                                        className="modal-header"
                                        style={{ backgroundColor: "white" }}
                                    >
                                        Create New Team
                                    </MDBModalHeader>
                                    <MDBModalBody
                                        className="modal-body"
                                        style={{ backgroundColor: "white" }}
                                    >
                                        <div className="form-group">
                                            <label htmlFor="newTeamName">
                                                New Team Name:
                                            </label>
                                            <input
                                                type="text"
                                                id="newTeamName"
                                                className="form-control"
                                                value={teamName}
                                                onChange={handleTeamNameChange}
                                            />
                                        </div>
                                        <div>
                                            <p>Officers:</p>
                                            {officersList.map((officer) => (
                                                <div
                                                    key={officer.fullName}
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        marginBottom: "5px",
                                                    }}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedOfficers.includes(
                                                            officer.fullName
                                                        )}
                                                        onChange={() =>
                                                            toggleOfficerSelection(
                                                                officer.fullName
                                                            )
                                                        }
                                                        style={{ marginRight: "5px" }}
                                                    />
                                                    <label>{officer.fullName}</label>
                                                </div>
                                            ))}
                                        </div>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={handleSaveTeam}
                                        >
                                            Save
                                        </button>
                                    </MDBModalBody>
                                </MDBModal>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
                </div>
            </div>
        </form>
    );
}

export default AdminRequestSchedSystem;
