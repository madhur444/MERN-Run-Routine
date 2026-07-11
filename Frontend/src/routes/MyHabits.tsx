import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home, ListTodo, Settings, Clock, Star, User,
  Plus, Pencil, Trash2, Bell,
} from "lucide-react";
import { NavLink} from "react-router-dom";

type Habit = {
  id: number;
  title: string;
  frequency: string;
  category: string;
  streak: number;
  difficulty: "Easy" | "Medium" | "Hard";
  points: number;
  reminder: string | null;
  progressPct: number;
  emoji: string;
};

const sidebarItems = [
  { label: "Dashboard", icon: Home, to: "/dashboard" },
  { label: "My Habits", icon: ListTodo, to: "/habits" },
  { label: "Settings", icon: Settings, to: "/settings" },
  { label: "History", icon: Clock, to: "/history" },
  { label: "Levels", icon: Star, to: "/levels" },
  { label: "Profile", icon: User, to: "/profile" },
];
const difficultyColor: Record<string, string> = {
  Easy: "bg-emerald-500/20 text-emerald-400",
  Medium: "bg-amber-500/20 text-amber-400",
  Hard: "bg-red-500/20 text-red-400",
};

const categories = ["All", "Fitness", "Mindfulness", "Health", "Learning"];

const initialHabits: Habit[] = [
  { id: 1, title: "Morning Run", frequency: "Daily", category: "Fitness", streak: 14, difficulty: "Hard", points: 80, reminder: "06:00", progressPct: 70, emoji: "🏃" },
  { id: 2, title: "Meditation", frequency: "Daily", category: "Mindfulness", streak: 21, difficulty: "Medium", points: 50, reminder: "07:00", progressPct: 70, emoji: "🧘" },
  { id: 3, title: "Read 30 min", frequency: "Daily", category: "Learning", streak: 7, difficulty: "Easy", points: 30, reminder: "21:00", progressPct: 70, emoji: "📚" },
  { id: 4, title: "Drink 8 Glasses", frequency: "Daily", category: "Health", streak: 30, difficulty: "Easy", points: 20, reminder: "08:00", progressPct: 100, emoji: "💧" },
  { id: 5, title: "Journal", frequency: "Daily", category: "Mindfulness", streak: 5, difficulty: "Easy", points: 25, reminder: "22:00", progressPct: 70, emoji: "✍️" },
  { id: 6, title: "Cold Shower", frequency: "Daily", category: "Fitness", streak: 9, difficulty: "Hard", points: 60, reminder: "07:30", progressPct: 65, emoji: "🚿" },
  { id: 7, title: "No Sugar", frequency: "Weekdays", category: "Health", streak: 3, difficulty: "Medium", points: 40, reminder: null, progressPct: 45, emoji: "🍬" },
];

export default function MyHabits() {
  const navigate = useNavigate();
  const name = localStorage.getItem("name") || "Runner";
  const [habits, setHabits] = useState<Habit[]>(initialHabits);
  const [activeCategory, setActiveCategory] = useState("All");
  const [view, setView] = useState<"List" | "Weekly">("List");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const deleteHabit = (id: number) => {
    setHabits((prev) => prev.filter((h) => h.id !== id));
  };

  const filtered = activeCategory === "All"
    ? habits
    : habits.filter((h) => h.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex">

      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 flex flex-col shrink-0">
        <div className="px-6 py-6">
          <img src="/Logo-Dark.png" alt="RunRoutine" className="h-9" />
        </div>

        <nav className="flex-1 px-4 space-y-1">
  {sidebarItems.map(({ label, icon: Icon, to }) => (
    <NavLink
      key={label}
      to={to}
      className={({ isActive }) =>
        `w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
          isActive
            ? "bg-emerald-500/10 text-emerald-400"
            : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
        }`
      }
    >
      <Icon className="w-5 h-5" />
      {label}
    </NavLink>
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
            <p className="text-emerald-400 text-sm font-medium">Manage</p>
            <h1 className="text-3xl font-bold mt-1">My Habits</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex bg-slate-800 border border-slate-700 rounded-xl p-1">
              {(["List", "Weekly"] as const).map((v) => (
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
            <button className="bg-emerald-500 hover:bg-emerald-600 transition flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm">
              <Plus className="w-4 h-4" />
              Add Habit
            </button>
          </div>
        </div>

        {/* Category filters */}
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-emerald-500 text-white"
                  : "bg-slate-800 border border-slate-700 text-slate-400 hover:text-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-slate-800/40 border border-slate-700 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-4 px-6 py-3 border-b border-slate-700 text-xs font-semibold text-slate-500 tracking-wide">
            <span>HABIT</span>
            <span>STREAK</span>
            <span>DIFFICULTY</span>
            <span>POINTS</span>
            <span>REMINDER</span>
            <span>ACTIONS</span>
          </div>

          {filtered.map((h) => (
            <div
              key={h.id}
              className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-4 px-6 py-4 items-center border-b border-slate-800 last:border-b-0 hover:bg-slate-800/40 transition"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-lg shrink-0">
                  {h.emoji}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold truncate">{h.title}</p>
                  <p className="text-slate-500 text-xs">{h.frequency} · {h.category}</p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 font-semibold">
                  {h.streak} <span>🔥</span>
                </div>
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden mt-1.5">
                  <div
                    className="h-full bg-emerald-500 rounded-full"
                    style={{ width: `${h.progressPct}%` }}
                  />
                </div>
              </div>

              <div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${difficultyColor[h.difficulty]}`}>
                  {h.difficulty}
                </span>
              </div>

              <div className="text-emerald-400 font-semibold">+{h.points} pts</div>

              <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                <Bell className="w-4 h-4" />
                {h.reminder ?? "None"}
              </div>

              <div className="flex items-center gap-2">
                <button className="w-8 h-8 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 flex items-center justify-center transition">
                  <Pencil className="w-4 h-4 text-emerald-400" />
                </button>
                <button
                  onClick={() => deleteHabit(h.id)}
                  className="w-8 h-8 rounded-lg bg-red-500/10 hover:bg-red-500/20 flex items-center justify-center transition"
                >
                  <Trash2 className="w-4 h-4 text-red-400" />
                </button>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="px-6 py-12 text-center text-slate-500">No habits in this category yet.</div>
          )}
        </div>
      </main>
    </div>
  );
}