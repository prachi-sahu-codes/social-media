import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Landing } from "./pages/landing/Landing";
import { Login } from "./pages/account/Login";
import { Signup } from "./pages/account/SignUp";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Landing </Link> ||
        <Link to="/login"> login </Link> ||
        <Link to="/signup"> signup </Link> ||
        <Link to="/mockman"> mockman</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
