import useAttendance from "../../hooks/useAttendance";
import { useAuth } from "../../context/AuthContext";

export default function Attendance() {
  const { attendance } = useAttendance();
  const { user } = useAuth();

  const data = attendance[user?.name?.toLowerCase()] || {
    present: 0,
    total: 0,
  };

  const percentage =
    data.total === 0 ? 0 : Math.round((data.present / data.total) * 100);

  return (
    <div className="bg-white p-6 rounded shadow max-w-md">
      <h1 className="text-xl font-bold mb-4">My Attendance</h1>

      <p>Total Classes: {data.total}</p>
      <p>Present: {data.present}</p>

      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded">
          <div
            className={`h-4 rounded ${
              percentage >= 75 ? "bg-green-500" : "bg-red-500"
            }`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="mt-1 font-semibold">{percentage}%</p>
      </div>
    </div>
  );
}