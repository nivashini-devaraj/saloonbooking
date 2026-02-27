import { Outlet, useLocation } from "react-router-dom";
// import PublicNavbar from "./components/PublicNavbar";
// import PrivateNavbar from "./components/PrivateNavbar";

function Layout() {
  const location = useLocation();

//   const privateRoutes = ["/dashboard"];
  const isPrivate = privateRoutes.includes(location.pathname);

  return (
    <>
      {/* {isPrivate ? <PrivateNavbar /> : <PublicNavbar />}
      <Outlet /> */}
    </>
  );
}

export default Layout;