import { Outlet } from "react-router-dom";
import Header from "./layout/Header/Header";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
