import React, { useContext, useState } from "react";
import { FileContext } from "../ContextProvider/FileContext";
import { logo, add } from "../assets";
import { CiFileOn } from "react-icons/ci";
import axios from "axios";
import Alert from "./Alert";
import Loader from "./Loader";

export default function Navbar() {
  const [fileNames, setFileNames] = useState([]);
  const { setFile } = useContext(FileContext);
  const [errMessage, setErrMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (event) => {
    setLoading(true);
    const selectedFiles = Array.from(event.target.files);
    const nonPdfFiles = selectedFiles.filter(
      (file) => file.type !== "application/pdf"
    );

    if (nonPdfFiles.length > 0) {
      setErrMessage("Please upload only PDF files");
      return;
    }

    const fileNames = selectedFiles.map((file) => file.name);
    setFileNames(fileNames);

    try {
      const formData = new FormData();
      selectedFiles.forEach((file) => {
        formData.append("files", file);
      });

      const response = await axios.post(
        "https://ai-pdf-backend.onrender.com/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setFile(true);
      setLoading(false);

      if (response.data.status !== "success") {
        setErrMessage("File was not uploaded successfully. Please try again.");
      }

      // console.log(response.data);
    } catch (error) {
      setLoading(false);
      console.error(error);
      setErrMessage("An error occurred while uploading the file.");
    }
  };

  return (
    <div className="flex justify-between items-center px-6 md:px-10 py-4 bg-white shadow-md fixed top-0 w-full">
      {/* logo */}
      <div>
        <img src={logo} alt="logo.png" />
      </div>

      <div className="flex items-center  space-x-4">
        {/* filename */}
        <div
          className={`text-sm ${
            fileNames.length > 0 ? "flex" : "hidden"
          } space-x-2 text-green-600 font-semibold`}
        >
          <CiFileOn size={20} />
          {fileNames.map((fileName, index) => (
            <React.Fragment key={index}>
              <p className="md:hidden">{fileName.substring(0, 15)}...</p>
              <p className="hidden md:block">{fileName}</p>
            </React.Fragment>
          ))}
        </div>

        {/* file input*/}
        {loading ? (
          <Loader />
        ) : (
          <div>
            <label>
              {/* small devices */}
              <div className="md:hidden border-2 cursor-pointer rounded-lg w-9 h-9  border-black flex  p-2.5">
                <img className="" src={add} alt="add" />
                <input
                  onChange={handleFileChange}
                  type="file"
                  id="file"
                  hidden
                  multiple
                />
              </div>

              {/* medium & large devices */}
              <div className="hidden md:flex space-x-1 items-center font-semibold border-2 cursor-pointer text-sm py-2 justify-center border-black rounded-lg w-40">
                <p>Upload PDF</p>
                <input
                  onChange={handleFileChange}
                  type="file"
                  id="file"
                  hidden
                  multiple
                />
              </div>
            </label>
          </div>
        )}
      </div>
      {/* alert  */}
      {errMessage && <Alert message={errMessage} />}
    </div>
  );
}
