import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home, ListTodo, Settings, Clock, Star, User,
} from "lucide-react";

const sidebarItems = [
  { label: "Dashboard", icon: Home, to: "/dashboard" },
  { label: "My Habits", icon: ListTodo, to: "/habits" },
  { label: "Settings", icon: Settings, to: "/settings" },
  { label: "History", icon: Clock, to: "/history" },
  { label: "Levels", icon: Star, to: "/levels" },
  { label: "Profile", icon: User, to: "/profile" },
];

const months = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"];

// Generate 52 weeks x 7 days of mock intensity (0-4)
function generateHeatmap() {
  const weeks: number[][] = [];
  for (let w = 0; w < 52; w++) {
    const week: number[] = [];
    for (let d = 0; d < 7; d++) {
      // bias toward more activity in "recent" months for realism
      const recencyBoost = w > 35 ? 0.3 : 0;
      const rand = Math.random() + recencyBoost;
      week.push(rand > 1.1 ? 4 : rand > 0.85 ? 3 : rand > 0.6 ? 2 : rand > 0.35 ? 1 : 0);
    }
    weeks.push(week);
  }
  return weeks;
}

const intensityColor = [
  "bg-slate-800",
  "bg-emerald-900",
  "bg-emerald-700",
  "bg-emerald-500",
  "bg-emerald-400",
];

const streaks = [
  { emoji: "💧", label: "Water", days: 67, color: "from-sky-400 to-emerald-500" },
  { emoji: "🧘", label: "Meditation", days: 45, color: "from-amber-400 to-emerald-500" },
  { emoji: "📚", label: "Reading", days: 38, color: "from-sky-400 to-sky-500" },
  { emoji: "🏃", label: "Exercise", days: 29, color: "from-red-400 to-emerald-500" },
];

export default function History() {
  const navigate = useNavigate();
  const name = localStorage.getItem("name") || "Runner";
  const [view, setView] = useState<"Heatmap" | "Monthly">("Heatmap");
  const [heatmap] = useState(generateHeatmap());

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const maxStreak = Math.max(...streaks.map((s) => s.days));

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
            <p className="text-emerald-400 text-sm font-medium">Jul 2025 – Jun 2026</p>
            <h1 className="text-3xl font-bold mt-1">Year History</h1>
          </div>
          <div className="flex bg-slate-800 border border-slate-700 rounded-xl p-1">
            {(["Heatmap", "Monthly"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  view === v ? "bg-emerald-500 text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5">
            <p className="text-slate-400 text-sm mb-2">Total Points</p>
            <p className="text-2xl font-bold flex items-center gap-2">⭐ 16,747</p>
          </div>
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5">
            <p className="text-slate-400 text-sm mb-2">Total Habits Done</p>
            <p className="text-2xl font-bold flex items-center gap-2">✅ 989</p>
          </div>
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5">
            <p className="text-slate-400 text-sm mb-2">Best Month</p>
            <p className="text-2xl font-bold flex items-center gap-2">🏆 Apr '26</p>
          </div>
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5">
            <p className="text-slate-400 text-sm mb-2">Best Rate</p>
            <p className="text-2xl font-bold flex items-center gap-2">📈 97%</p>
          </div>
        </div>

        {/* Heatmap + Streaks */}
        <div className="grid lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2 bg-slate-800/60 border border-slate-700 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Activity Heatmap — Jul 2025 to Jun 2026</h3>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                Less
                {intensityColor.map((c, i) => (
                  <div key={i} className={`w-3 h-3 rounded-sm ${c}`} />
                ))}
                More
              </div>
            </div>

            <div className="overflow-x-auto">
              <div className="flex gap-[3px] mb-1 ml-8">
                {months.map((m) => (
                  <span key={m} className="text-xs text-slate-500" style={{ width: "34px" }}>{m}</span>
                ))}
              </div>
              <div className="flex gap-1">
                <div className="flex flex-col gap-[3px] mr-2 text-xs text-slate-500 justify-around">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>
                <div className="flex gap-[3px]">
                  {heatmap.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-[3px]">
                      {week.map((intensity, di) => (
                        <div
                          key={di}
                          className={`w-[10px] h-[10px] rounded-[2px] ${intensityColor[intensity]}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Best Streaks */}
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6">
            <h3 className="font-semibold mb-5">Best Streaks</h3>
            <div className="space-y-5">
              {streaks.map((s) => (
                <div key={s.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="flex items-center gap-2 text-sm">
                      <span>{s.emoji}</span>
                      {s.label}
                    </span>
                    <span className="text-emerald-400 font-semibold text-sm">{s.days} days</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${s.color}`}
                      style={{ width: `${(s.days / maxStreak) * 100}%` }}
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