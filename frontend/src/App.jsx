import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/Home";
import Reel from "./pages/Reel";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import AddStall from "./pages/AddStall";
function App() {
  const [userEmail, setUserEmail] = useState("");
  console.log(userEmail);
  return (
    <>
      <BrowserRouter>
        <AuthContext.Provider value={{ setUserEmail }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
