import "./App.css";
import LoginButton from "./components/Login";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <div>
        <p>Hello</p>
        <LoginButton />
        <br />
        <LogoutButton />
        <br />
        <Profile />
      </div>
    </>
  );
}

export default App;
