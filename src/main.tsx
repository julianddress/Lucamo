import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { AlertProvider } from "./Context/AlertContext.jsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
        <AlertProvider>
          <RouterProvider router={router} />
        </AlertProvider>
    </AuthProvider>
  </StrictMode>
);
