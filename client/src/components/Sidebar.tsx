import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaBook,
  FaMoneyBillWave,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-700 text-white flex flex-col">

      {/* Logo */}
      <div className="text-2xl font-bold p-6 border-b border-blue-500">
        🎓 College ERP
      </div>

      {/* Menu */}
      <nav className="flex-1 mt-6">

        <NavLink
          to="/dashboard"
          className="flex items-center gap-3 px-6 py-3 hover:bg-blue-600"
        >
          <FaHome />
          Dashboard
        </NavLink>

        <NavLink
          to="/students"
          className="flex items-center gap-3 px-6 py-3 hover:bg-blue-600"
        >
          <FaUserGraduate />
          Students
        </NavLink>

        <NavLink
          to="/faculty"
          className="flex items-center gap-3 px-6 py-3 hover:bg-blue-600"
        >
          <FaChalkboardTeacher />
          Faculty
        </NavLink>

        <NavLink
          to="/attendance"
          className="flex items-center gap-3 px-6 py-3 hover:bg-blue-600"
        >
          <FaClipboardCheck />
          Attendance
        </NavLink>

        <NavLink
          to="/fees"
          className="flex items-center gap-3 px-6 py-3 hover:bg-blue-600"
        >
          <FaMoneyBillWave />
          Fees
        </NavLink>

        <NavLink
          to="/settings"
          className="flex items-center gap-3 px-6 py-3 hover:bg-blue-600"
        >
          <FaCog />
          Settings
        </NavLink>

      </nav>

      {/* Logout */}
      <div className="p-6 border-t border-blue-500">

        <button className="flex items-center gap-3 hover:text-red-300">
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </div>
  );
}

export default Sidebar;