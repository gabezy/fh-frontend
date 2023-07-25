import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const UserLayoyt = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
};
