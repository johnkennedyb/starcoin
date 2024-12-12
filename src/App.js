import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tap from "./Tap";
import Boost from "./Boost";
import Task from "./Task";
import Stat from "./Stats";
import Ref from "./Ref";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tap />} />
        <Route path="/boost" element={<Boost/>} />
        <Route path="/task" element={<Task />} />
        <Route path="/stat" element={<Stat/>} />
        <Route path="/ref" element={<Ref/>} />




      </Routes>
    </Router>
  );
};

export default App;
