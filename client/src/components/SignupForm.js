import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import pic from "./images/image2.png";

function Signup({ setUser }) {
  // const navigate = useNavigate();

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phoneNumber,
        password: password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {setUser(user); console.log(user.first_name)});
        // navigate("/home");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="h-full w-full flex max-md:flex-col	">
      <div className="w-2/4 max-md:w-full ">
        <img className="w-screen h-screen" src={pic} alt="" />
      </div>

      <div className="w-2/4 max-md:w-full flex justify-center items-center">
        <form className="px-[6vw] signup-form w-full" onSubmit={handleSubmit}>
            {errors.map((err) => (
              <p key={err}>{err}</p> 
            ))}            
            <p className="text-2xl mb-2">Register your acoount</p>
            <p className=" mb-2">Fill in the fields below and submit to register your account</p>
          
          <div className="flex justify-between">
            <div className="w-[45%]">
              <label htmlFor="firstname">Fisrt Name</label>
              <input
                placeholder="John"
                type="text"
                id="firstname"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
              />
            </div>
            <div className="w-[45%]">
              <label htmlFor="lastname">Last Name</label>
              <input
                placeholder="Doe"
                type="text"
                id="lastname"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
              />
            </div>
          </div>

          <div>
          <label htmlFor="Email">Email</label>
            <input
              placeholder="johndoe@info.com"
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
          <label htmlFor="phone-number">Phone number</label>
            <input
              placeholder="+254712345678"
              type="number"
              id="phone-number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              placeholder="Your password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>

          <div>
            <label htmlFor="password_confirmation">Confirm password</label>
            <input
              placeholder="confirm password"
              type="password"
              id="password_confirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              autoComplete="current-password"
            />
          </div>

          <button className="w-full bg-[red] p-3 rounded-md text-white" type="submit">
            Signup
          </button>
          <p className="text-center mt-8">
            Already have an account? <NavLink to="/login" className="text-[blue]">Login</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;