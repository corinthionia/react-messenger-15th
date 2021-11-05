import styled from 'styled-components';
import { useParams } from 'react-router';

const Message = ({ chat, handleDblClick, heart }) => {
  const { userId } = useParams();

  return (
    <ChatWrapper onDoubleClick={() => handleDblClick(chat.date)}>
      <ProfileImg
        src={require('../../assets/profileImg/' + userId + '.jpg').default}
      />
      <ChatText>{chat.text}</ChatText>
      {heart}
    </ChatWrapper>
  );
};

const OthersChat = ({ chat, chatList, setChatList, users, userId }) => {
  // 상대방의 말풍선을 더블클릭 하면 하트 추가/제거
  const handleDblClick = (date) => {
    return (
      <>
        {setChatList(
          chatList.map((chat) =>
            chat.date === date
              ? { ...chat, isDoubleClicked: !chat.isDoubleClicked }
              : chat
          )
        )}
      </>
    );
  };

  const addHeart = (isHearted) => {
    return (
      <Message
        chat={chat}
        users={users}
        handleDblClick={handleDblClick}
        isHearted={isHearted}
      />
    );
  };

  return (
    <>{chat.isDoubleClicked ? addHeart(<Heart>💗</Heart>) : addHeart(null)}</>
  );
};

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProfileImg = styled.img`
  width: 2rem;
  height: 2rem;

  margin: 2.5rem 0.5rem 0 0.5rem;
  border-radius: 50%;

  object-fit: cover;
`;

const ChatText = styled.span`
  max-width: 12.5rem;
  font-size: 0.5rem;

  margin: 0.75rem 0.25rem;
  padding: 0.75rem;

  align-self: flex-start;
  text-align: justify;

  background: #efefef;
  border-radius: 1.25rem 1.25rem 1.25rem 0.25rem;

  -webkit-user-select: none;
`;

const Heart = styled.span`
  font-size: 0.5rem;
  margin: 1rem 0.25rem;
  align-self: flex-end;

  -webkit-user-select: none;
`;

export default OthersChat;
