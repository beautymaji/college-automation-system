import useEvents from "../../../hooks/useEvents";

export default function MyEvents() {
  const { appliedEvents } = useEvents();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Applied Events</h1>

      {appliedEvents.length === 0 && (
        <p>No events applied yet.</p>
      )}

      <ul>
        {appliedEvents.map((e) => (
          <li key={e.id} className="mb-2">
            ✅ {e.title}
          </li>
        ))}
      </ul>
    </div>
  );
}