import React from 'react';
import BaseButton from './BaseButton';
import styled from 'styled-components';

const PrimaryButton = (props) => {
  const { children } = props;

  return(
    <>
    <SButton>{children}</SButton>
    </>
  )
};

const SButton = styled(BaseButton)`
  background-color: #40514e;
`

export default PrimaryButton;