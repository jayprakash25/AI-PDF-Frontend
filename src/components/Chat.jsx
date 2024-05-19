import React, { useEffect, useRef } from "react";
import { ai } from "../assets";

// Constants for chat types
const QUESTION_TYPE = "question";

export default function Chat({ chat: { type, text } }) {
  const endRef = useRef();

  // Scroll to the end of the chat when a new message is added
  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [text]);

  // Determine the direction of the chat based on the type
  const chatDirection =
    type === QUESTION_TYPE ? "flex-row-reverse" : "flex-row bg-gray-100";

  return (
    <div
      className={`flex py-4 px-2 rounded-lg space-x-4 w-full items-start font-semibold ${chatDirection}`}
    >
      {/* AI avatar, hidden for questions */}
      <div className={`rounded ${type === QUESTION_TYPE && "hidden"}`}>
        <img className="w-10 h-10" src={ai} alt=".png" />
      </div>

      {/* Chat text, with  styling for questions */}
      <div
        className={`max-w-64 text-start md:max-w-lg lg:max-w-3xl ${
          type === QUESTION_TYPE && "bg-slate-200 px-4 py-2 rounded-lg"
        }`}
      >
        <p>{text}</p>
      </div>

      {/* Reference for scrolling to the end of the chat */}
      <div ref={endRef} />
    </div>
  );
}
