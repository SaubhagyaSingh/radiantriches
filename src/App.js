import "./App.css";
import Navbar from "./Components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyFooter from "./Components/MyFooter.jsx";
import Home from "./pages/Home.js";
function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <MyFooter />
    </div>
  );
}

export default App;
