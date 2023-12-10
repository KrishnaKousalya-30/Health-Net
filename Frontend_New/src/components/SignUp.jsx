import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Sign-up component
const SignUp = ({ onSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignUp = () => {
    // Perform sign-up logic (e.g., send new user data to a server)
    // For simplicity, we'll just log the new user data to the console
    console.log("Signing up with:", email, password);
    if (email == "" || password == "") {
      return;
    }
    navigate("/");

    // You can add user creation logic here and invoke onSignUp callback
    // onSignUp();
  };

  return (
    <div className="max-w-sm mx-auto  p-6 bg-zinc-800 rounded-md shadow-md">
      <h2 className="text-2xl text-center font-semibold text-white mb-4">
        Sign Up
      </h2>
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
        onClick={handleSignUp}
        className="w-full py-2 px-4 bg-white text-zinc rounded-md hover:bg-opacity-75 focus:outline-none"
      >
        Sign Up
      </button>
    </div>
  );
};
export default SignUp;
