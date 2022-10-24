import React, { useEffect, useState } from "react";
import Login from "./LoginForm";
import Signup from "./SignupForm";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  
  return (
    <div>   
      <Routes>
        <Route exact path="/" element={<Signup user={user} setUser={setUser}/>}/>
        <Route exact path="/login" element={<Login user={user} setUser={setUser}/>}/>
        <Route exact path="/home" element={<Home user={user} setUser={setUser}/>}/>
      </Routes>
    </div>
  );
}

export default App;
