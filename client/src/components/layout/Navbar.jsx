import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();
  return (
    <div className="bg-indigo-600 text-white p-4 flex justify-between">
      <h1 className="font-bold">College Automation System</h1>
      <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
        Logout
      </button>
    </div>
  );
}