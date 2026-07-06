import { useNavigate } from "react-router-dom";
import { Flame, Plus, CheckCircle2, Circle } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";

type Habit = {
  id: number;
  title: string;
  streak: number;
  done: boolean;
};

export default function Home() {
  const navigate = useNavigate();
  const name = localStorage.getItem('name') || 'Runner';

  const [habits, setHabits] = useState<Habit[]>([
    { id: 1, title: "Morning Run", streak: 5, done: false },
    { id: 2, title: "Drink 3L Water", streak: 12, done: true },
    { id: 3, title: "Read 20 mins", streak: 2, done: false },
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

  return (
    <div className="min-h-screen bg-[#0F172A] px-6 pb-28 pt-8 text-white sm:pb-8">
      <div className="max-w-md mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-slate-400 text-sm">Welcome back,</p>
            <h1 className="text-2xl font-bold">{name} 👋</h1>
          </div>
          <button
            onClick={handleLogout}
            className="text-slate-400 hover:text-red-400 text-sm border border-slate-700 rounded-lg px-3 py-2"
          >
            Logout
          </button>
        </div>

        {/* Progress Card */}
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 mb-6 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm mb-1">Today's Progress</p>
              <p className="text-3xl font-bold text-emerald-500">
                {completedCount}/{habits.length}
              </p>
            </div>
            <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-xl border border-slate-700">
              <Flame className="text-emerald-500 w-5 h-5" />
              <span className="font-semibold">
                {Math.max(...habits.map((h) => h.streak))} day streak
              </span>
            </div>
          </div>
        </div>

        {/* Habit List */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Today's Habits</h2>
          <button className="flex items-center gap-1 text-emerald-500 text-sm font-medium hover:text-emerald-400">
            <Plus className="w-4 h-4" />
            Add
          </button>
        </div>

        <div className="space-y-3">
          {habits.map((habit) => (
            <div
              key={habit.id}
              onClick={() => toggleHabit(habit.id)}
              className={`flex items-center justify-between bg-slate-800 border rounded-2xl px-5 py-4 cursor-pointer transition ${
                habit.done ? "border-emerald-500/40" : "border-slate-700"
              }`}
            >
              <div className="flex items-center gap-3">
                {habit.done ? (
                  <CheckCircle2 className="text-emerald-500 w-6 h-6" />
                ) : (
                  <Circle className="text-slate-500 w-6 h-6" />
                )}
                <span className={`font-medium ${habit.done ? "text-slate-300 line-through" : "text-white"}`}>
                  {habit.title}
                </span>
              </div>
              <div className="flex items-center gap-1 text-slate-400 text-sm">
                <Flame className="w-4 h-4 text-emerald-500" />
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