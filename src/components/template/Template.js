import styled from 'styled-components';

const Template = ({ header, content, background, bottom }) => {
  return (
    <Wrapper background={background}>
      <Header>{header}</Header>
      <Content>{content}</Content>
      <Bottom>{bottom}</Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 42.5rem;
  width: 20rem;

  position: relative;
  margin: 0;

  overflow: hidden;

  background: ${(props) => props.background || '#ffffff'};

  border: 0.1rem solid #efefef;
  border-radius: 2.5rem;
`;

const Header = styled.header`
  height: 12.5%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #263256;
  border-bottom: 0.1rem solid #efefef;
`;

const Content = styled.section`
  overflow: auto;
  height: 75%;

  border-radius: 2.5rem 2.5rem 0 0;
  background: #ffffff;

  &::-webkit-scrollbar {
    width: 0.75rem;
  }

  &::-webkit-scrollbar-thumb {
    background: none;
  }

  :hover {
    &::-webkit-scrollbar-thumb {
      background: #d8d8d8;
      background-clip: padding-box;

      border-radius: 1rem;
      border: 0.25rem solid transparent;
    }
  }
`;

const Bottom = styled.form`
  height: 12.5%;
  width: 100%;

  position: abolute;
  bottom: 0;

  border-top: 0.1rem solid #efefef;
  background: #ffffff;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export default Template;
