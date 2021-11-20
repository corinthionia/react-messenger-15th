import styled from 'styled-components';
import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

type ChatHeaderProps = {
  handleChangeUser: React.MouseEventHandler<HTMLElement>;
  currentUser: { id: number; name: string; statusMsg: string };
};

const ChatHeader = ({ handleChangeUser, currentUser }: ChatHeaderProps) => {
  return (
    <Wrapper>
      <BackBtn>
        <Link to={'/chatList'}>
          <FiChevronLeft />
        </Link>
      </BackBtn>
      <ProfileWrapper onClick={handleChangeUser}>
        <ProfileImg
          src={require(`../../assets/profileImg/${currentUser.id}.jpg`).default}
        />
        <TextWrapper>
          <ProfileName>{currentUser.name}</ProfileName>
          <ProfileText>Typing ...</ProfileText>
        </TextWrapper>
      </ProfileWrapper>
      <Blank />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  align-items: center;
`;

const BackBtn = styled.button`
  width: 1rem;
  height: 2.5rem;
  font-size: 1.25rem;

  margin: 0 1rem;

  background: none;
  border: none;

  :hover {
    cursor: pointer;
  }
`;

const Blank = styled.div`
  width: 1rem;
  height: 2.5rem;

  margin: 0 1rem;
`;

const ProfileWrapper = styled.section`
  width: 10rem;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  :hover {
    cursor: pointer;
  }
`;

const ProfileImg = styled.img`
  width: 2.25rem;
  height: 2.25rem;

  border-radius: 50%;

  object-fit: cover;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 0.9rem;
`;

const ProfileName = styled.span`
  color: #263256;
  font-weight: 600;
`;

const ProfileText = styled.span`
  font-size: 0.65rem;
  color: #a1a1a1;
`;

export default ChatHeader;
