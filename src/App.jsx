import { ScrollRestoration } from "react-router-dom";

import { Outlet } from "react-router-dom";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export function NoLayout() {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
}
