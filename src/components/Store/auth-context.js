import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  user: null,
});

export default AuthContext;
