import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router.jsx";
import { AuthProvider } from "./Context/AuthContext.js";
import { AlertProvider } from "./Context/AlertContext.jsx";
import { AdminProvider } from "./Context/AdminContext.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <AdminProvider>
        <AlertProvider>
          <RouterProvider router={router} />
        </AlertProvider>
      </AdminProvider>
    </AuthProvider>
  </StrictMode>
);
