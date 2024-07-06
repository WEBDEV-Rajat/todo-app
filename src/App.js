import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./pages/Home/Home"
import { MainPage } from "./pages/Main Page/MainPage"
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main-page" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App;



