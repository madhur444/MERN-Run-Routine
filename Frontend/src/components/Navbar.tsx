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
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-slate-700 flex justify-around items-center py-4 sm:py-5 px-4 sm:px-10 max-w-3xl mx-auto sm:rounded-t-3xl z-50">
      {navItems.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1.5 transition ${
              isActive ? "text-emerald-500" : "text-slate-500 hover:text-slate-300"
            }`
          }
        >
          <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
          <span className="text-xs sm:text-sm font-medium">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}