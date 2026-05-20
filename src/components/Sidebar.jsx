import { AiOutlineUser, AiOutlineWarning, AiOutlineLock, AiOutlineStop } from "react-icons/ai"; // Tambah ikon error
import { BiListUl } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2
        ${isActive ? 
          "text-hijau bg-green-200 font-extrabold" : 
          "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`;

  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg"
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span
          id="logo-title"
          className="font-poppins-estrabold text-[48px] text-gray-900"
        >
          Sedap{" "}
          <b id="logo-dot" className="text-hijau">
            .
          </b>
        </span>
        <span id="logo-subtitle" className="font-semibold text-gray-400">
          Modern Admin Dashboard
        </span>
      </div>

      {/* List Menu */}
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          <li>
            <NavLink id="menu-1" to="/" className={menuClass}>
              <MdDashboard className="mr-4 text-xl" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-2" to="/orders" className={menuClass}>
              <BiListUl className="mr-4 text-xl" />
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-3" to="/customers" className={menuClass}>
              <AiOutlineUser className="mr-4 text-xl" />
              Customers
            </NavLink>
          </li>

          {/* --- MENU TESTING ERROR (Sesuai Tugas) --- */}
          <div className="pt-4 pb-2">
            <p className="text-xs font-bold text-gray-400 uppercase px-4">Test Error Pages</p>
          </div>
          <li>
            <NavLink id="menu-400" to="/error-400" className={menuClass}>
              <AiOutlineWarning className="mr-4 text-xl text-orange-500" />
              Error 400
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-401" to="/error-401" className={menuClass}>
              <AiOutlineLock className="mr-4 text-xl text-red-400" />
              Error 401
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-403" to="/error-403" className={menuClass}>
              <AiOutlineStop className="mr-4 text-xl text-red-600" />
              Error 403
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        {/* ... (kode footer kamu tetap sama) ... */}
        <div
          id="footer-card"
          className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center"
        >
          <div id="footer-text" className="text-white text-sm leading-tight">
            <span>Please organize your menus through button below!</span>
            <div
              id="add-menu-button"
              className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2 cursor-pointer"
            >
              <span className="text-gray-600 font-bold">Add Menus</span>
            </div>
          </div>
          <img
            id="footer-avatar"
            src="https://avatar.iran.liara.run/public/28"
            className="w-16 ml-2 rounded-full border-2 border-white"
          />
        </div>
        <span id="footer-brand" className="font-bold text-gray-400 text-xs">
          Sedap Restaurant Admin Dashboard
        </span>
        <p id="footer-copyright" className="font-light text-gray-400 text-xs">
          &copy; 2025 All Right Reserved
        </p>
      </div>
    </div>
  );
}