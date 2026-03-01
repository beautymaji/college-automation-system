import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { login } = useAuth();

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <button onClick={() => login("student")} className="btn bg-blue-500">
          Login as Student
        </button>
        <button onClick={() => login("faculty")} className="btn bg-green-500">
          Login as Faculty
        </button>
        <button onClick={() => login("admin")} className="btn bg-purple-500">
          Login as Admin
        </button>
      </div>
    </div>
  );
}