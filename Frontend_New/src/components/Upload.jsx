import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const FileUpload = ({ file, setFile, district, setDistrict }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleUpload = () => {
    try {
      setLoading(true);
      if (file == null) {
        return;
      }

      setTimeout(() => {
        setLoading(false);

        navigate("/json");
      }, 6000);
    } catch (err) {
      console.log("Error", err);
    }
  };

  return (
    <div className="gap-5 bg-zinc-900 w-full h-screen flex justify-center items-center flex-col">
      <h1 className="flex bg-zinc-950 py-4 px-2 rounded gap-2 text-5xl font-bold text-gray-100 mb-5">
        Upload Pdf or Image
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
      </h1>
      <div className="bg-zinc-400 font-medium rounded-lg max-w-sm w-full p-3">
        <input type="file" accept="image/*,.pdf" onChange={handleFileChange} />
      </div>
      <div className="flex items-center justify-between rounded-lg max-w-sm px-4 bg-zinc-400 p-2 w-full">
        <h1 className="text-lg font-medium">Choose District</h1>
        <select
          className="p-2 rounded outline-none"
          onChange={(e) => setDistrict(e.target.value)}
          value={district}
        >
          <option value={"Vellore"}>Vellore</option>
          <option value={"Ramanathapuram"}>Ramanathapuram</option>
          <option value={"Villupuram"}>Villupuram</option>
        </select>
      </div>
      <button
        className="w-[12rem] py-2 font-medium bg-zinc-700 rounded text-gray-100"
        onClick={handleUpload}
      >
        Upload
      </button>
      {loading ? (
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>

          <p className="text-green-500">File is Uploading.....</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FileUpload;
