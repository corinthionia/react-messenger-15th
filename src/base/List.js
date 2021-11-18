import styled from 'styled-components';

const List = ({ user, text }) => {
  const { id, name } = user;

  return (
    <Wrapper>
      <ProfileImg src={require(`../assets/profileImg/${id}.jpg`).default} />
      <TextWrapper>
        <Name>{name}</Name>
        <Text>{text}</Text>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ProfileImg = styled.img`
  width: 20%;
  height: 20%;

  margin: 2.5% 0 0 10%;
  padding: 7.5%;

  border-radius: 50%;
  object-fit: cover;
`;

const TextWrapper = styled.section`
  width: 70%;

  margin-top: 2.5%;
  padding: 7.5% 5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.span`
  font-weight: bold;
  margin-bottom: 5%;

  color: #545c76;
`;

const Text = styled.span`
  font-size: 10px;
  color: #c9cdd8;
`;

export default List;
