// import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
// import useTemplateFeatures from "./hooks/useTemplateFeatures";

function App() {
  // const [count, setCount] = useState<number>(0);

  return (
    <div className="App" style={{ background: "rgba(46, 45, 43, 1)" }}>
      <Header/>
      <Hero/>
      <Main/>
    </div>
  );
}

export default App;
