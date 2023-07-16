import "./App.css";
import { HomePage, LogIn, SignUp } from "./pages";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAuthData } from "./store/slices/auth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const data = localStorage.getItem("auth_online_compiler");
    if (data) {
      const parseData = JSON.parse(data);
      dispatch(
        setAuthData({
          user: parseData.user,
          token: parseData.token,
        })
      );
    }
  }, []);
  return (
    <div className="font-bold">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" exact element={<LogIn />} />
        <Route path="/signup" exact element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
