import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route />
        </Routes>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
