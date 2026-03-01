import { useParams } from "react-router-dom";
import useEvents from "../../../hooks/useEvents";

export default function EventDetails() {
  const { id } = useParams();
  const { events, applyEvent } = useEvents();

  const event = events.find((e) => e.id === Number(id));

  if (!event) return <p>Event not found</p>;

  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold">{event.title}</h1>
      <p className="mt-2">{event.description}</p>
      <button
        onClick={() => applyEvent(event)}
        className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded"
      >
        Apply Now
      </button>
    </div>
  );
}