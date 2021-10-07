import styled from 'styled-components';
import Profile from './Profile';
import MessageForm from './MessageForm';
import Chat from './Chat';

const Wrapper = () => {
  return (
    <EntireWrapper>
      <Header>
        <Profile />
      </Header>
      <Chat />
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

export default Wrapper;
