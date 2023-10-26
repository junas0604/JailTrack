

import WardenUserFeedback from "./components/WardenUserFeedback"
import WardenAboutUs from "./components/WardenAboutUs"
import WardenProfile from "./components/WardenProfile"
import WardenEditProfile from "./components/WardenEditProfile"
import WardenSettings from "./components/WardenSettings"
import WardenRequestFileChange from "./components/WardenRequestFileChange"
import WardenFileShiftChange from "./components/WardenFileShiftChange"
import WardenAttendanceList from "./components/WardenAttendanceList"
import WardenViewOfficer from "./components/WardenViewOfficer"
import WardenShiftSchedule from "./components/WardenShiftSchedule"
import WardenNotification from "./components/WardenNotification"
import WardenSchedulingSystem from "./components/WardenSchedulingSystem"
import WardenSideBar from "./components/WardenSideBar"
import AdminUserFeedback from "./components/AdminUserFeedback"
import Signup from "./components/Signup"
import WardenDashBoard from "./components/WardenDashBoard"
import WardenSignup from "./components/WardenSignup"
import Settings from "./components/Settings"
import RightFace from "./components/RightFace"
import LeftFace from "./components/LeftFace"
import FrontFace from "./components/FrontFace"
import ScanFace from "./components/ScanFace"
import UploadFaceData from "./components/UploadFaceData"
import StartFaceAttendance from "./components/StartFaceAttendance"
import AttendanceList from "./components/AttendanceList"
import AdminFaceRecog from "./components/AdminFaceRecog"
import AdminViewOfficer from "./components/AdminViewOfficer"
import AdminCreateSched from "./components/AdminCreateSched"
import AdminCreateNewTeam from "./components/AdminCreateNewTeam"
import AdminDashBoard from "./components/AdminDashBoard"
import AdminRequestSchedSystem from "./components/AdminRequestSchedSystem"
import AdminNotification from "./components/AdminNotification"
import Login from "./components/login"
import ForgotPass from "./components/ForgotPass"
import ForgotPassCode from "./components/ForgotPassCode"
import NewPassword from "./components/NewPassword"
import AdminOfficerRequest from "./components/AdminOfficerRequest"
import SideBar from "./components/SideBar"
import ViewFaceData from "./components/ViewFaceData"
import WardenLogin from "./components/WardenLogin"
import AboutUs from "./components/AboutUs"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/WardenUserFeedback" element={<WardenUserFeedback />} />
          <Route path="/WardenAboutUs" element={<WardenAboutUs />} />
          <Route path="/WardenEditProfile" element={<WardenEditProfile />} />
          <Route path="/WardenProfile" element={<WardenProfile />} />
          <Route path="/WardenSettings" element={<WardenSettings />} />
          <Route path="/WardenRequestFileChange" element={<WardenRequestFileChange />} />
          <Route path="/WardenFileShiftChange" element={<WardenFileShiftChange/>} />
          <Route path="/WardenAttendanceList" element={<WardenAttendanceList />} />
          <Route path="/WardenViewOfficer" element={<WardenViewOfficer />} />
          <Route path="/WardenShiftSchedule" element={<WardenShiftSchedule />} />
          <Route path="/WardenNotification" element={<WardenNotification />} />
          <Route path="/WardenSchedulingSystem" element={<WardenSchedulingSystem />} />
          <Route path="/ WardenSideBar" element={< WardenSideBar />} />
          <Route path="/AdminUserFeedback" element={<AdminUserFeedback />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/WardenDashBoard" element={<WardenDashBoard />} />
          <Route path="/WardenSignup" element={<WardenSignup />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/ViewFaceData" element={<ViewFaceData />} />
          <Route path="/WardenLogin" element={<WardenLogin />} />
          <Route path="/RightFace" element={<RightFace />} />
          <Route path="/LeftFace" element={<LeftFace />} />
          <Route path="/FrontFace" element={<FrontFace />} />
          <Route path="/ScanFace" element={<ScanFace />} />
          <Route path="/UploadFaceData" element={<UploadFaceData />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/StartFaceAttendance" element={<StartFaceAttendance />} />
          <Route path="/AttendanceList" element={<AttendanceList />} />
          <Route path="/AdminViewOfficer" element={<AdminViewOfficer />} />
          <Route path="/AdminFaceRecog" element={<AdminFaceRecog />} />
          <Route path="/AdminCreateSched" element={<AdminCreateSched />} />
          <Route path="/AdminCreateNewTeam" element={<AdminCreateNewTeam />} />
          <Route path="/AdminRequestSchedSystem" element={<AdminRequestSchedSystem />} />
          <Route path="/AdminOfficerRequest" element={<AdminOfficerRequest />} />
          <Route path="/ForgotPass" element={<ForgotPass />} />
          <Route path="/ForgotPassCode" element={<ForgotPassCode />} />
          <Route path="/NewPassword" element={<NewPassword />} />
          <Route path="/SideBar" element={<SideBar />} />
          <Route path="/AdminDashBoard" element={<AdminDashBoard />} />
          <Route path="/AdminNotification" element={<AdminNotification />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;