import { createContext, useState, useEffect } from "react";
import React from 'react'

export const AppContext = createContext(null);

export function AppProvider({ children }) {

  const [user, setUser] = useState(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("Token");
    console.log(token)
    if (token) {
      const userData = JSON.parse(localStorage.getItem("user"))
      setUser(userData)
      setIsLoggedIn(true);
    } else {
      setUser(null)
      setIsLoggedIn(false);
    }
  }, []);

  return <AppContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>{children}</AppContext.Provider>;
}


// fetch(
//   process.env.REACT_APP_API_URL + "/user/profile/",
//   {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   }
// )
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(err.message)); 