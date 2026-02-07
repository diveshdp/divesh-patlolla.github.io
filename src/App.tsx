import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/Main";

function App() {

  return (
    <div className="App" style={{ background: "rgba(46, 45, 43, 1)", width: "100%" }}>
      <Header/>
      <Hero/>
      <Main/>
    </div>
  );
}

export default App;
