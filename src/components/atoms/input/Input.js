import styled from 'styled-components';

// placeholderを動的に変えたいので、propsを渡す
const Input = (props) => {
  // placeholderが渡されていない時は、空文字を入れておく
  const { placeholder = "" } = props;

  return(
    <>
    <SInput type="text" placeholder={placeholder}></SInput>
    </>
  )
};

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`

export default Input;