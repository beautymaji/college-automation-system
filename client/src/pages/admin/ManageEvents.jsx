import useEvents from "../../hooks/useEvents";

export default function ManageEvents() {
  const { events } = useEvents();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Events</h1>
      <ul>
        {events.map((e) => (
          <li key={e.id}>
            📌 {e.title} ({e.type})
          </li>
        ))}
      </ul>
    </div>
  );
}