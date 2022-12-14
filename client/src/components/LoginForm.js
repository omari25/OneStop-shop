import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import pic from "./images/login1.jpg";

function Login({ setUser }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {setUser(user)});
        navigate("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
    <div className="h-full w-full flex max-md:flex-col mb-10">
        <div className="w-2/4 max-md:w-full">
            <img className="w-full " src={pic} alt="" />
        </div>
        <div className="w-2/4 max-md:w-full flex justify-center items-center">
            <form onSubmit={handleSubmit} className="px-[6vw] signup-form w-full">
                {errors.map((err) => (
                    <p className="text-[red]" key={err}>{err}</p>
                ))}
                <p className="text-2xl mb-2">Welcome</p>
                <p className=" mb-2">Login to continue</p>

                <div>
                    <label htmlFor="Email">Email</label>
                    <input
                    placeholder="johndoe@info.com"
                    type="text" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                    placeholder="Your password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    />
                </div>
                <button className="w-full bg-[red] p-3 rounded-md text-white" type="submit">Login</button>
                <p className="text-center mt-8">Don't have an account? <NavLink to="/signup" className="text-[blue]">Signup</NavLink></p>
            </form>
        </div>
    </div>
    <Footer/>
    </>
  );
}

export default Login;