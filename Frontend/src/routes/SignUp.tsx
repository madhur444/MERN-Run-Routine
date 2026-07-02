import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { useState } from "react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-6">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="/logo-light.png"
            alt="RunRoutine"
            className="w-24 mb-4"
          />

          <h1 className="text-4xl font-extrabold text-white">
            Run<span className="text-emerald-500">Routine</span>
          </h1>

          <p className="text-slate-400 mt-2 text-center">
            Build better habits. Stay consistent every day.
          </p>
        </div>

        {/* Card */}
        <div className="bg-slate-800 rounded-3xl border border-slate-700 p-8 shadow-2xl">

          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Create Account
          </h2>

          {/* Name */}

          <div className="mb-5">
            <label className="text-slate-300 text-sm">
              Full Name
            </label>

            <div className="mt-2 flex items-center bg-slate-900 rounded-xl px-4 border border-slate-700 focus-within:border-emerald-500">
              <User className="text-slate-500 w-5 h-5" />

              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-transparent outline-none px-3 py-4 text-white"
              />
            </div>
          </div>

          {/* Email */}

          <div className="mb-5">
            <label className="text-slate-300 text-sm">
              Email
            </label>

            <div className="mt-2 flex items-center bg-slate-900 rounded-xl px-4 border border-slate-700 focus-within:border-emerald-500">
              <Mail className="text-slate-500 w-5 h-5" />

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent outline-none px-3 py-4 text-white"
              />
            </div>
          </div>

          {/* Password */}

          <div className="mb-6">
            <label className="text-slate-300 text-sm">
              Password
            </label>

            <div className="mt-2 flex items-center bg-slate-900 rounded-xl px-4 border border-slate-700 focus-within:border-emerald-500">
              <Lock className="text-slate-500 w-5 h-5" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full bg-transparent outline-none px-3 py-4 text-white"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="text-slate-500 w-5 h-5" />
                ) : (
                  <Eye className="text-slate-500 w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Button */}

          <button
            className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 transition font-semibold text-white shadow-lg shadow-emerald-500/20"
          >
            Create Account
          </button>

          {/* Divider */}

          <div className="flex items-center my-7">
            <div className="flex-1 border-t border-slate-700"></div>

            <span className="mx-4 text-slate-500 text-sm">
              OR
            </span>

            <div className="flex-1 border-t border-slate-700"></div>
          </div>

          {/* Google */}

          <button
            className="w-full py-4 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-700 transition text-white font-medium"
          >
            Continue with Google
          </button>

          {/* Footer */}

          <p className="text-center mt-8 text-slate-400">
            Already have an account?{" "}
            <span className="text-emerald-500 cursor-pointer hover:underline">
              Log In
            </span>
          </p>

        </div>

      </div>
    </div>
  );
}