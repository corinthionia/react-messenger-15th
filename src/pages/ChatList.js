import {
  Content,
  Header,
  HeaderTitle,
  Wrapper,
} from "../components/commons/Components";
import NavBar from "../components/commons/NavBar";

const ChatList = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderTitle>Chat List</HeaderTitle>
      </Header>
      <Content></Content>
      <NavBar />
    </Wrapper>
  );
};

export default ChatList;
