import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import Starter from "./routes/Starter";
import MyHabits from "./routes/MyHabits";
import History from "./routes/History";
import Profile from "./routes/Profile";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/" element={<Starter/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/habits" element={<MyHabits />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;