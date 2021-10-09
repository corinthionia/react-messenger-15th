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
  height: 60rem;
  width: 27rem;

  margin: 0;
  border: 0.1rem solid #efefef;
`;

export default Template;
