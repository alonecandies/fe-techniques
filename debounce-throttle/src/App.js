import Debounce from "./debounce";
import Throttle from "./throttle";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <Debounce />
      <Throttle />
    </div>
  );
}

export default App;
