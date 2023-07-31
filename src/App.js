
import Signup from "./components/signup"
import AdminDashBoard from "./components/AdminDashBoard"
import AdminNotification from "./components/AdminNotification"
import Login from "./components/login"
import ForgotPass from "./components/ForgotPass"
import ForgotPassCode from "./components/ForgotPassCode"
import NewPassword from "./components/NewPassword"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ForgotPass" element={<ForgotPass />} />
          <Route path="/ForgotPassCode" element={<ForgotPassCode />} />
          <Route path="/NewPassword" element={<NewPassword />} />
          <Route path="/AdminDashBoard" element={<AdminDashBoard/>} />
          <Route path="/AdminNotification" element={<AdminNotification/>} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;