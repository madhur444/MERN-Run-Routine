import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;