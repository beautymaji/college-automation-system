import Card from "../../../components/ui/Card";
import CountdownTimer from "../../../components/common/CountdownTimer";
import useEvents from "../../../hooks/useEvents";
import { Link } from "react-router-dom";

export default function AllEvents() {
  const { events } = useEvents();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Events</h1>

      <div className="grid md:grid-cols-3 gap-4">
        {events.map((event) => (
          <Card key={event.id}>
            <h2 className="font-bold text-lg">{event.title}</h2>
            <p className="text-sm capitalize">{event.type}</p>
            <CountdownTimer deadline={event.deadline} />
            <Link
              to={`/student/events/${event.id}`}
              className="block mt-2 text-indigo-600"
            >
              View Details →
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}