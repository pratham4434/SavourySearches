import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contextlogin } from "./context/AuthContext";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Contextlogin.Provider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Contextlogin.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
