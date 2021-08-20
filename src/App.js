import React, { useState, useEffect } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AuthContext from "./components/Store/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const isLoggedInCheck = localStorage.getItem("isLoggedIn");
    if (isLoggedInCheck === "1") {
      setUserName(localStorage.getItem("userName"));
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    localStorage.setItem("userName", email);
    setIsLoggedIn(true);
    setUserName(email);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    setUserName(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        user: userName,
      }}
    >
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home user={userName} onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
