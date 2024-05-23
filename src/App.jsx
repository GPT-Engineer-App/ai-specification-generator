import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index.jsx";
import Home from "./pages/Home.jsx";
import Event from "./pages/Event.jsx";
import Demo from "./pages/Demo.jsx";
import Login from "./pages/Login.jsx";
import CreateEvent from "./pages/CreateEvent.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(() => {
    // Retrieve login state from localStorage
    const savedState = localStorage.getItem("loggedIn");
    return savedState === "true";
  });

  useEffect(() => {
    // Save login state to localStorage whenever it changes
    localStorage.setItem("loggedIn", loggedIn);
  }, [loggedIn]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/home" element={loggedIn ? <Home /> : <Navigate to="/login" />} />
      <Route path="/event/:eventId" element={loggedIn ? <Event /> : <Navigate to="/login" />} />
      <Route path="/demo/:demoId" element={loggedIn ? <Demo /> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route
          path="/create-event"
          element={loggedIn ? <CreateEvent /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
