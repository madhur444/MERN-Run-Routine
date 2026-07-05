import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const name = localStorage.getItem('name') || 'Runner';

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-center px-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Welcome, {name} 👋</h1>
      <p className="text-slate-400 mb-8">Your Run Routine dashboard</p>
      <button
        onClick={handleLogout}
        className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-xl font-semibold"
      >
        Logout
      </button>
    </div>
  );
}