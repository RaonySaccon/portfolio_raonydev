import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThemeProvider from "./context/Theme/ThemeProvider.jsx";

import Home from "./routes/Home/Home.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </StrictMode>
);
