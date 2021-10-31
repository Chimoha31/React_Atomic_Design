import { BrowserRouter } from "react-router-dom";
import "./App.css";
import PrimaryButton from "./components/atoms/button/PrimaryButton";
import SecondaryButton from "./components/atoms/button/SecondaryButton";
import SearchInput from "./components/molecules/SearchInput";
import UserCard from "./components/organism/user/UserCard";
// import HeaderOnly from "./components/templetes/HeaderOnly";
import DefaultLayout from './components/templetes/DefaultLayout';

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
    // <div className="App">
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>Test</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user}></UserCard>
      </DefaultLayout>
    </BrowserRouter>
    // </div>
  );
}
export default App;
