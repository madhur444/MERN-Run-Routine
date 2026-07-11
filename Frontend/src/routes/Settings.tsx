import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  Home, ListTodo, Settings as SettingsIcon, Clock, Star, User,
  Bell, Lock, LogOut, Trash2,
} from "lucide-react";

const sidebarItems = [
  { label: "Dashboard", icon: Home, to: "/dashboard" },
  { label: "My Habits", icon: ListTodo, to: "/habits" },
  { label: "Settings", icon: SettingsIcon, to: "/settings" },
  { label: "History", icon: Clock, to: "/history" },
  { label: "Levels", icon: Star, to: "/levels" },
  { label: "Profile", icon: User, to: "/profile" },
];

export default function Settings() {
  const navigate = useNavigate();
  const name = localStorage.getItem("name") || "Runner";
  const [notifications, setNotifications] = useState(true);
  const [reminderTime, setReminderTime] = useState("08:00");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

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
      <main className="flex-1 px-8 py-8 max-w-3xl">

        <div className="mb-8">
          <p className="text-emerald-400 text-sm font-medium">Account</p>
          <h1 className="text-3xl font-bold mt-1">Settings</h1>
        </div>

        <div className="space-y-6">

          {/* Notifications */}
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6">
            <h3 className="font-semibold mb-5 flex items-center gap-2">
              <Bell className="w-5 h-5 text-emerald-400" />
              Notifications
            </h3>

            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-medium text-sm">Habit Reminders</p>
                <p className="text-slate-400 text-xs mt-0.5">Get notified for your daily habits</p>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`w-12 h-7 rounded-full transition relative shrink-0 ${
                  notifications ? "bg-emerald-500" : "bg-slate-700"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-all ${
                    notifications ? "left-6" : "left-1"
                  }`}
                />
              </button>
            </div>

            {notifications && (
              <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                <p className="text-sm text-slate-300">Default reminder time</p>
                <input
                  type="time"
                  value={reminderTime}
                  onChange={(e) => setReminderTime(e.target.value)}
                  className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-white outline-none focus:border-emerald-500"
                />
              </div>
            )}
          </div>

          {/* Account */}
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6">
            <h3 className="font-semibold mb-5 flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-400" />
              Account
            </h3>

            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 transition text-sm">
                Change Password
              </button>
              <button className="w-full text-left px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 transition text-sm">
                Update Email
              </button>
            </div>
          </div>

          {/* Danger zone */}
          <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
            <h3 className="font-semibold mb-5 flex items-center gap-2 text-red-400">
              <Trash2 className="w-5 h-5" />
              Danger Zone
            </h3>

            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition text-sm font-medium mb-3"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>

            <button className="w-full px-4 py-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 transition text-sm font-medium text-red-400">
              Delete Account
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}