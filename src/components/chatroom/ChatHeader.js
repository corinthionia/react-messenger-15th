import styled from 'styled-components';
import { FiChevronLeft } from 'react-icons/fi';

const ChatHeader = ({ changeProfile, currentUser }) => {
  return (
    <Header>
      <BackBtn>
        <FiChevronLeft />
      </BackBtn>
      <ProfileWrapper onClick={changeProfile}>
        <ProfileImg src={currentUser.img} />
        <TextWrapper>
          <ProfileName>{currentUser.name}</ProfileName>
          <ProfileText>Typing ...</ProfileText>
        </TextWrapper>
      </ProfileWrapper>
      <BackBtn />
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

const ProfileWrapper = styled.section`
  width: 35%;
  height: 75%;
  max-width: 25rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  border-radius: 1.25rem;

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
`;

const ProfileName = styled.span`
  color: #3a3a3a;
`;

const ProfileText = styled.span`
  font-size: 0.75rem;
  color: #a1a1a1;
`;

export default ChatHeader;
