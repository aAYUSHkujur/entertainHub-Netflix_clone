import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./Firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //login
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //logout
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/profile" element={<ProfileScreen />} />
            <Route exact path="/" index element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
