import { NavLink, Outlet } from "react-router-dom";
import {
  FaBars,
  FaCalendar,
  FaCalendarAlt,
  FaCartPlus,
  FaComment,
  FaHome,
  FaPeopleArrows,
  FaPhoneAlt,
  FaShoppingBag,
  FaWallet,
} from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { AiFillMessage } from "react-icons/ai";
import UseAdmin from "../hooks/UseAdmin";

const Dashboard = () => {
  const [isAdmin, isAdminLoading] = UseAdmin();
  const buttonClass = "uppercase text-white";
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-start justify-start">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button mx-5 my-8 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
          Open Menu
        </label>
        {/* page content here */}
        <div className="w-full  lg:mx-0">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="drawer-side min-h-full">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 min-h-full items-start bg-[#d39e4f]">
          {/* Sidebar content here */}
          <li>
            <NavLink to="/">
              <span className="font-semibold text-2xl">Bistro Boss</span>
              <p>Restaurant</p>
            </NavLink>
          </li>
          {!isAdminLoading && isAdmin ? (
            <div>
              <li className="w-full my-1">
                <NavLink to="/dashboard/adminHome" className={buttonClass}>
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
              <li className="w-full my-1">
                <NavLink to="/dashboard/additem" className={buttonClass}>
                  <ImSpoonKnife></ImSpoonKnife> Add Items
                </NavLink>
              </li>
              <li className="w-full my-1">
                <NavLink
                  to="/dashboard/adminManageItems"
                  className={buttonClass}
                >
                  <FaBars></FaBars> Manage Items
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink to="/dashboard/showContacts" className={buttonClass}>
                  <AiFillMessage></AiFillMessage>Messages
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink to="/dashboard/users" className={buttonClass}>
                  <FaPeopleArrows></FaPeopleArrows>All Users
                </NavLink>
              </li>
            </div>
          ) : (
            <div>
              <li className="w-full my-1">
                <NavLink to="/dashboard/userHome" className={buttonClass}>
                  <FaHome></FaHome>User Home
                </NavLink>
              </li>
              <li className="w-full my-1">
                <NavLink to="/dashboard/reservation" className={buttonClass}>
                  <FaCalendar></FaCalendar> Reservation
                </NavLink>
              </li>
              <li className="w-full my-1">
                <NavLink to="/dashboard/paymentHistory" className={buttonClass}>
                  <FaWallet></FaWallet>Payment History
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink to="/dashboard/cart" className={buttonClass}>
                  <FaCartPlus></FaCartPlus>My Cart
                </NavLink>
              </li>
              <li className="w-full my-1">
                <NavLink to="/dashboard/addreview" className={buttonClass}>
                  <FaComment></FaComment> Add Review
                </NavLink>
              </li>
              <li className="w-full my-1">
                <NavLink to="/dashboard/booking" className={buttonClass}>
                  <FaCalendarAlt></FaCalendarAlt> My Booking
                </NavLink>
              </li>
            </div>
          )}
          <div className="divider divider-white"></div>
          <li className="w-full my-1">
            <NavLink to="/" className={buttonClass}>
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li className="w-full my-1">
            <NavLink to="/menu" className={buttonClass}>
              <FaBars></FaBars> Menu
            </NavLink>
          </li>
          <li className="w-full my-1">
            <NavLink to="/order/salad" className={buttonClass}>
              <FaShoppingBag></FaShoppingBag> Shop
            </NavLink>
          </li>
          <li className="w-full my-1">
            <NavLink to="/dashboard/contact" className={buttonClass}>
              <FaPhoneAlt></FaPhoneAlt> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
