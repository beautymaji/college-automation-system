import useEvents from "../../../hooks/useEvents";
import Card from "../../../components/ui/Card";

export default function Hackathons() {
  const { events } = useEvents();
  const data = events.filter((e) => e.type === "techevents");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">techevents</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {data.map((e) => (
          <Card key={e.id}>
            <h2 className="font-bold">{e.title}</h2>
          </Card>
        ))}
      </div>
    </div>
  );
}