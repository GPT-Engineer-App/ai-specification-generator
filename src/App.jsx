import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index.jsx";
import Home from "./pages/Home.jsx";
import Event from "./pages/Event.jsx";
import Demo from "./pages/Demo.jsx";
import Login from "./pages/Login.jsx";
import CreateEvent from "./pages/CreateEvent.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/home" element={<Home />} />
        <Route path="/event/:eventId" element={<Event />} />
        <Route path="/demo/:demoId" element={<Demo />} />
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
