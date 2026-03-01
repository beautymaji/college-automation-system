import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Sidebar() {
  const { user } = useAuth();

  return (
    <div className="w-64 bg-white shadow-lg p-4">
      <h2 className="font-bold text-lg mb-4 capitalize">{user.role}</h2>

      {user.role === "student" && (
        <NavLink to="/student" className="block mb-2 text-blue-600">
          Dashboard
        </NavLink>
      )}
      {user.role === "faculty" && (
        <NavLink to="/faculty" className="block mb-2 text-green-600">
          Dashboard
        </NavLink>
      )}
      {user.role === "admin" && (
        <NavLink to="/admin" className="block mb-2 text-purple-600">
          Dashboard
        </NavLink>
      )}
    </div>
  );
}