import styled from 'styled-components';
import { Link } from 'react-router-dom';

import List from '../../base/List';
import users from '../../assets/data/users.json';

const ChatListBox = () => {
  return (
    <>
      {users.map((user) => (
        <StyledLink to={`/chat/${user.id}`} key={user.id}>
          <List user={user} text={user.statusMsg} />
        </StyledLink>
      ))}
    </>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default ChatListBox;
