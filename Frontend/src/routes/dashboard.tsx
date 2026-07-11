import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Home, ListTodo, Calendar, BarChart2, Clock, Star, User,
  Plus, Bell, Check,
} from "lucide-react";

type Habit = {
  id: number;
  title: string;
  category: string;
  streak: number;
  points: number;
  difficulty: "Easy" | "Medium" | "Hard";
  progress: number;
  target: number;
  done: boolean;
  emoji: string;
};

const sidebarItems = [
  { label: "Dashboard", icon: Home, active: true },
  { label: "My Habits", icon: ListTodo },
  { label: "Weekly", icon: Calendar },
  { label: "Monthly", icon: BarChart2 },
  { label: "History", icon: Clock },
  { label: "Levels", icon: Star },
  { label: "Profile", icon: User },
];

const difficultyColor: Record<string, string> = {
  Easy: "bg-emerald-500/20 text-emerald-400",
  Medium: "bg-amber-500/20 text-amber-400",
  Hard: "bg-red-500/20 text-red-400",
};

const weekDays = ["M", "T", "W", "T", "F", "S", "S"];
const weekHeights = [70, 55, 90, 65, 20, 75, 15]; // mock activity levels

export default function Home() {
  const navigate = useNavigate();
  const name = localStorage.getItem("name") || "Runner";

  const [habits, setHabits] = useState<Habit[]>([
    { id: 1, title: "Morning Run", category: "Fitness", streak: 14, points: 80, difficulty: "Hard", progress: 14, target: 20, done: true, emoji: "🏃" },
    { id: 2, title: "Meditation", category: "Mindfulness", streak: 21, points: 50, difficulty: "Medium", progress: 21, target: 30, done: true, emoji: "🧘" },
    { id: 3, title: "Read 30 min", category: "Learning", streak: 7, points: 30, difficulty: "Easy", progress: 7, target: 10, done: true, emoji: "📚" },
    { id: 4, title: "Drink 8 Glasses", category: "Health", streak: 30, points: 20, difficulty: "Easy", progress: 30, target: 30, done: true, emoji: "💧" },
    { id: 5, title: "Journal", category: "Mindfulness", streak: 5, points: 25, difficulty: "Easy", progress: 5, target: 7, done: false, emoji: "✍️" },
    { id: 6, title: "Cold Shower", category: "Fitness", streak: 9, points: 60, difficulty: "Hard", progress: 9, target: 14, done: false, emoji: "🚿" },
    { id: 7, title: "No Sugar", category: "Health", streak: 3, points: 40, difficulty: "Medium", progress: 3, target: 7, done: false, emoji: "🍬" },
  ]);

  const toggleHabit = (id: number) => {
    setHabits((prev) => prev.map((h) => (h.id === id ? { ...h, done: !h.done } : h)));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const doneCount = habits.filter((h) => h.done).length;
  const total = habits.length;
  const pct = Math.round((doneCount / total) * 100);
  const pointsToday = habits.filter((h) => h.done).reduce((s, h) => s + h.points, 0);
  const maxStreak = Math.max(...habits.map((h) => h.streak));

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long", month: "short", day: "numeric", year: "numeric",
  });

  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex">

      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 flex flex-col shrink-0">
        <div className="px-6 py-6">
          <img src="/Logo-Dark.png" alt="RunRoutine" className="h-9" />
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {sidebarItems.map(({ label, icon: Icon, active }) => (
            <button
              key={label}
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

      {/* Main content */}
      <main className="flex-1 px-8 py-8 max-w-7xl">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-emerald-400 text-sm font-medium">{today}</p>
            <h1 className="text-3xl font-bold mt-1">Good morning, {name}! 👋</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-emerald-500 hover:bg-emerald-600 transition flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm">
              <Plus className="w-4 h-4" />
              Add Habit
            </button>
            <button className="w-11 h-11 rounded-xl border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition">
              <Bell className="w-5 h-5 text-slate-300" />
            </button>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5">
            <p className="text-slate-400 text-sm mb-2">Today's Progress</p>
            <p className="text-3xl font-bold text-emerald-400">{pct}%</p>
            <p className="text-slate-500 text-xs mt-1">{doneCount}/{total} habits</p>
          </div>
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5">
            <p className="text-slate-400 text-sm mb-2">Points Earned</p>
            <p className="text-3xl font-bold text-emerald-400">{pointsToday}</p>
            <p className="text-slate-500 text-xs mt-1">today</p>
          </div>
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5">
            <p className="text-slate-400 text-sm mb-2">Current Streak</p>
            <p className="text-3xl font-bold flex items-center gap-2">{maxStreak} 🔥</p>
            <p className="text-slate-500 text-xs mt-1">days in a row</p>
          </div>
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5">
            <p className="text-slate-400 text-sm mb-2">Your Level</p>
            <p className="text-2xl font-bold flex items-center gap-2">Grower 🌳</p>
            <p className="text-slate-500 text-xs mt-1">847 / 1000 pts</p>
          </div>
        </div>

        {/* Content: habits + sidebar widgets */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Habit list */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Today's Habits</h2>
              <span className="bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full">
                {doneCount} done
              </span>
            </div>

            <div className="space-y-3">
              {habits.map((h) => (
                <div
                  key={h.id}
                  className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-lg shrink-0">
                    {h.emoji}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold">{h.title}</span>
                      <span className="bg-slate-700/60 text-slate-300 text-xs px-2 py-0.5 rounded-full">{h.category}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                      <span>🔥 {h.streak} day streak</span>
                      <span>+{h.points} pts</span>
                      <span className={`px-2 py-0.5 rounded-full font-medium ${difficultyColor[h.difficulty]}`}>
                        {h.difficulty}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden mt-2">
                      <div
                        className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(100, (h.progress / h.target) * 100)}%` }}
                      />
                    </div>
                  </div>

                  <span className="text-xs text-slate-500 w-12 text-right shrink-0">
                    {h.progress}/{h.target}
                  </span>

                  <button
                    onClick={() => toggleHabit(h.id)}
                    className={`w-9 h-9 rounded-lg flex items-center justify-center border transition shrink-0 ${
                      h.done ? "bg-emerald-500 border-emerald-500" : "bg-slate-900 border-slate-600 hover:border-slate-500"
                    }`}
                  >
                    {h.done && <Check className="w-5 h-5 text-white" />}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">

            {/* This Week */}
            <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5">
              <h3 className="font-semibold mb-4">This Week</h3>
              <div className="flex items-end justify-between gap-2 h-24 mb-4">
                {weekHeights.map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-slate-900 rounded-md flex items-end h-full overflow-hidden">
                      <div
                        className="w-full bg-emerald-500 rounded-md transition-all duration-500"
                        style={{ height: `${h}%` }}
                      />
                    </div>
                    <span className="text-xs text-slate-500">{weekDays[i]}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-slate-700 pt-3">
                <span className="text-slate-400 text-sm">Week total</span>
                <span className="font-bold text-emerald-400">995 pts</span>
              </div>
            </div>

            {/* Level progress */}
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-emerald-400 text-xs font-semibold">Level 3</p>
                  <p className="font-bold text-lg">Grower</p>
                </div>
                <span className="text-slate-400 text-sm">847/1000</span>
              </div>
              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: "84.7%" }} />
              </div>
              <p className="text-slate-400 text-xs">153 pts to Achiever ⚡</p>
            </div>

            {/* Achievements */}
            <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5">
              <h3 className="font-semibold mb-4">Recent Achievements</h3>
              <div className="space-y-3">
                {[
                  { emoji: "🔥", label: "Week Warrior", pts: 100 },
                  { emoji: "💧", label: "Hydration Hero", pts: 150 },
                  { emoji: "👣", label: "First Step", pts: 10 },
                ].map((a) => (
                  <div key={a.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span>{a.emoji}</span>
                      <span className="text-sm">{a.label}</span>
                    </div>
                    <span className="text-emerald-400 text-sm font-semibold">+{a.pts}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}