import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-6">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="flex flex-col items-center mb-3">
          <img
            src="/Logo-Dark.png"
            alt="RunRoutine"
            className="w-28"
          />

          <p className="text-slate-400  text-center">
            Stay consistent. Achieve your goals.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-slate-800 border border-slate-700 rounded-3xl shadow-2xl p-8">

          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Welcome Back 👋
          </h2>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-slate-300 mb-2">
              Email
            </label>

            <div className="flex items-center bg-slate-900 border border-slate-700 rounded-xl px-4 focus-within:border-emerald-500 transition">
              <Mail className="w-5 h-5 text-slate-500" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none py-4 px-3 text-white placeholder:text-slate-500"
              />
            </div>
          </div>

          {/* Password */}

          <div className="mb-2">
            <div className="flex justify-between mb-2">
              <label className="text-slate-300">
                Password
              </label>

              <a
                href="#"
                className="text-emerald-400 hover:text-emerald-300 text-sm"
              >
                Forgot Password?
              </a>
            </div>

            <div className="flex items-center bg-slate-900 border border-slate-700 rounded-xl px-4 focus-within:border-emerald-500 transition">
              <Lock className="w-5 h-5 text-slate-500" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full bg-transparent outline-none py-4 px-3 text-white placeholder:text-slate-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-slate-500" />
                ) : (
                  <Eye className="w-5 h-5 text-slate-500" />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me */}

          <div className="flex items-center justify-between mt-4 mb-8">
            <label className="flex items-center gap-2 text-slate-300 text-sm cursor-pointer">
              <input
                type="checkbox"
                className="accent-emerald-500"
              />
              Remember Me
            </label>
          </div>

          {/* Login Button */}

          <button className="w-full bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 py-4 rounded-xl text-white font-bold text-lg shadow-lg shadow-emerald-500/20">
            Log In
          </button>

          {/* Divider */}

          <div className="flex items-center my-8">
            <div className="flex-1 border-t border-slate-700"></div>

            <span className="mx-4 text-slate-500 text-sm">
              OR
            </span>

            <div className="flex-1 border-t border-slate-700"></div>
          </div>

          {/* Google */}

          <button className="w-full border border-slate-700 bg-slate-900 hover:bg-slate-700 transition py-4 rounded-xl text-white font-semibold">
            Continue with Google
          </button>

          {/* Footer */}

          <p className="text-center mt-8 text-slate-400">
            Don't have an account?{" "}
            <Link
            to="/SignUp" className="text-emerald-500 cursor-pointer hover:underline">
              SignUp
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
} 