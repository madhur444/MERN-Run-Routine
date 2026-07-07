import { Home, Activity, BarChart2, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/dashboard", label: "Home", icon: Home },
  { to: "/track", label: "Track", icon: Activity },
  { to: "/stats", label: "Stats", icon: BarChart2 },
  { to: "/account", label: "Account", icon: User },
];

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-800 border-t border-slate-700 flex justify-around items-center py-3 px-4 sm:static sm:justify-center sm:gap-10 sm:border-t-0 sm:border-b sm:py-4">
      {navItems.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium transition ${
              isActive ? "text-emerald-500" : "text-slate-400 hover:text-slate-200"
            }`
          }
        >
         
    </nav>
  );
}