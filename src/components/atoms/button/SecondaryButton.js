import React from 'react';
import BaseButton from './BaseButton';
import styled from 'styled-components';

const SecondaryButton = (props) => {
  const { children } = props;

  return(
    <>
      <SButton>{children}</SButton>
    </>
  )
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`

export default SecondaryButton;