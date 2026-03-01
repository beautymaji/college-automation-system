import { Link } from "react-router-dom";

export default function FacultyDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Faculty Dashboard</h1>

      <Link
        to="/faculty/attendance"
        className="block bg-green-600 text-white p-4 rounded mb-3"
      >
        Take Attendance
      </Link>

      <Link
        to="/faculty/marks"
        className="block bg-blue-600 text-white p-4 rounded"
      >
        Upload Marks
      </Link>
    </div>
  );
}