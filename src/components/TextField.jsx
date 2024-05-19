import React, { useContext, useState } from "react";
import { IoMdSend } from "react-icons/io";
import Loader from "./Loader";
import Alert from "./Alert";
import { FileContext } from "../ContextProvider/FileContext";

// Constants for error messages
const ERROR_NO_FILE = "Please upload a file";
const ERROR_NO_QUESTION = "Please enter a question";

export default function TextField({ handleSend }) {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const { file } = useContext(FileContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if a file has been uploaded
    if (!file) {
      setErrMessage(ERROR_NO_FILE);
      return;
    }

    // Check if a question has been entered
    if (question.trim() === "") {
      setErrMessage(ERROR_NO_QUESTION);
      return;
    }

    setLoading(true);
    await handleSend(question);
    setQuestion("");
    setLoading(false);
  };

  return (
    <div className="fixed-bottom bg-white pb-6">
      <div className="px-7  rounded-lg flex items-center justify-center">
        <form onSubmit={handleSubmit}>
          <div className="relative flex items-center justify-center">
            <input
              placeholder="send a message..."
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-[22rem] md:w-[44rem] lg:w-[64rem] font-semibold focus:border-green-600 border-[1.5px] border-transparent  focus:ring-green-600 focus:outline-none focus:border-[1.5px] bg-gray-100 p-3 pr-10 rounded-lg"
            />
            <button
              className="text-green-600 absolute right-2 cursor-pointer"
              type="submit"
            >
              {loading ? <Loader /> : <IoMdSend size={20} />}
            </button>
          </div>
        </form>
      </div>
      {errMessage && <Alert message={errMessage} />}
    </div>
  );
}
