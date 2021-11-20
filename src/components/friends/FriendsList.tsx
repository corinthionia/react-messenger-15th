import { Link } from 'react-router-dom';
import styled from 'styled-components';

import me from '../../assets/data/me.json';
import users from '../../assets/data/users.json';

import List from '../../base/List';

const FriendsList = () => {
  return (
    <>
      <List user={me} text={me.statusMsg} />
      {users.map((user) => (
        <StyledLink to={`/chat/${user.id}`}>
          <List user={user} text={user.statusMsg} key={user.id} />
        </StyledLink>
      ))}
    </>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default FriendsList;
