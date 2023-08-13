import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import AddStall from "./pages/AddStall";
import Reel from "./pages/Reel";
import Stall from "./pages/Stall";
function App() {
  const [userEmail, setUserEmail] = useState("");
  const { isAuthenticated, user } = useAuth0();
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem("userEmail", user.email);
    }
  });
  return (
    <>
      <BrowserRouter>
        <AuthContext.Provider value={{ userEmail, setUserEmail }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/reels" element={<Home />} />
            <Route path="/stalls" element={<Home />} />
            <Route path="/addStall" element={<AddStall />} />
            <Route path="/profile/:emailid" element={<Profile />} />
            <Route path="/reel" element={<Reel />} />
            <Route path="/stall" element={<Stall />} />
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
