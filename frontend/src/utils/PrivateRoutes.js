import { Outlet, Navigate } from "react-router";

const PrivateRoutes = () => {
  let auth = { token: window.localStorage.getItem("token") };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
