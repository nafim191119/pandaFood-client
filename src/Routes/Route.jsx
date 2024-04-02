import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../Layout/Dashboard";
import AdminRoute from "./AdminRoute";
import AdminUsers from "../Pages/Dashboard/Admin/AdminUsers/AdminUsers";
import AdminAddItem from "../Pages/Dashboard/Admin/AdminAddItem/AdminAddItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import UserPayment from "../Pages/Dashboard/User/UserPayment/UserPayment";
import DashboardCart from "../Pages/Dashboard/User/DashboardCart/DashboardCart";
import DashboardReservation from "./../Pages/Dashboard/User/DashboardReservation/DashboardReservation";
import UserHome from "../Pages/Dashboard/User/UserHome/UserHome";
import AdminHome from "./../Pages/Dashboard/Admin/AdminHome/AdminHome";
import AdminManageAllItem from "../Pages/Dashboard/Admin/AdminManageAllItem/AdminManageAllItem";
import AdminUpdateItem from "../Pages/Dashboard/Admin/AdminUpdateItem/AdminUpdateItem";
import UserContact from "../Pages/Dashboard/User/UserContact/UserContact";
import AdminContacts from "../Pages/Dashboard/Admin/AdminContacts/AdminContacts";
import Error404 from "../Pages/Error404/Error404";
import CardInfo from "../Pages/Shared/CardInfo/CardInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:item",
        element: <Order></Order>,
      },
      {
        path: "/oder/cardInfo/:id",
        element: <CardInfo></CardInfo>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard></Dashboard>
      </ProtectedRoute>
    ),
    children: [
      // user routes
      {
        path: "cart",
        element: <DashboardCart></DashboardCart>,
      },
      {
        path: "reservation",
        element: <DashboardReservation></DashboardReservation>,
      },
      {
        path: "paymentHistory",
        element: <UserPayment></UserPayment>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "contact",
        element: <UserContact></UserContact>,
      },
      {
        path: "addreview",
        element: <DashboardReservation></DashboardReservation>,
      },
      {
        path: "booking",
        element: <DashboardReservation></DashboardReservation>,
      },
      // admin routes
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "adminManageItems",
        element: (
          <AdminRoute>
            <AdminManageAllItem></AdminManageAllItem>
          </AdminRoute>
        ),
      },
      {
        path: "adminItemUpdate/:id",
        element: (
          <AdminRoute>
            <AdminUpdateItem></AdminUpdateItem>
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <AdminUsers></AdminUsers>
          </AdminRoute>
        ),
      },
      {
        path: "additem",
        element: (
          <AdminRoute>
            <AdminAddItem></AdminAddItem>
          </AdminRoute>
        ),
      },
      {
        path: "showContacts",
        element: (
          <AdminRoute>
            <AdminContacts></AdminContacts>
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "/*",
    element: <Error404></Error404>,
  },
]);

export default router;
