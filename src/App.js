import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import TapPage from "./pages/tap-page/TapPage";
import UpDePage from "./pages/up-de-page/UpDePage";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<TapPage />}/>
          <Route path="/upde/*" element={<UpDePage />} />
        </Routes>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
