import styled from 'styled-components';
import MyChatRoom from './MyChatRoom';
import YourChatRoom from './YourChatRoom';

const Wrapper = () => {
  return (
    <EntireWrapper>
      <Header>
        <Profile>
          <ProfileImg />
        </Profile>
      </Header>
      <Chat>
        <MyChatRoom />
        <YourChatRoom />
      </Chat>
      <Form>
        <AddBtn>➕</AddBtn>
        <Input />
        <AddBtn>➕</AddBtn>
      </Form>
    </EntireWrapper>
  );
};

const EntireWrapper = styled.div`
  height: 100vh;
`;

const Header = styled.header`
  height: 12.5%;
  background: pink;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Profile = styled.section`
  width: 45%;
  height: 65%;
  background: white;

  display: flex;
  align-items: center;
`;

const ProfileImg = styled.div`
  width: 7.5vh;
  height: 7.5vh;

  border-radius: 50%;
  margin: 10%;

  background: pink;

  object-fit: cover;
`;

const Chat = styled.section`
  height: 75%;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.75rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #d8d8d8;
    background-clip: padding-box;

    border-radius: 10px;
    border: 0.25rem solid transparent;
  }
`;

const Form = styled.form`
  height: 12.5%;
  background: yellowgreen;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Input = styled.input`
  height: 50%;
  width: 65%;

  border: none;
  border-radius: 1.5rem;
`;

const AddBtn = styled.button`
  height: 50%;
  width: 10%;

  border: none;
  background: none;

  :hover {
    cursor: pointer;
  }
`;

export default Wrapper;
