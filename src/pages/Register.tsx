import { Lock } from "@phosphor-icons/react";
import React, { FormEvent } from "react";
import { axiosApi } from "../service/axios";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const register = async () => {
    try {
      const userData = JSON.stringify({
        username,
        email,
        password,
      });
      const resp = await axiosApi.post("/users", userData);
      console.log(resp.data);
      if (resp.status === 201) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = (event: FormEvent) => {
    event.preventDefault();
    register();
  };

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl font-bold mb-5">Fithub</h1>
      <form
        className="flex flex-col gap-4 bg-gray-100 p-10"
        onSubmit={handleRegister}
      >
        <h2 className="text-2xl text-center">Sign In</h2>
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="email">Email</label>
          <input
            className="border-2 border-blue-600 rounded-sm"
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="username">username</label>
          <input
            className="border-2 border-blue-600 rounded-sm"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            required
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="password">Password</label>
          <input
            className="border-2 border-blue-600 rounded-sm"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            required
          />
        </div>
        <button
          className="flex items-center justify-center gap-2 bg-blue-700 mt-5 rounded-sm p-2 font-bold text-lg"
          type="submit"
        >
          <Lock size={32} />
          Create Account
        </button>
      </form>
    </main>
  );
};
