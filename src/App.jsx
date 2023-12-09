import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import axios from "axios";

function App() {
  axios.defaults.baseURL = `http://localhost:4000`;
  axios.defaults.withCredentials = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
