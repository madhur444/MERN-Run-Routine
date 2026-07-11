import { useNavigate } from "react-router-dom";
import { Flame, Plus, CheckCircle2, Circle } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
type Habit = {
  id: number;
  title: string;
  streak: number;
  done: boolean;
  emoji: string;
};

export default function Home() {
  
  const sidebarItems = [
  { label: "Dashboard", icon: Home, to: "/dashboard" },
  { label: "My Habits", icon: ListTodo, to: "/habits" },
  { label: "Weekly", icon: Calendar, to: "/weekly" },
  { label: "Monthly", icon: BarChart2, to: "/monthly" },
  { label: "History", icon: Clock, to: "/history" },
  { label: "Levels", icon: Star, to: "/levels" },
  { label: "Profile", icon: User, to: "/profile" },
];
  const navigate = useNavigate();
  const name = localStorage.getItem('name') || 'Runner';

  const [habits, setHabits] = useState<Habit[]>([
    { id: 1, title: "Morning Run", streak: 5, done: false, emoji: "🏃" },
    { id: 2, title: "Drink 3L Water", streak: 12, done: true, emoji: "💧" },
    { id: 3, title: "Read 20 mins", streak: 2, done: false, emoji: "📖" },
  ]);

  const toggleHabit = (id: number) => {
    setHabits((prev) =>
      prev.map((h) => (h.id === id ? { ...h, done: !h.done } : h))
    );
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const completedCount = habits.filter((h) => h.done).length;
  const total = habits.length;
  const pct = total ? completedCount / total : 0;
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - pct);
  const maxStreak = Math.max(...habits.map((h) => h.streak));

  return (
    
    <div className="min-h-screen bg-[#0F172A] text-white relative overflow-hidden pb-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md sm:max-w-xl lg:max-w-3xl mx-auto relative px-6 sm:px-10 lg:px-14 pt-8 sm:pt-12">

        {/* Logo + Logout */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <img src="/Logo-Dark.png" alt="RunRoutine" className="h-11 sm:h-14 object-contain" />
          <button
            onClick={handleLogout}
            className="text-slate-400 hover:text-red-400 text-sm sm:text-base border border-slate-700 rounded-xl px-4 py-2 sm:px-5 sm:py-2.5 transition"
          >
            Logout
          </button>
        </div>

        {/* Greeting */}
        <div className="mb-7 sm:mb-10">
          <p className="text-slate-400 text-base sm:text-lg">Welcome back,</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{name} 👋</h1>
        </div>

        {/* Progress Card */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-[2rem] p-7 sm:p-10 mb-9 sm:mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 sm:w-56 sm:h-56 bg-emerald-500/10 rounded-full blur-2xl" />

          <div className="flex items-center justify-between relative">
            <div>
              <p className="text-slate-400 text-base sm:text-lg mb-1">Today's Progress</p>
              <p className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                {completedCount}/{total}
              </p>
              <div className="flex items-center gap-2 mt-4 bg-slate-900/60 w-fit px-4 py-2 sm:px-5 sm:py-3 rounded-xl border border-slate-700">
                <Flame className="text-emerald-500 w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-base sm:text-lg font-semibold">{maxStreak} day streak</span>
              </div>
            </div>

            <svg width="120" height="120" className="-rotate-90 sm:w-[150px] sm:h-[150px]">
              <circle cx="60" cy="60" r={radius} stroke="#1e293b" strokeWidth="10" fill="none" />
              <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="url(#gradient)"
                strokeWidth="10"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                className="transition-all duration-700 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Habit List */}
        <div className="flex items-center justify-between mb-5 sm:mb-7">
          <h2 className="text-xl sm:text-2xl font-semibold">Today's Habits</h2>
          <button className="flex items-center gap-1.5 text-emerald-500 text-base sm:text-lg font-medium hover:text-emerald-400 transition">
            <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
            Add
          </button>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {habits.map((habit) => (
            <div
              key={habit.id}
              onClick={() => toggleHabit(habit.id)}
              className={`group flex items-center justify-between bg-slate-800/60 backdrop-blur border rounded-3xl px-6 py-5 sm:px-8 sm:py-6 cursor-pointer transition-all duration-300 hover:bg-slate-800 ${
                habit.done
                  ? "border-emerald-500/40 shadow-lg shadow-emerald-500/5"
                  : "border-slate-700 hover:border-slate-600"
              }`}
            >
              <div className="flex items-center gap-4 sm:gap-5">
                <span className="text-2xl sm:text-3xl">{habit.emoji}</span>
                {habit.done ? (
                  <CheckCircle2 className="text-emerald-500 w-7 h-7 sm:w-8 sm:h-8" />
                ) : (
                  <Circle className="text-slate-500 w-7 h-7 sm:w-8 sm:h-8 group-hover:text-slate-400" />
                )}
                <span className={`font-medium text-lg sm:text-xl transition ${habit.done ? "text-slate-400 line-through" : "text-white"}`}>
                  {habit.title}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400 text-base sm:text-lg">
                <Flame className={`w-5 h-5 sm:w-6 sm:h-6 ${habit.done ? "text-emerald-500" : "text-slate-500"}`} />
                {habit.streak}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Navbar />
    </div>
  );
}