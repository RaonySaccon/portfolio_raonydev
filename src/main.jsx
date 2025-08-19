import App from "./App.jsx";
import { NoLayout } from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThemeProvider from "./context/Theme/ThemeProvider.jsx";

import Home from "./routes/Home/Home.jsx";
import Sites from "./routes/Sites/Sites.jsx";

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
  {
    element: <NoLayout />,
    children: [
      {
        path: "/sites",
        element: <Sites />,
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
