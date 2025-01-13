import { vscode } from "./utilities/vscode";
import "./App.css";

function App() {
  function handleHowdyClick() {
    vscode.postMessage({
      command: "ready",
      text: "Hey there partner! 🤠",
    });
  }

  return (
    <main>
      <h1>Hello World!</h1>
      <button onClick={handleHowdyClick}>aaaa</button>
    </main>
  );
}

export default App;
