import "./App.css";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Montado from "./Montado.js";
import App2 from "./componentes/App2";
import App3 from "./componentes/App3";
import App4 from "./componentes/App4";
import App5 from "./componentes/App5";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Montado />
        <Routes>
        <Route path="/home" element={<App2 />} />
        <Route path="/about" element={<App3 />} />
        <Route path="/dashboard" element={<App4 />} />
        <Route path="/header" element={<App5 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
