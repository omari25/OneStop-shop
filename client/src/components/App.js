import React, { useEffect, useState } from "react";
import Login from "./LoginForm";
import Signup from "./SignupForm";
// import Home from "./Home";
// import { Route, Routes } from "react-router-dom";

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
        <Signup user={user} setUser={setUser}/>
        <Login user={user} setUser={setUser}/>
    </div>
  );
}

export default App;
