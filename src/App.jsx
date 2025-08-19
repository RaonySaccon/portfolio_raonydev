import { Outlet } from "react-router-dom";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export function NoLayout() {
  return <Outlet />;
}
