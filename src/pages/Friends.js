import {
  Content,
  Header,
  HeaderTitle,
  Icon,
  Wrapper,
} from '../components/commons/Components';
import NavBar from '../components/commons/NavBar';
import me from '../assets/me.json';
import friends from '../assets/friends.json';
import User from '../components/friends/User';

const Friends = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderTitle>Friends</HeaderTitle>
        <Icon />
      </Header>
      <Content>
        <User
          userId={me.userId}
          userName={me.userName}
          statusMsg={me.statusMsg}
        />
        {friends.map(({ userId, userName, statusMsg }) => (
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
