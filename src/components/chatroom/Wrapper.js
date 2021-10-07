import styled from 'styled-components';
import MessageForm from './MessageForm';
import MyChat from './MyChat';
import YourChat from './YourChat';

const Wrapper = () => {
  return (
    <EntireWrapper>
      <Header>
        <Profile>
          <ProfileImg />
          <TextWrapper>
            <ProfileText>{'주현'}</ProfileText>
            <ProfileText>입력 중...</ProfileText>
          </TextWrapper>
        </Profile>
      </Header>
      <Chat>
        <MyChat />
        <YourChat />
      </Chat>
      <MessageForm />
    </EntireWrapper>
  );
};

const EntireWrapper = styled.div`
  height: 50rem;
  width: 27.5rem;

  margin: 0;
  border: 0.15rem solid #efefef;
`;

const Header = styled.header`
  height: 10%;
  background: #efefef;

  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Profile = styled.section`
  width: 35%;
  max-width: 25rem;
  height: 65%;

  display: flex;
  align-items: center;

  background: white;
`;

const ProfileImg = styled.div`
  width: 4vh;
  height: 4vh;

  border-radius: 50%;
  margin: 10%;

  background: #efefef;

  object-fit: cover;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileText = styled.span`
  font-size: 0.95rem;
`;

const Chat = styled.section`
  height: 80%;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.9rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #d8d8d8;
    background-clip: padding-box;

    border-radius: 10px;
    border: 0.25rem solid transparent;
  }
`;

export default Wrapper;
