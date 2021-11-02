import styled from "styled-components";
import SearchInput from "../molecules/SearchInput";
import UserCard from "../organism/user/UserCard";

const users = [...Array(10).keys()].map(((val) => {
  return {
    id: val,
    name: `じゃけぇ${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "12345@example.com",
    phone: "909-111-2222",
    company: {
      name: "テスト株式会社",
    },
    website: "https://google.com",
  }
}));

const Users = () => {

  return (
    <SContainer>
      <h2>一覧ユーザー</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => {
        return <UserCard key={user.id} user={user} />
        })}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`

export default Users;
