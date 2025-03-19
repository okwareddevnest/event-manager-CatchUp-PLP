import { useState, useContext } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const CreateEvent = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/events", form);
      alert("Event created successfully!");
      navigate("/");
    } catch (err) {
      alert("Error creating event");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 space-y-4">
      <input
        className="border p-2 w-full"
        name="title"
        placeholder="Event Title"
        onChange={handleChange}
        required
      />
      <textarea
        className="border p-2 w-full"
        name="description"
        placeholder="Event Description"
        onChange={handleChange}
        required
      ></textarea>
      <input
        className="border p-2 w-full"
        type="date"
        name="date"
        onChange={handleChange}
        required
      />
      <input
        className="border p-2 w-full"
        name="location"
        placeholder="Location"
        onChange={handleChange}
        required
      />
      <button className="bg-green-500 text-white p-2 w-full">Create Event</button>
    </form>
  );
};

export default CreateEvent;
