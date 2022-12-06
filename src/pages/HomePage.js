import React, { useState, useEffect } from "react";
import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import { routes } from "../routes";

// pages
import DashboardOverview from "./dashboard/DashboardOverview";
import Transactions from "./Transactions";
import Settings from "./Settings";
import Signin from "./Login/Signin";
import Signup from "./SignUp/Signup";
import ForgotPassword from "./examples/ForgotPassword";
import ResetPassword from "./examples/ResetPassword";
import Lock from "./examples/Lock";
import NotFoundPage from "./examples/NotFound";
import ServerError from "./examples/ServerError";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";
import InputProduct from "./InputProduct";
import ProductBE from "./productBE/ProductBE";

function RouteWithSidebar() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader show={loaded ? false : true} />
      <Sidebar />
      <main className="content">
        <Navbar />
        <Outlet />
      </main>
    </>
  );
}

function RouteWithoutSidebar() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader show={loaded ? false : true} />
      <Outlet />
    </>
  );
}

export default () => (
  <Routes>
    {/* <Route path="/" element={<Navigate to={routes.DashboardOverview.path} />} /> */}
    {/* pages */}
    <Route path="/home/*" element={<RouteWithSidebar />}>
      <Route
        path={routes.DashboardOverview.path}
        element={<DashboardOverview />}
      />
      <Route path={routes.Transactions.path} element={<Transactions />} />
      <Route path={routes.AllProductBE.path} element={<ProductBE />} />

      <Route path={routes.Settings.path} element={<Settings />} />
      <Route path={routes.InputProduct.path} element={<InputProduct />} />
    </Route>

    {/* <Route path={routes.Signin.path} element={<Signin />} /> */}
    <Route path="/" element={<Signin />} />

    <Route path={routes.Signup.path} element={<Signup />} />

    {/*Component */}
    {/* <Route path="/" element={<RouteWithoutSidebar />}>
      <Route path={routes.ForgotPassword.path} element={<ForgotPassword />} />
      <Route path={routes.ResetPassword.path} element={<ResetPassword />} />
      <Route path={routes.Lock.path} element={<Lock />} />
      <Route path={routes.NotFound.path} element={<NotFoundPage />} />
      <Route path={routes.ServerError.path} element={<ServerError />} />
    </Route> */}
    {/* <Redirect to={Routes.NotFound.path} /> */}
  </Routes>
);
