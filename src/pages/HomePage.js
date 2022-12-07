import React, { useState, useEffect } from "react";
import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import { routes } from "../routes";

// pages
import DashboardOverview from "./dashboard/DashboardOverview";
import Transactions from "./Transactions";
import Settings from "./Settings";
import Signin from "./Login/Signin";
import Signup from "./SignUp/Signup";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";
import InputProduct from "./InputProduct";
import InputAgency from "./InputAgency";
import InputCategory from "./InputCategory";
import ProductBE from "./productBE/ProductBE";
import { useDispatch } from "react-redux";
import { getAllCategoryApi } from "../redux/actions/CategoryAction";
import { getAllAgencyApi } from "../redux/actions/AgencyAction";

function RouteWithSidebar() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    await dispatch(getAllCategoryApi());

    await dispatch(getAllAgencyApi());
  };

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
      <Route path={routes.InputAgency.path} element={<InputAgency />} />
      <Route path={routes.InputCategory.path} element={<InputCategory />} />
    </Route>

    {/* <Route path={routes.Signin.path} element={<Signin />} /> */}
    <Route path="/" element={<Signin />} />

    <Route path={routes.Signup.path} element={<Signup />} />
  </Routes>
);
