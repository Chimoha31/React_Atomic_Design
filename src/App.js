import "./App.css";
import PrimaryButton from "./components/atoms/button/PrimaryButton";
import SecondaryButton from "./components/atoms/button/SecondaryButton";
import SearchInput from "./components/molecules/SearchInput";
import UserCard from "./components/organism/user/UserCard";

function App() {
  const user = {
    name: "じゃけぇ",
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "12345@example.com",
    phone: "909-111-2222",
    company: {
      name: "テスト株式会社",
    },
    website: "https://google.com",
  };

  return (
    <div className="App">
      <PrimaryButton>Test</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user}></UserCard>
    </div>
  );
}
export default App;
