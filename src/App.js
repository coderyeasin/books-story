import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Home from "./components/Home/Home";
import Update from "./components/Topics/Update";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/update/:id" element={<Update />} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
