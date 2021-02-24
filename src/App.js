import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Album from "./components/album/index";
import Excercise from "./excerciseone/index";
function App() {
  return (
    <div className="App">
      <Album />
      <Excercise />
    </div>
  );
}

export default App;
