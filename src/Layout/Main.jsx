import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  // console.log(location);
  const isNavbarFooter =
    location?.pathname.includes("login") ||
    location?.pathname.includes("signup");
  // console.log(isNavbarFooter);

  return (
    <div>
      {isNavbarFooter ? <></> : <Navbar></Navbar>}
      <Outlet></Outlet>
      {isNavbarFooter ? <></> : <Footer></Footer>}
    </div>
  );
};

export default Main;
