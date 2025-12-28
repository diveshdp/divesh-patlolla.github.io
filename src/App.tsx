// import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import FirstComponent from "./components/FirstComponent";
// import SecondComponent from "./components/SecondComponent";

function App() {
  // const [count, setCount] = useState<number>(0);

  return (
    <div className="App" style={{ background: "rgba(46, 45, 43, 1)" }}>
      <Header/>
      <Hero/>
      {/* <FirstComponent title="Hello from TSX!" />
      <SecondComponent
        message="Counter Example"
        count={count}
        onIncrement={() => setCount(count + 1)}
      /> */}
    </div>
  );
}

export default App;
