import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Sign-in component
const SignIn = ({ onSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignIn = () => {
    // Perform sign-in logic (e.g., send credentials to a server)
    // For simplicity, we'll just log the credentials to the console
    console.log("Signing in with:", email, password);
    console.log("Signing up with:", email, password);
    if (email == "" || password == "") {
      return;
    }
    navigate("/");
    // You can add authentication logic here and invoke onSignIn callback
    // onSignIn();
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-zinc-800 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-white mb-4">Sign In</h2>
      <label className="text-white">Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-4 rounded-md bg-white text-zinc placeholder-zinc focus:outline-none"
      />
      <label className="text-white">Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 rounded-md bg-white text-zinc placeholder-zinc focus:outline-none"
      />
      <button
        onClick={handleSignIn}
        className="w-full py-2 px-4 bg-white text-zinc rounded-md hover:bg-opacity-75 focus:outline-none"
      >
        Sign In
      </button>
    </div>
  );
};
export default SignIn;
