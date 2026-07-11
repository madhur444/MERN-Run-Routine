import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home, ListTodo, Calendar, BarChart2, Clock, Star, User, Pencil,
} from "lucide-react";

const sidebarItems = [
  { label: "Dashboard", icon: Home, to: "/dashboard" },
  { label: "My Habits", icon: ListTodo, to: "/habits" },
  { label: "Weekly", icon: Calendar, to: "/weekly" },
  { label: "Monthly", icon: BarChart2, to: "/monthly" },
  { label: "History", icon: Clock, to: "/history" },
  { label: "Levels", icon: Star, to: "/levels" },
  { label: "Profile", icon: User, to: "/profile", active: true },
];

const badges = [
  { emoji: "🔥", label: "Week Warrior", pts: 100, unlocked: true },
  { emoji: "💧", label: "Hydration Hero", pts: 150, unlocked: true },
  { emoji: "👣", label: "First Step", pts: 10, unlocked: true },
  { emoji: "🧘", label: "Mind Master", pts: 200, unlocked: false },
  { emoji: "💪", label: "Iron Will", pts: 300, unlocked: false },
  { emoji: "🎯", label: "Century", pts: 500, unlocked: false },
];

const habitScores = [
  { emoji: "💧", label: "Drink Water", pct: 96, color: "from-sky-400 to-emerald-500" },
  { emoji: "🧘", label: "Meditation", pct: 88, color: "from-amber-400 to-emerald-500" },
  { emoji: "📚", label: "Reading", pct: 82, color: "from-sky-400 to-emerald-500" },
  { emoji: "🏃", label: "Morning Run", pct: 74, color: "from-red-400 to-emerald-500" },
  { emoji: "✍️", label: "Journal", pct: 61, color: "from-amber-400 to-emerald-500" },
  { emoji: "🚿", label: "Cold Shower", pct: 55, color: "from-purple-400 to-emerald-500" },
];

export default function Profile() {
  const navigate = useNavigate();
  const name = localStorage.getItem("name") || "Runner";
  const email = localStorage.getItem("email") || "user@example.com";
  const [tab, setTab] = useState<"Overview" | "Levels" | "Settings">("Overview");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const unlockedCount = badges.filter((b) => b.unlocked).length;

  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex">

      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 flex flex-col shrink-0">
        <div className="px-6 py-6">
          <img src="/Logo-Dark.png" alt="RunRoutine" className="h-9" />
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {sidebarItems.map(({ label, icon: Icon, to, active }) => (
            <button
              key={label}
              onClick={() => navigate(to)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
                active
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
              }`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-800/60 transition"
          >
            <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-sm shrink-0">
              {name.charAt(0).toUpperCase()}
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold">{name}</p>
              <p className="text-xs text-slate-400">Level 3 — Grower</p>
            </div>
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 px-8 py-8 max-w-7xl">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-emerald-400 text-sm font-medium">Account</p>
            <h1 className="text-3xl font-bold mt-1">Profile</h1>
          </div>
          <div className="flex bg-slate-800 border border-slate-700 rounded-xl p-1">
            {(["Overview", "Levels", "Settings"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  tab === t ? "bg-emerald-500 text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Profile card */}
        <div className="bg-gradient-to-br from-emerald-500/10 to-slate-900 border border-emerald-500/20 rounded-3xl p-7 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-emerald-500 flex items-center justify-center font-bold text-3xl">
                  {name.charAt(0).toUpperCase()}
                </div>
                <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center">
                  <Pencil className="w-3.5 h-3.5 text-slate-300" />
                </button>
              </div>
              <div>
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="text-slate-400 text-sm">{email} · Member since Jul 2025</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full">
                    🌳 Level 3 — Grower
                  </span>
                  <div className="w-32 h-1.5 bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: "84.7%" }} />
                  </div>
                  <span className="text-slate-500 text-xs">847/1000</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <p className="text-2xl font-bold">17.8k</p>
                <p className="text-slate-400 text-xs">Total Pts</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold flex items-center gap-1">14 🔥</p>
                <p className="text-slate-400 text-xs">Streak</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">287</p>
                <p className="text-slate-400 text-xs">Done</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{unlockedCount}/{badges.length}</p>
                <p className="text-slate-400 text-xs">Badges</p>
              </div>
            </div>
          </div>
        </div>

        {/* Badges + Scores */}
        <div className="grid lg:grid-cols-2 gap-6">

          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6">
            <h3 className="font-semibold mb-5">Badges ({unlockedCount}/{badges.length})</h3>
            <div className="grid grid-cols-3 gap-4">
              {badges.map((b) => (
                <div
                  key={b.label}
                  className={`text-center rounded-2xl p-5 border transition ${
                    b.unlocked
                      ? "bg-emerald-500/10 border-emerald-500/30"
                      : "bg-slate-900/60 border-slate-800 opacity-50"
                  }`}
                >
                  <div className="text-3xl mb-2">{b.emoji}</div>
                  <p className="text-sm font-semibold">{b.label}</p>
                  <p className="text-xs text-slate-400 mt-0.5">+{b.pts}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6">
            <h3 className="font-semibold mb-5">All-time Habit Scores</h3>
            <div className="space-y-4">
              {habitScores.map((h) => (
                <div key={h.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="flex items-center gap-2 text-sm">
                      <span>{h.emoji}</span>
                      {h.label}
                    </span>
                    <span className="text-emerald-400 font-semibold text-sm">{h.pct}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${h.color}`}
                      style={{ width: `${h.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}