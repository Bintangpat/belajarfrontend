import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Import komponen kamu
import App from "./App.tsx";
import SignIn from "./auth/signin.tsx";
import SignUp from "./auth/signup.tsx";
import PaymentSuccess from "./payment/successPayment.tsx";
import SmashBookBooking from "./user/CourtBooking.tsx";
import SmashBookAdminDashboard from "./admin/SmashBookAdminDashboard.tsx";
import SmashBookDashboard from "./user/SmashBookDashboard.tsx";
// 1. Buat konfigurasi router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Halaman utama
  },
  {
    path: "/signin",
    element: <SignIn />, // Halaman Sign In
  },
  {
    path: "/signup",
    element: <SignUp />, // Halaman Sign Up
  },

  {
    path: "/payment/success",
    element: <PaymentSuccess />, // Halaman Test
  },
  {
    path: "/admin/bookingcourt",
    element: <SmashBookBooking />, // Halaman Test
  }, {
    path: "/admin/dashboard",
    element: <SmashBookAdminDashboard />
  },
  {
    path: "/user/dashboard",
    element: <SmashBookDashboard />
  }

]);

// 2. Gunakan RouterProvider di dalam render
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
