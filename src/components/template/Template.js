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

const ChatRoomWrapper = styled.div`
  height: 55rem;
  width: 27.5rem;

  border: 0.15rem solid #efefef;
`;

export default Template;
