import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./components/HomePage";
import MyAccount from "./components/MyAccount";
import Benefits from "./components/Benefits";
import Instructions from "./components/Instructions";
import Tutorials from "./components/Tutorials";
import Forgot from "./components/Forgot";
import Unlock from "./components/Unlock";
import Register from "./components/Register";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/myaccount/forgot" element={<Forgot />} />
        <Route path="/myaccount/unlock" element={<Unlock />} />
        <Route path="/myaccount/register" element={<Register />} />

        <Route path="/benefits" element={<Benefits />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/inst" element={<Instructions />} />
      </Routes>
    </div>
  );
}

export default App;
