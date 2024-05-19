import { FileProvider } from "./ContextProvider/FileProvider";
import ChatBox from "./components/ChatBox";
import Navbar from "./components/Navbar";

function App() {
  return (
    <FileProvider>
      <div className="App">
        <Navbar />
        <ChatBox />
      </div>
    </FileProvider>
  );
}

export default App;
