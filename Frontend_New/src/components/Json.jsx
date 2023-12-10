import React from "react";
import JsonData1 from "./Json/M1.json";
import JsonData2 from "./Json/M2.json";
import JsonData3 from "./Json/M3.json";

const Dashboard = ({ file, setFile }) => {
  let jsonData;
  console.log(file);
  const fileName = file.name.split(".")[0];
  console.log(fileName);
  // Determine which JSON data to display based on the file name
  if (fileName === "M1") {
    console.log("Hi");
    jsonData = JsonData1;
  } else if (fileName === "M2") {
    jsonData = JsonData2;
  } else if (fileName === "M3") {
    jsonData = JsonData3;
  } else {
    // Handle the case where the file name doesn't match any expected values
    console.warn(`No JSON data found for file: ${file}`);
    // You can set a default value or handle it based on your requirements
    jsonData = {}; // Empty object in this example
  }

  // Render the JSON data or other components based on your requirements
  return (
    <div className="text-gray-100  gap-5 bg-zinc-900 w-full h-screen flex justify-center items-center flex-col">
      <h1 className="font-bold text-5xl flex items-center gap-2">
        Scheme Details
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
          />
        </svg>
      </h1>
      <div className="bg-zinc-700 p-10 rounded font-medium">
        <p>
          <span className="text-zinc-950 mr-2 ">Hospital</span>
          {jsonData[0].Hospital}
        </p>
        <p>
          <span className="text-zinc-950 mr-2 ">Insurance </span>
          {jsonData[0].Insurance_Amount} Rs
        </p>
        <p>
          <span className="text-zinc-950 mr-2 ">Location</span>
          {jsonData[0].Location}
        </p>
        <p>
          <span className="text-zinc-950 mr-2 ">Operation</span>
          {jsonData[0].Operation}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
