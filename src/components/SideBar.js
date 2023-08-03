import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";


function Sidebar() {
    return (
        <div
            style={{
                position: "sticky",
                top: "65px",
                left: 0,
                height: "100%",
                width: "360px",
                backgroundColor: "#0B0C13", 
                color: "#fff",
                padding: "20px",
                fontSize: "23px",
            }}
        >
            <ul style={{ listStyleType: "none", padding: 0 }}>
                <li style={{ marginBottom: "20px" }}>
                  
                    <Link to="/AdminDashboard" style={{ textDecoration: "none", color: "white" }}>
                        <img src="/dashboard.png" alt="Dashboard" style={{ marginRight: "10px", height: "25px", width: "25px" }} />
                        Dashboard
                    </Link>
                </li>

                <li style={{ marginBottom: "20px" }}>
                   
                    <Link to="/AdminNotification" style={{ textDecoration: "none", color: "white" }}>
                        <img src="/bell.png" alt="Notifications" style={{ marginRight: "10px", height: "25px", width: "25px" }} />
                        Notifications
                    </Link>
                </li>
                
                <li style={{ marginBottom: "20px" }}>
                  
                    <Link to="/AdminRequestSchedSystem" style={{ textDecoration: "none", color: "white" }}>
                        <img src="/calendar.png" alt="Scheduling System" style={{ marginRight: "10px", height: "25px", width: "25px" }} />
                        Scheduling System
                    </Link>
                </li>
                <li style={{ marginBottom: "20px" }}>
                   
                    <Link to="/AdminFaceRecog" style={{ textDecoration: "none", color: "white" }}>
                        <img src="/FaceRecog.png" alt="Face Recognition" style={{ marginRight: "10px", height: "25px", width: "25px" }} />
                        Face Recognition
                    </Link>
                </li>
                <li style={{ marginBottom: "20px" }}>
                  
                    <Link to="/AdminViewOfficer" style={{ textDecoration: "none", color: "white" }}>
                        <img src="/policeman.png" alt="View Officers" style={{ marginRight: "10px", height: "25px", width: "25px" }} />
                        View Officers
                    </Link>
                </li>
                <li style={{ marginBottom: "20px" }}>
                    <Link to="/AdminOfficerRequest" style={{ textDecoration: "none", color: "white" }}>
                        <img src="/request.png" alt="Officer Request" style={{ marginRight: "10px", height: "25px", width: "25px" }} />
                        Officer Request
                    </Link>
                </li>
                <li style={{ marginBottom: "20px" }}>
                  
                    <Link to="/AttendanceList" style={{ textDecoration: "none", color: "white" }}>
                        <img src="/attendance.png" alt="Attendance" style={{ marginRight: "10px", height: "25px", width: "25px" }} />
                        Attendance List
                    </Link>
                </li>
                <li style={{ marginBottom: "20px" }}>
                    <Link to="/Settings" style={{ textDecoration: "none", color: "white" }}>
                        <FontAwesomeIcon icon={faGear} style={{ marginRight: "10px" }} />Settings
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
