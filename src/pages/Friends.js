import {
  Content,
  Header,
  HeaderTitle,
  Icon,
  Wrapper,
} from '../components/commons/Components';
import NavBar from '../components/commons/NavBar';
import users from '../assets/users.json';
import User from '../components/friends/User';

const Friends = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderTitle>Friends</HeaderTitle>
        <Icon />
      </Header>
      <Content>
        {users.map(({ userId, userName, statusMsg }) => (
          <User
            key={userId}
            userId={userId}
            userName={userName}
            statusMsg={statusMsg}
          />
        ))}
      </Content>
      <NavBar />
    </Wrapper>
  );
};

export default Friends;
