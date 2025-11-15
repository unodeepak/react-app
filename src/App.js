import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Main from "./components/Home/Main";
import Default from "./components/Default/Default";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="*" element={<Default />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
