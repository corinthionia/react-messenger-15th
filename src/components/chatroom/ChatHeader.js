import styled from 'styled-components';
import { FiChevronLeft } from 'react-icons/fi';

const ChatHeader = ({ changeUser, currentUser }) => {
  return (
    <Header>
      <BackBtn>
        <FiChevronLeft />
      </BackBtn>
      <ProfileWrapper onClick={changeUser}>
        <ProfileImg src={currentUser.img} />
        <TextWrapper>
          <ProfileName>{currentUser.name}</ProfileName>
          <ProfileText>Typing ...</ProfileText>
        </TextWrapper>
      </ProfileWrapper>
      <Blank />
    </Header>
  );
};

const Header = styled.header`
  height: 10%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 0.15rem solid #efefef;
`;

const BackBtn = styled.button`
  width: 10%;
  height: 50%;
  font-size: 1.5rem;

  margin: 0 1rem;

  background: none;
  border: none;

  :hover {
    cursor: pointer;
  }
`;

const Blank = styled.div`
  width: 10%;
  height: 50%;
  margin: 0 1rem;
`;

const ProfileWrapper = styled.section`
  width: 45%;
  height: 75%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  :hover {
    cursor: pointer;
  }
`;

const ProfileImg = styled.img`
  width: 4vh;
  height: 4vh;

  border-radius: 50%;

  object-fit: cover;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 0.9rem;
`;

const ProfileName = styled.span`
  color: #3a3a3a;
`;

const ProfileText = styled.span`
  font-size: 0.65rem;
  color: #a1a1a1;
`;

export default ChatHeader;
