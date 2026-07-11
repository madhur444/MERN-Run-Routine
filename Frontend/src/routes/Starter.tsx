import { Link } from "react-router-dom";
import {
  Rocket, Star, ClipboardList, Flame, TrendingUp, Trophy, Bell, ArrowRight, Play,
} from "lucide-react";

const features = [
  { icon: ClipboardList, title: "Write Your Habits", desc: "Create daily, weekly or custom routines with difficulty ratings and point values." },
  { icon: Flame, title: "Track Streaks", desc: "Stay consistent with streak tracking and daily check-ins that keep you accountable." },
  { icon: Star, title: "Earn Points", desc: "Every completed habit earns points based on difficulty. Stack them up to level up." },
  { icon: TrendingUp, title: "See Your History", desc: "Weekly, monthly, and full year heatmaps show exactly how far you've come." },
  { icon: Trophy, title: "Level Up", desc: "Progress from Seedling to Legend with 6 levels and achievement badges to unlock." },
  { icon: Bell, title: "Smart Reminders", desc: "Set custom reminder times per habit so you never miss a day." },
];

const levels = [
  { emoji: "🌱", name: "Seedling", pts: "0–200 pts" },
  { emoji: "🌿", name: "Sprout", pts: "200–500 pts" },
  { emoji: "🌳", name: "Grower", pts: "500–1k pts", active: true },
  { emoji: "⚡", name: "Achiever", pts: "1k–2k pts" },
  { emoji: "🏆", name: "Champion", pts: "2k–4k pts" },
  { emoji: "👑", name: "Legend", pts: "4k+ pts" },
];

const testimonials = [
  { quote: "Run Routine completely transformed how I train. I went from skipping workouts to a 67-day streak.", name: "Sarah K.", role: "Marathon Runner", initial: "S" },
  { quote: "The point system is addictive in the best way. I'm up to Level 5 and still going strong.", name: "James M.", role: "Software Engineer", initial: "J" },
  { quote: "I love being able to see my entire year at a glance. The heatmap is so motivating.", name: "Priya R.", role: "Yoga Instructor", initial: "P" },
];

export default function Starter() {
  return (
    <div className="bg-[#0F172A] text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-slate-800 sticky top-0 bg-[#0F172A]/90 backdrop-blur z-50">
        <img src="/Logo-Dark.png" alt="RunRoutine" className="h-8" />
        <div className="hidden md:flex items-center gap-8 text-slate-300 text-sm font-medium">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#how" className="hover:text-white transition">How It Works</a>
          <a href="#levels" className="hover:text-white transition">Levels</a>
          <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-slate-300 hover:text-white text-sm font-medium">Log In</Link>
          <Link to="/signup" className="bg-emerald-500 hover:bg-emerald-600 transition px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-emerald-500/20">
            Start Free →
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 py-24 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium px-4 py-2 rounded-full mb-8">
          <Rocket className="w-4 h-4" />
          Build habits. Earn rewards. Level up your life.
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6">
          Turn your daily routines <br />
          into <span className="text-emerald-500">achievements</span>
        </h1>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
          Run Routine is a habit tracker that gamifies your daily routine — write your habits, earn points, track streaks, and unlock levels as you grow.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap mb-16">
          <Link
            to="/signup"
            className="bg-emerald-500 hover:bg-emerald-600 transition px-7 py-4 rounded-xl font-semibold shadow-lg shadow-emerald-500/20"
          >
            Get Started Free
          </Link>
          <button className="flex items-center gap-2 bg-slate-800 border border-slate-700 hover:bg-slate-700 transition px-7 py-4 rounded-xl font-semibold">
            <Play className="w-4 h-4" />
            Watch Demo
          </button>
        </div>

        <div className="border-t border-slate-800 pt-10 flex items-center justify-center gap-16 flex-wrap">
          <div>
            <p className="text-3xl font-bold">12,000+</p>
            <p className="text-slate-400 text-sm mt-1">Active Users</p>
          </div>
          <div>
            <p className="text-3xl font-bold">4.9★</p>
            <p className="text-slate-400 text-sm mt-1">App Rating</p>
          </div>
          <div>
            <p className="text-3xl font-bold">68%</p>
            <p className="text-slate-400 text-sm mt-1">Avg Completion Rate</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-slate-900/40 px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-emerald-400 text-sm font-semibold tracking-wide mb-3">EVERYTHING YOU NEED</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Built for people who want results</h2>
        </div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Levels */}
      <section id="levels" className="px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-emerald-400 text-sm font-semibold tracking-wide mb-3">GAMIFICATION SYSTEM</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Six levels. One mission.</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Every habit you complete earns points. Every point pushes you up the ladder.</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {levels.map((lvl) => (
            <div
              key={lvl.name}
              className={`text-center rounded-2xl p-6 border transition ${
                lvl.active
                  ? "bg-emerald-500/10 border-emerald-500/40"
                  : "bg-slate-800/60 border-slate-700"
              }`}
            >
              <div className="text-3xl mb-3">{lvl.emoji}</div>
              <p className={`font-semibold ${lvl.active ? "text-emerald-400" : "text-white"}`}>{lvl.name}</p>
              <p className="text-slate-400 text-xs mt-1">{lvl.pts}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-slate-900/40 px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-emerald-400 text-sm font-semibold tracking-wide mb-3">WHAT USERS SAY</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Loved by habit builders worldwide</h2>
        </div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6">
              <p className="text-slate-300 text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-sm">
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-emerald-500/10 to-slate-900 border border-emerald-500/30 rounded-[2rem] p-14 shadow-2xl">
          <img src="/Logo-Dark.png" alt="RunRoutine" className="h-14 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to build your routine?</h2>
          <p className="text-slate-400 mb-8">Join 12,000+ users who track habits, earn points, and level up every day. Free forever.</p>
          <Link
            to="/signup"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 transition px-8 py-4 rounded-xl font-semibold shadow-lg shadow-emerald-500/30"
          >
            Create Free Account →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-8 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <img src="/Logo-Dark.png" alt="RunRoutine" className="h-6" />
          <span className="text-slate-500 text-sm">© 2026 Run Routine. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6 text-slate-400 text-sm">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Support</a>
        </div>
      </footer>
    </div>
  );
}