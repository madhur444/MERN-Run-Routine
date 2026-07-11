import { useNavigate } from "react-router-dom";
import {
  Home, ListTodo, Settings, Clock, Star, User, Quote,
} from "lucide-react";

const sidebarItems = [
  { label: "Dashboard", icon: Home, to: "/dashboard" },
  { label: "My Habits", icon: ListTodo, to: "/habits" },
  { label: "Settings", icon: Settings, to: "/settings" },
  { label: "History", icon: Clock, to: "/history" },
  { label: "Levels", icon: Star, to: "/levels" },
  { label: "Profile", icon: User, to: "/profile" },
];

const levels = [
  { emoji: "🌱", name: "Seedling", min: 0, max: 200 },
  { emoji: "🌿", name: "Sprout", min: 200, max: 500 },
  { emoji: "🌳", name: "Grower", min: 500, max: 1000 },
  { emoji: "⚡", name: "Achiever", min: 1000, max: 2000 },
  { emoji: "🏆", name: "Champion", min: 2000, max: 4000 },
  { emoji: "👑", name: "Legend", min: 4000, max: Infinity },
];

// Mock — will come from user data / backend later
const currentPoints = 847;

// Placeholder quote — swap for a real quotes API later
const motivationalQuote = {
  text: "Small daily improvements are the key to staggering long-term results.",
  author: "James Clear",
};

export default function Levels() {
  const navigate = useNavigate();
  const name = localStorage.getItem("name") || "Runner";

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const currentLevelIndex = levels.findIndex(
    (l) => currentPoints >= l.min && currentPoints < l.max
  );
  const currentLevel = levels[currentLevelIndex];
  const nextLevel = levels[currentLevelIndex + 1];

  const pointsIntoLevel = currentPoints - currentLevel.min;
  const pointsNeededForLevel = currentLevel.max - currentLevel.min;
  const levelPct = Math.min(100, Math.round((pointsIntoLevel / pointsNeededForLevel) * 100));
  const pointsToNext = nextLevel ? nextLevel.min - currentPoints : 0;

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
              <p className="text-xs text-slate-400">{currentLevel.name}</p>
            </div>
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 px-8 py-8 max-w-7xl">

        {/* Header */}
        <div className="mb-6">
          <p className="text-emerald-400 text-sm font-medium">Progress</p>
          <h1 className="text-3xl font-bold mt-1">Levels</h1>
        </div>

        {/* Current level card */}
        <div className="bg-gradient-to-br from-emerald-500/10 to-slate-900 border border-emerald-500/30 rounded-3xl p-8 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-5">
              <div className="text-6xl">{currentLevel.emoji}</div>
              <div>
                <p className="text-emerald-400 text-sm font-semibold">Current Level</p>
                <h2 className="text-3xl font-bold">{currentLevel.name}</h2>
                <p className="text-slate-400 text-sm mt-1">{currentPoints} total points</p>
              </div>
            </div>

            {nextLevel && (
              <div className="text-right min-w-[220px]">
                <p className="text-slate-400 text-sm mb-2">
                  <span className="text-emerald-400 font-semibold">{pointsToNext} pts</span> to {nextLevel.name} {nextLevel.emoji}
                </p>
                <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-700"
                    style={{ width: `${levelPct}%` }}
                  />
                </div>
                <p className="text-slate-500 text-xs mt-1.5">{pointsIntoLevel}/{pointsNeededForLevel} in this level</p>
              </div>
            )}
          </div>
        </div>

        {/* Motivational quote */}
        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-7 mb-8 relative overflow-hidden">
          <Quote className="absolute -top-2 -left-2 w-20 h-20 text-emerald-500/10" />
          <p className="text-lg font-medium italic text-slate-200 relative">
            "{motivationalQuote.text}"
          </p>
          <p className="text-emerald-400 text-sm font-semibold mt-3 relative">
            — {motivationalQuote.author}
          </p>
        </div>

        {/* Level ladder */}
        <h3 className="text-lg font-semibold mb-4">All Levels</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {levels.map((lvl, i) => {
            const isCurrent = i === currentLevelIndex;
            const isUnlocked = i <= currentLevelIndex;
            return (
              <div
                key={lvl.name}
                className={`text-center rounded-2xl p-6 border transition ${
                  isCurrent
                    ? "bg-emerald-500/10 border-emerald-500/40"
                    : isUnlocked
                    ? "bg-slate-800/60 border-slate-700"
                    : "bg-slate-900/60 border-slate-800 opacity-50"
                }`}
              >
                <div className="text-3xl mb-3">{lvl.emoji}</div>
                <p className={`font-semibold ${isCurrent ? "text-emerald-400" : "text-white"}`}>
                  {lvl.name}
                </p>
                <p className="text-slate-400 text-xs mt-1">
                  {lvl.max === Infinity ? `${lvl.min}+ pts` : `${lvl.min}–${lvl.max} pts`}
                </p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}