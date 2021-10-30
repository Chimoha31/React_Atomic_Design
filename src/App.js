import "./App.css";
import PrimaryButton from "./components/atoms/button/PrimaryButton";
import SecondaryButton from "./components/atoms/button/SecondaryButton";

function App() {
  return (
    <div>
      <div className="App">
        <PrimaryButton>Test</PrimaryButton>
        <PrimaryButton>Click Me !</PrimaryButton>
      </div>

      <div className="App">
        <SecondaryButton>2番目のボタン</SecondaryButton>
      </div>
    </div>
  );
}

export default App;
