import styled from 'styled-components';

type TemplateProps = {
  header?: object;
  content?: object;
  backgroundColor?: string;
  bottom?: object;
};

type BgColor = {
  backgroundColor: any;
};

const Template = ({
  header,
  content,
  backgroundColor,
  bottom,
}: TemplateProps) => {
  return (
    <Wrapper backgroundColor={backgroundColor}>
      <Header>{header}</Header>
      <Content>{content}</Content>
      <Bottom>{bottom}</Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.section<BgColor>`
  width: 42.5vh;
  height: 90vh;
  min-width: 290px;
  min-height: 580px;

  position: relative;
  margin: 0;

  overflow: hidden;

  background: ${(props) => props.backgroundColor};

  @media screen and (min-width: 405px) {
    border: 0.1rem solid #efefef;
    border-radius: 2.5rem;
  }
`;

const Header = styled.header`
  height: 15%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #263256;
`;

const Content = styled.section`
  height: 72.5%;

  overflow-x: hidden;

  border-radius: 2.5rem 2.5rem 0 0;
  background: #ffffff;

  &::-webkit-scrollbar {
    width: 0.75rem;
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
