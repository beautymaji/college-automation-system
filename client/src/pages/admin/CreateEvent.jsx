import { useState } from "react";
import useEvents from "../../hooks/useEvents";

export default function CreateEvent() {
  const { addEvent } = useEvents();
  const [form, setForm] = useState({
    title: "",
    type: "internship",
    deadline: "",
    description: "",
  });

  const submit = () => {
    addEvent(form);
    alert("Event Created");
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-md">
      <h1 className="text-xl font-bold mb-4">Create Event</h1>

      <input
        placeholder="Title"
        className="input"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <select
        className="input"
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option value="internship">Internship</option>
        <option value="hackathon">Hackathon</option>
        <option value="tech">Tech Event</option>
      </select>

      <input
        type="date"
        className="input"
        onChange={(e) => setForm({ ...form, deadline: e.target.value })}
      />

      <textarea
        placeholder="Description"
        className="input"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <button onClick={submit} className="btn bg-purple-600">
        Create
      </button>
    </div>
  );
}