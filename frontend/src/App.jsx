import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import {Contextlogin} from "./context/Contextlogin"
import Home from './pages/Home';
import Reel from './pages/Reel';
function App() {
  return (
   <>
    <BrowserRouter>
    <Contextlogin.Provider>
    <Routes>
      <Route path='/' element={<Reel/>}/>
    </Routes>
 </Contextlogin.Provider>
    </BrowserRouter>
   </>
  );
}

export default App;
