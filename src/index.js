import React from "react";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
// core styles
import "./scss/volt.scss";

// vendor styles
import "react-datetime/css/react-datetime.css";

import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import store from "./redux/configStore";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover={false}
        theme="dark"
      />
      <ScrollToTop />
      <HomePage />
    </BrowserRouter>
  </Provider>
);

