import "./App.css";
import { HomePage, LogIn, SignUp } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="font-bold">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/logIn" exact element={<LogIn />} />
        <Route path="/signUp" exact element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
