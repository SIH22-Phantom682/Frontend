import React, {useContext} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import "./App.css";
import {AppContext} from './context/AppContext'
import AdditionalRoutes from "./AdditionalRoutes";

function App() {
  // const { user, isLoggedIn } = useContext(AppContext);
  // console.log(user && user.role.name, isLoggedIn);
  const isLoggedIn = true;
  return (
    <>
      {!isLoggedIn && (
        <div>
          <Router>
            <Routes>
              {/* Login & Register */}
              <Route  path="/" element={<Login/>}/>
              <Route  path="/register" />
            </Routes>
          </Router>
        </div>
       )}

      {isLoggedIn && <AdditionalRoutes />}
    </>
  );
}

export default App;
