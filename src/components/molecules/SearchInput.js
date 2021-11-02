import React, { memo } from 'react';
import styled from "styled-components";
import PrimaryButton from "../atoms/button/PrimaryButton";
import Input from "../atoms/input/Input";

const SearchInput = memo(() => {
  return (
    <SContainer>
      <Input placeholder="検索したいことを入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

const SContainer = styled.div`
  display: flex;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
  align-items: center;
`;

export default SearchInput;
