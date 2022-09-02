import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Posts from "./pages/Posts";
import reportWebVitals from "./reportWebVitals";

//Redux
import configureAppStore from "./store";
import { Provider } from "react-redux";

//React router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

const store = configureAppStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts/" element={<Posts />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
