import styled from "styled-components";
import SecondaryButton from "../atoms/button/SecondaryButton";
import SearchInput from "../molecules/SearchInput";
import UserCard from "../organism/user/UserCard";
import React, { useContext } from 'react';
import { UserContext } from "../../providers/UserProvider";

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
  const { userInfo, setUserInfo } = useContext(UserContext);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  
  return (
    <SContainer>
      <h2>一覧ユーザー</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>

      <SUserArea>
        {users.map((obj) => {
        return <UserCard key={obj.id} user={obj} />
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
