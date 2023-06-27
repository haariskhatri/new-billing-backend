import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Navbar } from "./components/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Homepage } from "./pages/Homepage";
import { BillingPage } from "./pages/BillingPage";
import { Loader } from "./components/Loader";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Homepage />,
  },
  {
    path: '/billing',
    element: <BillingPage />
  },
  {
    path: '/loader',
    element: <Loader />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);