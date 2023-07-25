import { Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { UserLayoyt } from "./layouts/UserLayoyt";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<UserLayoyt />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};
