import styled from "styled-components";

export const Wrapper = styled.div`
  width: 350px;
  height: 700px;

  border: 1px solid #e2e2e2;
  margin-top: 25px;

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 15%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #e2e2e2;
`;

export const HeaderTitle = styled.div`
  width: 75%;
  height: 50%;

  display: flex;
  align-items: center;
  font-size: 32px;

  padding-left: 5%;
`;

export const Icon = styled.div`
  width: 20%;
  height: 50%;
`;

export const Content = styled.section`
  width: 100%;
  height: 75%;
`;

export const Bottom = styled.section`
  width: 80%;
  height: 10%;

  padding: 0 10%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-top: 1px solid #e2e2e2;
`;
