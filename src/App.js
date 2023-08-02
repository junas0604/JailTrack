
import Signup from "./components/signup"
import StartFaceAttendance from "./components/StartFaceAttendance"
import AttendaceList from "./components/AttendaceList"
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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/StartFaceAttendance" element={<StartFaceAttendance />} />
          <Route path="/AttendaceList" element={<AttendaceList />} />
          <Route path="/AdminViewOfficer" element={<AdminViewOfficer />} />
          <Route path="/AdminFaceRecog" element={<AdminFaceRecog/>} />
          <Route path="/AdminCreateSched" element={<AdminCreateSched />} />
          <Route path="/AdminCreateNewTeam" element={<AdminCreateNewTeam />} />
          <Route path="/AdminRequestSchedSystem" element={<AdminRequestSchedSystem />} />
          <Route path="/AdminOfficerRequest" element={<AdminOfficerRequest />} />
          <Route path="/ForgotPass" element={<ForgotPass />} />
          <Route path="/ForgotPassCode" element={<ForgotPassCode />} />
          <Route path="/NewPassword" element={<NewPassword />} />
          <Route path="/SideBar" element={<SideBar />} />
          <Route path="/AdminDashBoard" element={<AdminDashBoard/>} />
          <Route path="/AdminNotification" element={<AdminNotification/>} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;