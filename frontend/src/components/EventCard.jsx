import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">{event.title}</h2>
      <p>{event.description.substring(0, 100)}...</p>
      <p className="text-sm text-gray-600 my-2">Location: {event.location}</p>
      <p className="text-sm text-gray-600">Date: {new Date(event.date).toLocaleDateString()}</p>
      <Link to={`/event/${event._id}`} className="text-blue-500 underline mt-3 inline-block">
        View Details
      </Link>
    </div>
  );
};

export default EventCard;
