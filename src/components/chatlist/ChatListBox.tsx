import styled from 'styled-components';
import { Link } from 'react-router-dom';

import CreateList from '../../base/CreateList';
import users from '../../assets/data/users.json';

// 채팅 목록이 나타나는 부분
const ChatListBox = () => {
  return (
    <>
      {users.map((user) => (
        <StyledLink to={`/chat/${user.id}`} key={user.id}>
          <CreateList user={user} text={user.statusMsg} />
        </StyledLink>
      ))}
    </>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default ChatListBox;
