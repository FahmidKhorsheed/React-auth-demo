import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthProvider from "./state/auth.provider";
import Auth from "./pages/Auth";
import ProtectedRoute from "./pages/ProtectedRoute";
import PublicRoute from "./pages/PublicRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute>
      <App />
      </ProtectedRoute>
      ,
  },
  {
    path: "/auth",
    element: <PublicRoute>
      <Auth />
      </PublicRoute>
      ,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
