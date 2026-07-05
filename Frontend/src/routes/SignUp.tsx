import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";
import Toast from "../components/Toast";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const handleSubmit = async () => {
  try {
    const res = await API.post('/signup', { name, email, password });
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('name', res.data.name);
    setShowToast(true);
    setTimeout(() => navigate('/dashboard'), 1800); // let toast show before redirect
  } catch (err: any) {
    setError(err.response?.data?.message || err.message);
  }
};
  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-6">
      <Toast message={`Welcome to Run Routine, ${name}! Your account has been created.`} show={showToast} />
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center justify-center mb-2">
          <img src="/Logo-Dark.png" alt="RunRoutine" className="w-38 h-auto object-contain" />
        </div>

        <div className="bg-slate-800 rounded-3xl border border-slate-700 p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Create Account</h2>

          <div className="mb-5">
            <label className="text-slate-300 text-sm">Full Name</label>
            <div className="mt-2 flex items-center bg-slate-900 rounded-xl px-4 border border-slate-700 focus-within:border-emerald-500">
              <User className="text-slate-500 w-5 h-5" />
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent outline-none px-3 py-4 text-white"
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="text-slate-300 text-sm">Email</label>
            <div className="mt-2 flex items-center bg-slate-900 rounded-xl px-4 border border-slate-700 focus-within:border-emerald-500">
              <Mail className="text-slate-500 w-5 h-5" />
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent outline-none px-3 py-4 text-white"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="text-slate-300 text-sm">Password</label>
            <div className="mt-2 flex items-center bg-slate-900 rounded-xl px-4 border border-slate-700 focus-within:border-emerald-500">
              <Lock className="text-slate-500 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent outline-none px-3 py-4 text-white"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff className="text-slate-500 w-5 h-5" /> : <Eye className="text-slate-500 w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 transition font-semibold text-white shadow-lg shadow-emerald-500/20"
          >
            Create Account
          </button>

          <div className="flex items-center my-7">
            <div className="flex-1 border-t border-slate-700"></div>
            <span className="mx-4 text-slate-500 text-sm">OR</span>
            <div className="flex-1 border-t border-slate-700"></div>
          </div>

          <button className="w-full py-4 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-700 transition text-white font-medium">
            Continue with Google
          </button>

          <p className="text-center mt-8 text-slate-400">
            Already have an account?{" "}
            <Link to="/login" className="text-emerald-500 cursor-pointer hover:underline">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}