import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import api from "../api"; // ✅ Import our pre-configured axios instance

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form); // ✅ use `api` instance
      localStorage.setItem("user", JSON.stringify(res.data));
      setUser(res.data);
      navigate("/");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 space-y-4">
      <input
        className="border p-2 w-full"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        className="border p-2 w-full"
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <button className="bg-blue-500 text-white p-2 w-full">Login</button>
    </form>
  );
};

export default Login;
