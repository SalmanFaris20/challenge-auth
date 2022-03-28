import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ListPlayer from "./pages/ListPlayer";
import MenuAppBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listplayer" element={<ListPlayer />} />
      </Routes>
    </div>
  );
}

export default App;
