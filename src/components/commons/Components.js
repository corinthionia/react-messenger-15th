import styled from "styled-components";

export const Wrapper = styled.div`
  width: 42.5vw;
  height: 90vh;
  border: 1px solid #e2e2e2;

  @media screen and (min-width: 768px) {
    height: calc(var(--vh, 1vh) * 100);
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 15%;
`;

export const Content = styled.section`
  width: 100%;
  height: 75%;
`;

export const Bottom = styled.section`
  width: 100%;
  height: 10%;
`;
