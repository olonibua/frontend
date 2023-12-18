import React, { createContext, useContext, useEffect, useState } from "react";
var UserContext = createContext(undefined);
export var useUserContext = function () {
  var context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
export var UserProvider = function (_a) {
  var children = _a.children;
  var _b = useState(null),
    user = _b[0],
    setUser = _b[1];
  useEffect(function () {
    // Check for a stored user when the component mounts
    var storedUser = localStorage.getItem("loggedUser");
    if (storedUser) {
      var parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);
  var setLoggedInUser = function (loggedUser) {
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    setUser(loggedUser);
  };
  var logoutUser = function () {
    localStorage.removeItem("loggedUser");
    setUser(null);
  };
  var contextValue = {
    user: user,
    setLoggedInUser: setLoggedInUser,
    logoutUser: logoutUser,
  };
  return React.createElement(
    UserContext.Provider,
    { value: contextValue },
    children
  );
};
