import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upload from "./components/Upload";
import Json from "./components/Json";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
function App() {
  const [file, setFile] = useState(null);
  const [district, setDistrict] = useState("");
  const handleSignIn = () => {
    // Add logic for successful sign-in
    console.log("Sign-in successful!");
  };

  const handleSignUp = () => {
    // Add logic for successful sign-up
    console.log("Sign-up successful!");
  };

  return (
    <div className="font-Poppins flex justify-center items-center w-full h-screen bg-zinc-900">
      <Router>
        <Routes>
          <Route
            path="/signin"
            element={<SignIn handleSignIn={handleSignIn} />}
          />
          <Route
            path="/signup"
            element={<SignUp handleSignUp={handleSignUp} />}
          />
          <Route
            path="/"
            element={
              <Upload
                district={district}
                setDistrict={setDistrict}
                file={file}
                setFile={setFile}
              />
            }
          />
          <Route
            path="/json"
            element={<Json file={file} setFile={setFile} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
