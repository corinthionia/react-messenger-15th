import styled from 'styled-components';
import StatusBar from './StatusBar';

const Template = ({ component }) => {
  return (
    <ChatRoomWrapper>
      <StatusBar />
      {component}
    </ChatRoomWrapper>
  );
};

const ChatRoomWrapper = styled.section`
  height: 50rem;
  width: 22.5rem;

  margin: 0;
  border: 0.1rem solid #efefef;
`;

export default Template;
