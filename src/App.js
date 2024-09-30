import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import TapPage from "./pages/tap-page/TapPage";
import UpDePage from "./pages/up-de-page/UpDePage";
import TopPage from "./pages/top-page/TopPage";
import PrUmPage from "./pages/pr-um-page/PrUmPage";
import QuestPage from "./pages/quest-page/QuestPage";
import Speed from "./pages/speed/Speed";
import DvdBox from "./pages/dvd-box/DvdBox";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/*" element={<TapPage />}/>
          <Route path="/upde/*" element={<UpDePage />} />
          <Route path="/top" element={<TopPage />} />
          <Route path="/prum" element={<PrUmPage />} />
          <Route path="/quest" element={<QuestPage />} />
          <Route path="/speed" element={<Speed />} />
          <Route path="/dvd-box" element={<DvdBox />} />
        </Routes>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
