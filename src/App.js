import Home from "./pages/Home";
import Project from "./components/Project/Project";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="page">
        <Project />
      </div>
    </div>
  );
}

export default App;
