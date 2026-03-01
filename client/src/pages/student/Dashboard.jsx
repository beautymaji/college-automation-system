import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-4">
        <Link
          to="/student/attendance"
          className="bg-indigo-600 text-white p-6 rounded"
        >
          📊 Attendance
        </Link>

        <Link
          to="/student/events"
          className="bg-purple-600 text-white p-6 rounded"
        >
          🎯 Events
        </Link>
      </div>
    </div>
  );
}