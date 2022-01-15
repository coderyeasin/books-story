import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Home/Header/Header";
import Home from "./components/Home/Home";
import Chemistry from "./components/Subjects/Chemistry";
import English from "./components/Subjects/English";
import Math from "./components/Subjects/Math";
import Physics from "./components/Subjects/Physics";
import Programming from "./components/Subjects/Programming";
import Update from "./components/Topics/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/math" element={<Math />} />
          <Route path="/english" element={<English />} />
          <Route path="/chemistry" element={<Chemistry />} />
          <Route path="/physics" element={<Physics />} />
          <Route path="/programming" element={<Programming />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
