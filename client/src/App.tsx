import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/login";
import Dashboard from "./pages/dashboard/dashboard";
import Students from "./pages/students/students";
import Faculty from "./pages/faculty/faculty";
import Attendance from "./pages/attendance/attendance";
import Fees from "./pages/fees/fees";
import Settings from "./pages/settings/settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/students" element={<Students />} />

        <Route path="/faculty" element={<Faculty />} />

        <Route path="/attendance" element={<Attendance />} />

        <Route path="/fees" element={<Fees />} />

        <Route path="/settings" element={<Settings />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;