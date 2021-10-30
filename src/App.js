import "./App.css";
import PrimaryButton from "./components/atoms/button/PrimaryButton";
import SecondaryButton from "./components/atoms/button/SecondaryButton";
import SearchInput from "./components/molecules/SearchInput";
import UserCard from './components/organism/user/UserCard';

function App() {
  return (
      <div className="App">
        <PrimaryButton>Test</PrimaryButton>
        <SecondaryButton>2番目のボタン</SecondaryButton>

        <br/>
        <SearchInput />

        <UserCard></UserCard>
      </div>
  );
}

export default App;
