import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { authContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaCartPlus } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import UseCart from "../../../hooks/UseCart";
import UseAdmin from "../../../hooks/UseAdmin";

const Navbar = () => {
  const [cart] = UseCart();
  const [isAdmin, isAdminLoading] = UseAdmin();
  const { user, LogOut } = useContext(authContext);
  const handleLogOut = () => {
    LogOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Logged Out!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "warning",
          title: error,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  const buttonClassName =
    "focus:btn-outline btn-ghost md:text-white mx-2 my-1 md:my-0";
  const navItems = (
    <>
      <li>
        <NavLink className={buttonClassName} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={buttonClassName} to="/menu">
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink className={buttonClassName} to="/order/salad">
          Our Order
        </NavLink>
      </li>
      <li>
        {!isAdminLoading && isAdmin ? (
          <NavLink className={buttonClassName} to="/dashboard/adminHome">
            <MdAdminPanelSettings /> {"Admin"}
          </NavLink>
        ) : (
          <NavLink className={buttonClassName} to="/dashboard/cart">
            <FaCartPlus />+{cart ? `${cart.length}` : "0"}
          </NavLink>
        )}
      </li>
      {user ? (
        <li>
          <button onClick={handleLogOut} className={buttonClassName}>
            Log out
          </button>
        </li>
      ) : (
        <li>
          <NavLink className={buttonClassName} to="/login">
            Login
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar max-w-screen-xl fixed z-10 bg-black md:text-white lg:text-white opacity-70">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Bistro Boss
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
