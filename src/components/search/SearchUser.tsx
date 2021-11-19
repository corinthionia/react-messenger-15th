import React, { useState } from 'react';

import styled from 'styled-components';

import users from '../../assets/data/users.json';

const SearchUser = () => {
  const [inputText, setInputText] = useState('d');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const results = users.filter(
    (user) => inputText && user.name.includes(inputText)
  );

  const ResultList = () => {
    return (
      <>
        {results.map((user) => (
          <Wrapper key={user.id}>
            <ProfileImg
              src={require(`../../assets/profileImg/${user.id}.jpg`).default}
            />
            <TextWrapper>
              <Name>{user.name}</Name>
              <StatusMsg>{user.statusMsg}</StatusMsg>
            </TextWrapper>
          </Wrapper>
        ))}
      </>
    );
  };

  return (
    <>
      <InputWrapper>
        <Input onChange={handleInputChange} placeholder="Search..." />
        <AddBtn>🔎</AddBtn>
      </InputWrapper>
      <ResultList />
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
`;

const Wrapper = styled.section`
  height: 20%;

  display: flex;
  flex-direction: row;
`;

const ProfileImg = styled.img`
  width: 3rem;
  height: 3rem;

  margin: 0.5rem;
  padding: 1.25rem 1rem;

  border-radius: 50%;

  object-fit: cover;
`;

const TextWrapper = styled.section`
  width: 70%;

  padding: 1.5rem;

  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const StatusMsg = styled.span`
  font-size: 0.5rem;
`;

export default SearchUser;
