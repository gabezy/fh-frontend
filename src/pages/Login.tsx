import React, { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosApi } from "../service/axios";
import { SignIn } from "@phosphor-icons/react";
import { UserContext } from "../context/UserContext";

export const Login = () => {
  const { setId, setUsername } = React.useContext(UserContext);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLogin, setIsLogin] = React.useState(false);

  const navigate = useNavigate();

  const login = async () => {
    const loginData = {
      email,
      password,
    };
    try {
      const resp = await axiosApi.post(
        "/users/login",
        JSON.stringify(loginData)
      );
      if (resp.status === 200) {
        setId(resp.data.id);
        setUsername(resp.data.username);
        setIsLogin(true);
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    login();
  };

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl font-bold mb-5">Fithub</h1>
      <form
        className="flex flex-col gap-2 bg-gray-100 p-10 rounded-sm"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl text-center">Login</h2>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="border-2 border-blue-600"
            required
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="border-2 border-blue-600"
            required
          />
        </div>
        <button
          className="flex justify-center items-center gap-2 bg-blue-700 mt-5 rounded-sm p-2 font-bold text-lg"
          type="submit"
        >
          <SignIn size={32} />
          Login
        </button>
        {isLogin && <h1>successfully login</h1>}
      </form>
      <Link className="text-blue-400 mt-4" to={"/register"}>
        Register Account
      </Link>
    </main>
  );
};
