import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./components/Navbar";
import TodoPage from "./Pages/TodoPage";
import Footer from "./components/Footer";
import GamePage from "./Pages/GamePage";

const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar  />
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/TodoPage" element={<TodoPage />} />
    <Route path="/GamePage" element={<GamePage />} />
    </Routes>
    <Footer  />
    </BrowserRouter>
    </div>
  );
}

export default App;