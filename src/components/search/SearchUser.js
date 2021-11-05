import styled from 'styled-components';

const SearchUser = () => {
  return (
    <>
      <InputWrapper>
        <Input placeholder="Search..." />
        <AddBtn>🔎</AddBtn>
      </InputWrapper>
    </>
  );
};

const InputWrapper = styled.section`
  height: 3rem;
  border-bottom: 1px solid #efefef;

  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  width: 85%;

  border: none;
  padding: 0 1rem;
`;

const AddBtn = styled.button`
  width: 15%;

  border: none;
  background: none;

  :hover {
    cursor: pointer;
  }
`;

export default SearchUser;
