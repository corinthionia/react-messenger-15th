import {
  Content,
  Header,
  HeaderTitle,
  Icon,
  Wrapper,
} from '../components/commons/Components';
import UserList from '../components/commons/UserList';
import NavBar from '../components/commons/NavBar';

import me from '../assets/me.json';
import friends from '../assets/friends.json';

const Friends = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderTitle>Friends</HeaderTitle>
        <Icon />
      </Header>
      <Content>
        {friends.map(({ userId, userName, statusMsg }) => (
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

export default Friends;
