import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import api from "../api";
import { AuthContext } from "../context/AuthContext";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await api.get(`/events/${id}`);
        setEvent(res.data);
      } catch {
        alert("Event not found");
        navigate("/");
      }
    };
    fetchEvent();
  }, [id, navigate]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      await api.delete(`/events/${id}`);
      alert("Event deleted");
      navigate("/");
    }
  };

  if (!event) return <p>Loading...</p>;

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <p className="mb-2">{event.description}</p>
      <p className="text-gray-600 mb-2">Location: {event.location}</p>
      <p className="text-gray-600 mb-4">Date: {new Date(event.date).toLocaleDateString()}</p>
      {user && user._id === event.createdBy && (
        <button onClick={handleDelete} className="bg-red-500 text-white p-2 mt-4">
          Delete Event
        </button>
      )}
    </div>
  );
};

export default EventDetails;
