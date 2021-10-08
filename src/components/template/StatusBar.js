import styled from 'styled-components';
import { FiBarChart, FiBatteryCharging, FiWifi } from 'react-icons/fi';

const StatusBar = () => {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();

  return (
    <Wrapper>
      <LeftStatusBar>{`${hour}:${minute}`}</LeftStatusBar>
      <RightStatusBar>
        <FiBarChart />
        <FiWifi />
        <FiBatteryCharging />
      </RightStatusBar>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 2.5%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftStatusBar = styled.span`
  font-size: 0.75rem;
  margin: 0 0.5rem;
`;

const RightStatusBar = styled.span`
  width: 17%;
  font-size: 0.85rem;

  display: flex;
  justify-content: space-evenly;
`;

export default StatusBar;
