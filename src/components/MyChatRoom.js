import styled from 'styled-components';

const MyChatRoom = () => {
  const chats = [
    '하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이',
    '안녕',
    '헬로우',
    '하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이',
  ];

  return (
    <MyMessage>
      {chats.map((chat, i) => (
        <Message key={'my' + i}>{chat}</Message>
      ))}
    </MyMessage>
  );
};

const MyMessage = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  background: white;
`;

const Message = styled.div`
  background: powderblue;

  border-radius: 2rem;
  margin: 0.5rem;
  padding: 1rem;

  align-self: flex-end;

  text-align: right;
`;

export default MyChatRoom;
