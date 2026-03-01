import useAttendance from "../../hooks/useAttendance";

const students = [
  { id: "student1", name: "Amit Kumar" },
  { id: "student2", name: "Riya Sharma" },
];

export default function TakeAttendance() {
  const { markAttendance } = useAttendance();

  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Take Attendance</h1>

      {students.map((s) => (
        <div key={s.id} className="flex justify-between mb-2">
          <span>{s.name}</span>
          <div>
            <button
              onClick={() => markAttendance(s.id, true)}
              className="bg-green-500 text-white px-3 py-1 rounded mr-2"
            >
              Present
            </button>
            <button
              onClick={() => markAttendance(s.id, false)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Absent
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}