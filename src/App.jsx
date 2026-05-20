import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "./assets/tailwind.css";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import Forgot from "./pages/auth/Forgot";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Loading from "./components/Loading";

// 1. TAMBAHKAN LAZY IMPORT UNTUK LANDING PAGE GUEST
const LandingPage = lazy(() => import("./pages/LandingPage"));

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Orders = lazy(() => import("./pages/Orders"));
const Customers = lazy(() => import("./pages/Customers"));
const ErrorPage = lazy(() => import("./components/ErrorPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* ========================================================= */}
        {/* ROUTE GUEST LANDING PAGE (Tanpa Layout Admin / Auth)     */}
        {/* ========================================================= */}
        <Route path="/guest" element={<LandingPage />} />

        {/* ROUTE ADMIN LAYOUT */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
        </Route>

        {/* ROUTE AUTH LAYOUT */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* ROUTE ERROR HANDLING */}
        <Route
          path="/error-400"
          element={
            <NotFound
              errorCode="400"
              errorTitle="Bad Request"
              errorDescription="Server bingung nih, permintaan kamu gak jelas."
            />
          }
        />

        <Route
          path="*"
          element={<NotFound errorCode="404" errorTitle="Not Found" />}
        />
      </Routes>
    </Suspense>
  );
}

export default App;