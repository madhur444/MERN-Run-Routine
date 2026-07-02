import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">

      <nav className="flex items-center justify-between px-10 py-6">

        <img
          src="/H-logo dark.png"
          alt="RunRoutine"
          className="w-56"
        />

        <div className="flex gap-8 text-lg">

          <Link to="/">Home</Link>

          <Link to="/signup">Sign Up</Link>

          <Link to="/login">Login</Link>

        </div>

      </nav>

      <section className="flex flex-col items-center justify-center text-center mt-40">

        <h1 className="text-6xl font-bold">
          Build Better
          <span className="text-emerald-500"> Habits</span>
        </h1>

        <p className="mt-6 text-slate-400 max-w-xl">
          Stay consistent, track your progress, and create routines
          that transform your life.
        </p>

        <div className="mt-10 flex gap-5">

          <Link
            to="/signup"
            className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-xl font-semibold"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="border border-slate-600 px-8 py-4 rounded-xl hover:bg-slate-800"
          >
            Login
          </Link>

        </div>

      </section>

    </div>
  );
};

export default Home;