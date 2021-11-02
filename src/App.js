import "./App.css";
import Router from "../src/router/Router";
import UserProvider from "./providers/UserProvider";
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}
export default App;
