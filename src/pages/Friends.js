import {
  Content,
  Header,
  HeaderTitle,
  Icon,
  Wrapper,
} from '../components/commons/Components';
import styled from 'styled-components';
import UserList from '../components/commons/UserList';
import NavBar from '../components/commons/NavBar';
import { MdPersonSearch } from 'react-icons/md';

import friends from '../assets/friends.json';
import useInput from '../hooks/useInput';

const Friends = () => {
  const { inputText, handleInputChange } = useInput('');

  const results = friends.filter(
    (friend) => inputText && friend.userName.includes(inputText)
  );

  console.log(results);

  return (
    <Wrapper>
      <Header>
        <HeaderTitle>Friends</HeaderTitle>
        <Icon />
      </Header>
      <Content>
        <SearchWrapper>
          <MdPersonSearch />
          <Input onChange={handleInputChange} placeholder="Search..." />
        </SearchWrapper>

        {inputText
          ? results.map(({ userId, userName, statusMsg }) => (
              <UserList
                key={userId}
                userId={userId}
                userName={userName}
                message={statusMsg}
              />
            ))
          : friends.map(({ userId, userName, statusMsg }) => (
              <UserList
                key={userId}
                userId={userId}
                userName={userName}
                message={statusMsg}
              />
            ))}
      </Content>
      <NavBar />
    </Wrapper>
  );
};

const SearchWrapper = styled.section`
  width: 100%;
  height: 10%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Input = styled.input`
  width: 60%;
  height: 50%;
  padding: 0 4%;

  outline: none;
  font-size: 12px;

  border: 1px solid #d2d2d2;
  border-radius: 12px;
`;

export default Friends;
