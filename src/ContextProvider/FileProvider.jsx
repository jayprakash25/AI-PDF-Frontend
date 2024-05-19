import React, { useState } from "react";
import { FileContext } from "./FileContext";

export function FileProvider({ children }) {
  const [file, setFile] = useState(null);

  return (
    <FileContext.Provider value={{ file, setFile }}>
      {children}
    </FileContext.Provider>
  );
}
