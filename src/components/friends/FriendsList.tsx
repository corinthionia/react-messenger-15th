import { Link } from 'react-router-dom';
import styled from 'styled-components';

import me from '../../assets/data/me.json';
import users from '../../assets/data/users.json';

import CreateList from '../../base/CreateList';

const FriendsList = () => {
  return (
    <>
      <CreateList user={me} text={me.statusMsg} />
      {users.map((user) => (
        <StyledLink to={`/chat/${user.id}`}>
          <CreateList user={user} text={user.statusMsg} key={user.id} />
        </StyledLink>
      ))}
    </>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default FriendsList;
