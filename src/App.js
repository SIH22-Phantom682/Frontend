import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import "./App.css";
import AdditionalRoutes from "./AdditionalRoutes";

function App() {
  // const [isloggedIn, setIsLoggedIn] = useState(false);
  // // setIsLoggedIn(true);
  const isloggedIn = true;

  return (
    <>
      {!isloggedIn && (
        <div>
          <Router>
            <Routes>
              {/* Login & Register */}
              <Route exact path="/" element={<Login />} />
              <Route exact path="/register" />
            </Routes>
          </Router>
        </div>
      )}

      {isloggedIn && <AdditionalRoutes />}
    </>
  );
}

export default App;
