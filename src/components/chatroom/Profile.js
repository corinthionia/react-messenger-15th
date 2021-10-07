import styled from 'styled-components';
import { useState } from 'react';

const Profile = () => {
  const profileArr = [
    {
      id: 0,
      name: '주현',
    },
    { id: 1, name: '누구게' },
  ];

  const [currentProfile, setCurrentProfile] = useState(profileArr[0]);

  const changeProfile = () => {
    if (currentProfile.id === 0) {
      setCurrentProfile(profileArr[1]);
    } else {
      setCurrentProfile(profileArr[0]);
    }
  };

  return (
    <Wrapper onClick={changeProfile}>
      <ProfileImg />
      <TextWrapper>
        <ProfileText>{currentProfile.name}</ProfileText>
        <ProfileText>입력 중...</ProfileText>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 35%;
  height: 65%;
  max-width: 25rem;

  display: flex;
  align-items: center;

  background: white;

  :hover {
    cursor: pointer;
  }
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

export default Profile;
