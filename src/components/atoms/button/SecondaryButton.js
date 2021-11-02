import React from 'react';
import BaseButton from './BaseButton';
import styled from 'styled-components';

// このpropsはbuttonの文言に対して
const SecondaryButton = (props) => {
  const { children, onClick } = props;

  return(
    <>
      <SButton onClick={onClick}>{children}</SButton>
    </>
  )
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`

export default SecondaryButton;